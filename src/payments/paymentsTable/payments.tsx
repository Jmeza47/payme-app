import { useState, useMemo, useEffect } from "react";
import PaymentsTable from "./paymentsTable";
import dayjs from "dayjs";
import { useGetCustomers } from "../../customers/hooks/api/useGetCustomers";
import { useUpdateLoanStatus } from "../../loans/hooks/api/useUpdateLoanStatus";
import { useGetLoans } from "../../loans/hooks/api/useGetLoans";
import { useUpdatePaymentDueDays } from "../../loans/hooks/api/useUpdatePaymentDueDays";
import { moneyFormatter } from "../../utils/moneyFormatter";

export default function Payments() {
  const { loans } = useGetLoans();
  const { customers } = useGetCustomers();
  const { updateLoanStatus } = useUpdateLoanStatus();
  const { updatePaymentDueDays } = useUpdatePaymentDueDays();

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
      ? loans!.filter((loan) => loan?.customerId === selectedCustomer)
      : [];
  }, [selectedCustomer, loans]);

  const loansOptions = useMemo(() => {
    return filteredLoans
      .filter((loan) => loan.loanStatus !== "PAID")
      .map((loan) => ({
        value: loan?._id,
        label: `Fecha: ${dayjs(loan?.loanDate).format(
          "DD/MM/YYYY"
        )} --- Capital: ${moneyFormatter(loan?.loanAmount)}`,
        key: loan?._id,
      }));
  }, [filteredLoans]);

  const paymentSchedule = useMemo(() => {
    const selectedLoanData = loans?.find((loan) => loan?._id === selectedLoan);
    return selectedLoanData?.paymentSchedule || [];
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
        dueDays > 0
          ? dueDays * 0.1 * (payment.amountPaid + payment.interestPaid)
          : 0;

      if (dueDays !== payment.dueDays && payment.status === "ACTIVE") {
        console.log("todo activo");
        updatePaymentDueDays(selectedLoan, payment._id, dueDays, extraInterest);
      }
    });
  }, [paymentSchedule]);

  useEffect(() => {
    if (selectedLoan) {
      const allPaid = paymentSchedule.every(
        (payment) => payment.status === "PAID"
      );
      const currentLoanStatus = loans?.find(
        (loan) => loan?._id === selectedLoan
      )?.loanStatus;
      if (allPaid && currentLoanStatus !== "PAID") {
        updateLoanStatus(selectedLoan, "PAID"); // Update loan status to PAID
      }
    }
  }, [paymentSchedule, selectedLoan, loans, updateLoanStatus]);

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
