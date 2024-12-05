import { useState } from "react";
export interface PaymentSchedule {
  nextPaymentDate: string; // Use string to store the formatted date
  capitalWeekly: number;
  interestWeekly: number;
  totalPayment: number;
}

export function useGenerateWeeklyPayments() {
  const [paymentSchedule, setPaymentSchedule] = useState<PaymentSchedule[]>([]);

  const getNextWeekSameDay = (date: Date): Date => {
    const nextWeek = new Date(date);
    nextWeek.setDate(date.getDate() + 7); // Move to the same day next week
    return nextWeek;
  };

  const generatePaymentSchedule = (
    loanAmount: number,
    monthlyInterestRate: number,
    loanDurationMonths: number
  ) => {
    const totalWeeks = loanDurationMonths; // Convert loan duration to weeks
    const capitalWeekly = parseFloat((loanAmount / totalWeeks).toPrecision(4)); // Weekly capital payment
    const weeklyInterestRate = (
      monthlyInterestRate / loanDurationMonths
    ).toFixed(2); // Convert monthly interest to weekly
    const interestWeekly =
      loanAmount *
      parseFloat((parseFloat(weeklyInterestRate) / 100).toPrecision(4)); // Weekly interest payment

    const newSchedule: PaymentSchedule[] = [];

    const startDate = getNextWeekSameDay(new Date()); // Get the same day next week

    for (let i = 0; i < totalWeeks; i++) {
      const nextPaymentDate = new Date(startDate);
      nextPaymentDate.setDate(startDate.getDate() + i * 7); // Set next payment to weekly intervals

      newSchedule.push({
        nextPaymentDate: nextPaymentDate.toISOString(), // Use formatted date with Spanish day names
        capitalWeekly,
        interestWeekly,
        totalPayment: capitalWeekly + interestWeekly,
      });
    }

    setPaymentSchedule(newSchedule);
  };

  return { paymentSchedule, generatePaymentSchedule };
}
