/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type customerDataInput = {
  name: string,
  lastName: string,
  address: string,
  phone1: string,
  phone2?: string | null,
  ref1: string,
  ref1Tel: string,
  ref2?: string | null,
  ref2Tel?: string | null,
};

export type Customer = {
  __typename: "Customer",
  _id: string,
  name: string,
  lastName: string,
  phone1: string,
  phone2?: string | null,
  address: string,
  ref1: string,
  ref1Tel: string,
  ref2?: string | null,
  ref2Tel?: string | null,
};

export type loanDataInput = {
  customerId: string,
  loanAmount: number,
  loanInterest: number,
  loanTerm: number,
  loanStatus: string,
  loanDate: string,
  paymentSchedule: Array< PaymentScheduleInput | null >,
};

export type PaymentScheduleInput = {
  _id?: string | null,
  paymentDate: string,
  amountPaid: number,
  interestPaid: number,
  dueDays?: number | null,
  extraInterest?: number | null,
  status?: paymentStatus | null,
};

export enum paymentStatus {
  ACTIVE = "ACTIVE",
  PAID = "PAID",
}


export type Loan = {
  __typename: "Loan",
  _id: string,
  customerId: string,
  loanAmount: number,
  loanInterest: number,
  loanTerm: number,
  loanStatus: string,
  loanDate: string,
  paymentSchedule:  Array<PaymentSchedule | null >,
};

export type PaymentSchedule = {
  __typename: "PaymentSchedule",
  _id?: string | null,
  paymentDate: string,
  amountPaid: number,
  interestPaid: number,
  dueDays?: number | null,
  extraInterest?: number | null,
  status?: paymentStatus | null,
};

export type CustomerConnection = {
  __typename: "CustomerConnection",
  edges?:  Array<CustomerEdge | null > | null,
  pageInfo: PageInfo,
};

export type CustomerEdge = {
  __typename: "CustomerEdge",
  node?: Customer | null,
  cursor: string,
};

export type PageInfo = {
  __typename: "PageInfo",
  startCursor?: string | null,
  endCursor?: string | null,
  hasNextPage: boolean,
  hasPreviousPage: boolean,
};

export type LoanConnection = {
  __typename: "LoanConnection",
  edges?:  Array<LoanEdge | null > | null,
  pageInfo: PageInfo,
  totalCount?: number | null,
};

export type LoanEdge = {
  __typename: "LoanEdge",
  node?: Loan | null,
  cursor: string,
};

export type CreateCustomerMutationVariables = {
  input: customerDataInput,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    _id: string,
    name: string,
    lastName: string,
    phone1: string,
    phone2?: string | null,
    address: string,
    ref1: string,
    ref1Tel: string,
    ref2?: string | null,
    ref2Tel?: string | null,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  _id: string,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    _id: string,
    name: string,
    lastName: string,
    phone1: string,
    phone2?: string | null,
    address: string,
    ref1: string,
    ref1Tel: string,
    ref2?: string | null,
    ref2Tel?: string | null,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  _id: string,
  input: customerDataInput,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    _id: string,
    name: string,
    lastName: string,
    phone1: string,
    phone2?: string | null,
    address: string,
    ref1: string,
    ref1Tel: string,
    ref2?: string | null,
    ref2Tel?: string | null,
  } | null,
};

export type CreateLoanMutationVariables = {
  input: loanDataInput,
};

export type CreateLoanMutation = {
  createLoan?:  {
    __typename: "Loan",
    _id: string,
    customerId: string,
    loanAmount: number,
    loanInterest: number,
    loanTerm: number,
    loanStatus: string,
    loanDate: string,
    paymentSchedule:  Array< {
      __typename: "PaymentSchedule",
      _id?: string | null,
      paymentDate: string,
      amountPaid: number,
      interestPaid: number,
      dueDays?: number | null,
      extraInterest?: number | null,
      status?: paymentStatus | null,
    } | null >,
  } | null,
};

export type DeleteLoanMutationVariables = {
  _id: string,
};

export type DeleteLoanMutation = {
  deleteLoan?:  {
    __typename: "Loan",
    _id: string,
    customerId: string,
    loanAmount: number,
    loanInterest: number,
    loanTerm: number,
    loanStatus: string,
    loanDate: string,
    paymentSchedule:  Array< {
      __typename: "PaymentSchedule",
      _id?: string | null,
      paymentDate: string,
      amountPaid: number,
      interestPaid: number,
      dueDays?: number | null,
      extraInterest?: number | null,
      status?: paymentStatus | null,
    } | null >,
  } | null,
};

export type DeleteLoansByCustomerMutationVariables = {
  customerId: string,
};

export type DeleteLoansByCustomerMutation = {
  deleteLoansByCustomer?:  {
    __typename: "Loan",
    _id: string,
    customerId: string,
    loanAmount: number,
    loanInterest: number,
    loanTerm: number,
    loanStatus: string,
    loanDate: string,
    paymentSchedule:  Array< {
      __typename: "PaymentSchedule",
      _id?: string | null,
      paymentDate: string,
      amountPaid: number,
      interestPaid: number,
      dueDays?: number | null,
      extraInterest?: number | null,
      status?: paymentStatus | null,
    } | null >,
  } | null,
};

