import { useState, useMemo, useEffect } from "react";
import { useGetCustomers } from "../../customers/hooks/useGetCustomers";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { useUpdateLoanStatus } from "../../loans/hooks/useUpdateLoanStatus";
import { paymentsTable$key } from "./__generated__/paymentsTable.graphql";
import PaymentsTable from "./paymentsTable";
import dayjs from "dayjs";
import { useUpdatePaymentDueDays } from "../../loans/hooks/useUpdatePaymentDueDays";

type Props = {
  paymentsFragmentKey: paymentsTable$key | null;
};

const paymentsFragment = graphql`
  fragment paymentsTable on LoanEdge @relay(plural: true) {
    node {
      _id
      customerId
      loanAmount
      loanInterest
      loanTerm
      loanStatus
      loanDate
      paymentSchedule {
        _id
        paymentDate
        amountPaid
        interestPaid
        dueDays
        extraInterest
        status
      }
    }
  }
`;

export default function Payments({ paymentsFragmentKey }: Props) {
  const loans = useFragment(paymentsFragment, paymentsFragmentKey);
  const customers = useGetCustomers();
  const { handleUpdateLoanStatus } = useUpdateLoanStatus();
  const { handleUpdatePaymentDueDays } = useUpdatePaymentDueDays();

  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const customerOptions = useMemo(
    () =>
      customers.map((customer) => ({
        value: customer?._id,
        label: `${customer?.name} ${customer?.lastName}`,
        key: customer?._id,
      })),
    [customers]
  );

  const filteredLoans = useMemo(() => {
    return selectedCustomer
      ? loans!.filter((loan) => loan?.node?.customerId === selectedCustomer)
      : [];
  }, [selectedCustomer, loans]);

  const loansOptions = useMemo(() => {
    return filteredLoans.map((loan) => ({
      value: loan?.node?._id,
      label: `Fecha: ${dayjs(loan?.node?.loanDate).format(
        "DD/MM/YYYY"
      )} --- Capital: L.${loan?.node?.loanAmount} --- ${
        loan.node.loanStatus === "PAID" ? "Pagado" : "Activo"
      }`,
      key: loan?.node?._id,
    }));
  }, [filteredLoans]);

  const paymentSchedule = useMemo(() => {
    const selectedLoanData = loans?.find(
      (loan) => loan?.node?._id === selectedLoan
    );
    return selectedLoanData?.node?.paymentSchedule || [];
  }, [selectedLoan, loans]);

  const paidAmountTotal = useMemo(() => {
    return paymentSchedule
      .filter((payment) => payment!.status === "PAID")
      .reduce((sum, payment) => sum + payment!.amountPaid, 0);
  }, [paymentSchedule]);

  const paidInterestTotal = useMemo(() => {
    return paymentSchedule
      .filter((payment) => payment!.status === "PAID")
      .reduce((sum, payment) => sum + payment!.interestPaid, 0);
  }, [paymentSchedule]);

  const pendingPaymentsTotal = useMemo(() => {
    return paymentSchedule
      .filter((payment) => payment!.status !== "PAID")
      .reduce((sum) => sum + 1, 0);
  }, [paymentSchedule]);

  useEffect(() => {
    if (!paymentSchedule) return;

    const today = dayjs();

    paymentSchedule.forEach((payment) => {
      const paymentDate = dayjs(payment.paymentDate);
      const dueDays = paymentDate.isBefore(today)
        ? today.diff(paymentDate, "day")
        : 0;
      const extraInterest =
        dueDays > 0 ? dueDays * 0.1 * payment.amountPaid : 0;

      if (
        payment.dueDays > 0 &&
        dueDays !== payment.dueDays &&
        payment.status === "ACTIVE"
      ) {
        handleUpdatePaymentDueDays(
          selectedLoan,
          payment._id,
          dueDays,
          extraInterest
        );
      }
    });
  }, [paymentSchedule]);

  useEffect(() => {
    if (selectedLoan) {
      const allPaid = paymentSchedule.every(
        (payment) => payment.status === "PAID"
      );
      const currentLoanStatus = loans?.find(
        (loan) => loan?.node?._id === selectedLoan
      )?.node?.loanStatus;
      if (allPaid && currentLoanStatus !== "PAID") {
        handleUpdateLoanStatus(selectedLoan, "PAID"); // Update loan status to PAID
      }
    }
  }, [paymentSchedule, selectedLoan, loans, handleUpdateLoanStatus]);

  return (
    <PaymentsTable
      loansOptions={loansOptions}
      customerOptions={customerOptions}
      selectedCustomer={selectedCustomer}
      selectedLoan={selectedLoan}
      paidAmountTotal={paidAmountTotal}
      paidInterestTotal={paidInterestTotal}
      pendingPaymentsTotal={pendingPaymentsTotal}
      paymentSchedule={paymentSchedule}
      selectedPayment={selectedPayment}
      setSelectedLoan={setSelectedLoan}
      setSelectedCustomer={setSelectedCustomer}
      setSelectedPayment={setSelectedPayment}
    />
  );
}
