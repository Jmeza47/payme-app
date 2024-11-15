export interface ICustomer {
  _id?: string;
  name: string;
  lastName: string;
  phone1: string;
  phone2?: string | undefined;
  address: string;
  ref1: string;
  ref1Tel: string;
  ref2?: string | undefined;
  ref2Tel?: string;
}

export interface ILoans {
  _id?: string;
  customerId: string;
  loanAmount: number;
  loanInterest: number;
  loanTerm: number;
  loanStatus: string;
  loanDate: string;
  paymentSchedule?: PaymentScheduleInput[]; // Use the correct type here
}

export type PaymentScheduleInput = {
  _id?: string;
  paymentDate: Date;
  amountPaid: number;
  interestPaid: number;
  dueDays: number;
  extraInterest?: number; // Optional, as per your input definition
  status: "ACTIVE" | "PAID"; // Use literal types for status
};

export type PaymentData = {
  loanId: string; // Ensure this is a string
  paymentSchedule: PaymentScheduleInput[]; // Use the correct type here
  totalAmount: number;
  totalPaid: number;
};

export interface IPayment {
  _id?: string;
  loanId: string;
  paymentSchedule?: PaymentScheduleInput[];
  totalAmount: number;
  totalPaid: number;
}
