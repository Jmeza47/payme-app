import {
  useState,
  useMemo,
  useEffect,
  useCallback,
  lazy,
  Suspense,
} from "react";
const PaymentsTable = lazy(() => import("./paymentsTable"));
import dayjs from "dayjs";
import { useGetCustomers } from "../../customers/hooks/api/useGetCustomers";
import { useUpdateLoanStatus } from "../../loans/hooks/api/useUpdateLoanStatus";
import { useGetLoans } from "../../loans/hooks/api/useGetLoans";
import { useUpdatePaymentDueDays } from "../../loans/hooks/api/useUpdatePaymentDueDays";
import { moneyFormatter } from "../../utils/moneyFormatter";
import debounce from "lodash/debounce";
import { PaymentScheduleInput } from "../../common/types";
import { Spin } from "antd";

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
    if (!selectedCustomer) return [];
    return loans.filter((loan) => loan.customerId === selectedCustomer);
  }, [selectedCustomer, loans]);

  // Loans options to show in the dropdown (not PAID status)
  const loansOptions = useMemo(
    () =>
      filteredLoans
        .map((loan) => ({
          value: loan._id,
          label: `Fecha: ${dayjs(loan.loanDate).format(
            "DD/MM/YYYY"
          )} --- Capital: ${moneyFormatter(loan.loanAmount)}`,
          key: loan._id,
        }))
        .filter((loanOption) => loanOption.value && loanOption.label),
    [filteredLoans]
  );

  const loanMap = useMemo(
    () =>
      loans.reduce((acc, loan) => {
        acc[loan._id] = loan;
        return acc;
      }, {}),
    [loans]
  );

  // Payment schedule for the selected loan
  const paymentSchedule = loanMap[selectedLoan]?.paymentSchedule || [];

  const { paidAmountTotal, paidInterestTotal, pendingPaymentsTotal } =
    useMemo(() => {
      let paidAmount = 0,
        paidInterest = 0,
        pendingPayments = 0;

      paymentSchedule.forEach((payment) => {
        if (payment.status === "PAID") {
          paidAmount += payment.amountPaid;
          paidInterest += payment.interestPaid;
        } else {
          pendingPayments++;
        }
      });

      return {
        paidAmountTotal: paidAmount,
        paidInterestTotal: paidInterest,
        pendingPaymentsTotal: pendingPayments,
      };
    }, [paymentSchedule]);

  // Debounced update for payment due days
  const debouncedUpdatePayments = useCallback(
    debounce((updates) => {
      updates.forEach(({ paymentId, dueDays, extraInterest }) =>
        updatePaymentDueDays(selectedLoan, paymentId, dueDays, extraInterest)
      );
    }, 300),
    [updatePaymentDueDays, selectedLoan] // Only recreate if selectedLoan or updatePaymentDueDays change
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
      const currentLoanStatus = loanMap[selectedLoan]?.loanStatus;

      if (allPaid && currentLoanStatus !== "PAID") {
        updateLoanStatus(selectedLoan, "PAID");
      }
    }
  }, [paymentSchedule, selectedLoan, loanMap, updateLoanStatus]);

  // Cleanup on component unmount or when debounce changes
  useEffect(() => {
    return () => {
      debouncedUpdatePayments.cancel();
    };
  }, [debouncedUpdatePayments]);

  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          className="flex justify-center items-center h-full"
        />
      }
    >
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
    </Suspense>
  );
}