export type UpdateLoanMutationVariables = {
  _id: string,
  input: loanDataInput,
};

export type UpdateLoanMutation = {
  updateLoan?:  {
    __typename: "Loan",
    _id: string,
    customerId: string,
    loanAmount: number,
    loanInterest: number,
    loanTerm: number,
    loanStatus: string,
    loanDate: string,
    paymentSchedule:  Array< {
      __typename: "PaymentSchedule",
      _id?: string | null,
      paymentDate: string,
      amountPaid: number,
      interestPaid: number,
      dueDays?: number | null,
      extraInterest?: number | null,
      status?: paymentStatus | null,
    } | null >,
  } | null,
};

export type UpdatePaymentStatusMutationVariables = {
  loanId: string,
  paymentScheduleId: string,
  status?: string | null,
};

export type UpdatePaymentStatusMutation = {
  updatePaymentStatus?:  {
    __typename: "Loan",
    _id: string,
    customerId: string,
    loanAmount: number,
    loanInterest: number,
    loanTerm: number,
    loanStatus: string,
    loanDate: string,
    paymentSchedule:  Array< {
      __typename: "PaymentSchedule",
      _id?: string | null,
      paymentDate: string,
      amountPaid: number,
      interestPaid: number,
      dueDays?: number | null,
      extraInterest?: number | null,
      status?: paymentStatus | null,
    } | null >,
  } | null,
};

export type UpdateLoanStatusMutationVariables = {
  loanId: string,
  loanStatus?: string | null,
};

export type UpdateLoanStatusMutation = {
  updateLoanStatus?:  {
    __typename: "Loan",
    _id: string,
    customerId: string,
    loanAmount: number,
    loanInterest: number,
    loanTerm: number,
    loanStatus: string,
    loanDate: string,
    paymentSchedule:  Array< {
      __typename: "PaymentSchedule",
      _id?: string | null,
      paymentDate: string,
      amountPaid: number,
      interestPaid: number,
      dueDays?: number | null,
      extraInterest?: number | null,
      status?: paymentStatus | null,
    } | null >,
  } | null,
};

export type UpdatePaymentDueDaysMutationVariables = {
  loanId: string,
  paymentScheduleId: string,
  dueDays?: number | null,
  extraInterest?: number | null,
};

export type UpdatePaymentDueDaysMutation = {
  updatePaymentDueDays?:  {
    __typename: "Loan",
    _id: string,
    customerId: string,
    loanAmount: number,
    loanInterest: number,
    loanTerm: number,
    loanStatus: string,
    loanDate: string,
    paymentSchedule:  Array< {
      __typename: "PaymentSchedule",
      _id?: string | null,
      paymentDate: string,
      amountPaid: number,
      interestPaid: number,
      dueDays?: number | null,
      extraInterest?: number | null,
      status?: paymentStatus | null,
    } | null >,
  } | null,
};

export type CustomersConnectionQueryVariables = {
  after?: string | null,
  first?: number | null,
};

export type CustomersConnectionQuery = {
  customersConnection?:  {
    __typename: "CustomerConnection",
    edges?:  Array< {
      __typename: "CustomerEdge",
      cursor: string,
    } | null > | null,
    pageInfo:  {
      __typename: "PageInfo",
      startCursor?: string | null,
      endCursor?: string | null,
      hasNextPage: boolean,
      hasPreviousPage: boolean,
    },
  } | null,
};

export type CustomerQueryVariables = {
  _id: string,
};

export type CustomerQuery = {
  customer?:  {
    __typename: "Customer",
    _id: string,
    name: string,
    lastName: string,
    phone1: string,
    phone2?: string | null,
    address: string,
    ref1: string,
    ref1Tel: string,
    ref2?: string | null,
    ref2Tel?: string | null,
  } | null,
};

export type LoansConnectionQueryVariables = {
  after?: string | null,
  first?: number | null,
};

export type LoansConnectionQuery = {
  loansConnection?:  {
    __typename: "LoanConnection",
    edges?:  Array< {
      __typename: "LoanEdge",
      cursor: string,
    } | null > | null,
    pageInfo:  {
      __typename: "PageInfo",
      startCursor?: string | null,
      endCursor?: string | null,
      hasNextPage: boolean,
      hasPreviousPage: boolean,
    },
    totalCount?: number | null,
  } | null,
};

export type LoanQueryVariables = {
  _id: string,
};

export type LoanQuery = {
  loan?:  {
    __typename: "Loan",
    _id: string,
    customerId: string,
    loanAmount: number,
    loanInterest: number,
    loanTerm: number,
    loanStatus: string,
    loanDate: string,
    paymentSchedule:  Array< {
      __typename: "PaymentSchedule",
      _id?: string | null,
      paymentDate: string,
      amountPaid: number,
      interestPaid: number,
      dueDays?: number | null,
      extraInterest?: number | null,
      status?: paymentStatus | null,
    } | null >,
  } | null,
};
