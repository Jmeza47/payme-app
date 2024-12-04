import { useState, useMemo, useEffect, useCallback } from "react";
import PaymentsTable from "./paymentsTable";
import dayjs from "dayjs";
import { useGetCustomers } from "../../customers/hooks/api/useGetCustomers";
import { useUpdateLoanStatus } from "../../loans/hooks/api/useUpdateLoanStatus";
import { useGetLoans } from "../../loans/hooks/api/useGetLoans";
import { useUpdatePaymentDueDays } from "../../loans/hooks/api/useUpdatePaymentDueDays";
import { moneyFormatter } from "../../utils/moneyFormatter";
import { debounce } from "lodash";
import { PaymentScheduleInput } from "../../common/types";

export default function Payments() {
  const { loans } = useGetLoans();
  const { customers } = useGetCustomers();
  const { updateLoanStatus } = useUpdateLoanStatus();
  const { updatePaymentDueDays } = useUpdatePaymentDueDays();

  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  // Memoizing customer options
  const customerOptions = useMemo(
    () =>
      customers.map((customer) => ({
        value: customer._id,
        label: `${customer.name} ${customer.lastName}`,
        key: customer._id,
      })),
    [customers]
  );

  // Filtered loans based on selected customer
  const filteredLoans = useMemo(() => {
    return selectedCustomer
      ? loans.filter((loan) => loan.customerId === selectedCustomer)
      : [];
  }, [selectedCustomer, loans]);

  // Loans options to show in the dropdown (not PAID status)
  const loansOptions = useMemo(() => {
    return filteredLoans
      .filter((loan) => loan.loanStatus !== "PAID")
      .map((loan) => ({
        value: loan._id,
        label: `Fecha: ${dayjs(loan.loanDate).format(
          "DD/MM/YYYY"
        )} --- Capital: ${moneyFormatter(loan.loanAmount)}`,
        key: loan._id,
      }));
  }, [filteredLoans]);

  // Payment schedule for the selected loan
  const paymentSchedule = useMemo(() => {
    const selectedLoanData = loans.find((loan) => loan._id === selectedLoan);
    return selectedLoanData?.paymentSchedule || [];
  }, [selectedLoan, loans]);

  // Calculate paid amount
  const paidAmountTotal = useMemo(() => {
    return paymentSchedule
      .filter((payment) => payment.status === "PAID")
      .reduce((sum, payment) => sum + payment.amountPaid, 0);
  }, [paymentSchedule]);

  // Calculate paid interest
  const paidInterestTotal = useMemo(() => {
    return paymentSchedule
      .filter((payment) => payment.status === "PAID")
      .reduce((sum, payment) => sum + payment.interestPaid, 0);
  }, [paymentSchedule]);

  // Calculate pending payments
  const pendingPaymentsTotal = useMemo(() => {
    return paymentSchedule
      .filter((payment) => payment.status !== "PAID")
      .reduce((sum) => sum + 1, 0);
  }, [paymentSchedule]);

  // Debounced update for payment due days
  const debouncedUpdatePayments = useMemo(
    () =>
      debounce((updates) => {
        updates.forEach(({ paymentId, dueDays, extraInterest }) =>
          updatePaymentDueDays(selectedLoan, paymentId, dueDays, extraInterest)
        );
      }, 300), // 300ms debounce
    [updatePaymentDueDays]
  );

  // Update due days and interest if payment is active and overdue
  const calculateDueDaysAndInterest = useCallback(
    (paymentDate: string, payment: PaymentScheduleInput) => {
      const today = dayjs();
      const paymentDateObj = dayjs(paymentDate);
      const dueDays = paymentDateObj
        .startOf("day")
        .isBefore(today.startOf("day"))
        ? today.startOf("day").diff(paymentDateObj.startOf("day"), "day")
        : 0;

      const extraInterest =
        dueDays > 0
          ? dueDays * 0.1 * (payment.amountPaid + payment.interestPaid)
          : 0;

      return { dueDays, extraInterest };
    },
    []
  );

  useEffect(() => {
    const updates = paymentSchedule.reduce((acc, payment) => {
      const { dueDays, extraInterest } = calculateDueDaysAndInterest(
        payment.paymentDate,
        payment
      );

      if (
        dueDays !== payment.dueDays &&
        payment.status === "ACTIVE" &&
        payment.interestPaid !== 0
      ) {
        acc.push({ paymentId: payment._id, dueDays, extraInterest });
      }

      return acc;
    }, []);

    if (updates.length > 0) {
      debouncedUpdatePayments(updates);
    }
  }, [paymentSchedule, debouncedUpdatePayments, calculateDueDaysAndInterest]);

  // Handle loan status update when all payments are marked as 'PAID'
  useEffect(() => {
    if (selectedLoan) {
      const allPaid = paymentSchedule.every(
        (payment) => payment.status === "PAID"
      );
      const currentLoanStatus = loans.find(
        (loan) => loan._id === selectedLoan
      )?.loanStatus;

      if (allPaid && currentLoanStatus !== "PAID") {
        updateLoanStatus(selectedLoan, "PAID");
      }
    }
  }, [paymentSchedule, selectedLoan, loans, updateLoanStatus]);

  // Cleanup on component unmount or when debounce changes
  useEffect(() => {
    return () => {
      debouncedUpdatePayments.cancel();
    };
  }, [debouncedUpdatePayments]);

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
