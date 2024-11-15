/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCustomer = /* GraphQL */ `mutation CreateCustomer($input: customerDataInput!) {
  createCustomer(input: $input) {
    _id
    name
    lastName
    phone1
    phone2
    address
    ref1
    ref1Tel
    ref2
    ref2Tel
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer($_id: ID!) {
  deleteCustomer(_id: $_id) {
    _id
    name
    lastName
    phone1
    phone2
    address
    ref1
    ref1Tel
    ref2
    ref2Tel
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer($_id: ID!, $input: customerDataInput!) {
  updateCustomer(_id: $_id, input: $input) {
    _id
    name
    lastName
    phone1
    phone2
    address
    ref1
    ref1Tel
    ref2
    ref2Tel
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const createLoan = /* GraphQL */ `mutation CreateLoan($input: loanDataInput!) {
  createLoan(input: $input) {
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
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLoanMutationVariables,
  APITypes.CreateLoanMutation
>;
export const deleteLoan = /* GraphQL */ `mutation DeleteLoan($_id: ID!) {
  deleteLoan(_id: $_id) {
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
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLoanMutationVariables,
  APITypes.DeleteLoanMutation
>;
export const deleteLoansByCustomer = /* GraphQL */ `mutation DeleteLoansByCustomer($customerId: ID!) {
  deleteLoansByCustomer(customerId: $customerId) {
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
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLoansByCustomerMutationVariables,
  APITypes.DeleteLoansByCustomerMutation
>;
export const updateLoan = /* GraphQL */ `mutation UpdateLoan($_id: ID!, $input: loanDataInput!) {
  updateLoan(_id: $_id, input: $input) {
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
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLoanMutationVariables,
  APITypes.UpdateLoanMutation
>;
export const updatePaymentStatus = /* GraphQL */ `mutation UpdatePaymentStatus(
  $loanId: ID!
  $paymentScheduleId: ID!
  $status: String
) {
  updatePaymentStatus(
    loanId: $loanId
    paymentScheduleId: $paymentScheduleId
    status: $status
  ) {
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
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePaymentStatusMutationVariables,
  APITypes.UpdatePaymentStatusMutation
>;
export const updateLoanStatus = /* GraphQL */ `mutation UpdateLoanStatus($loanId: ID!, $loanStatus: String) {
  updateLoanStatus(loanId: $loanId, loanStatus: $loanStatus) {
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
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLoanStatusMutationVariables,
  APITypes.UpdateLoanStatusMutation
>;
export const updatePaymentDueDays = /* GraphQL */ `mutation UpdatePaymentDueDays(
  $loanId: ID!
  $paymentScheduleId: ID!
  $dueDays: Int
  $extraInterest: Float
) {
  updatePaymentDueDays(
    loanId: $loanId
    paymentScheduleId: $paymentScheduleId
    dueDays: $dueDays
    extraInterest: $extraInterest
  ) {
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
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePaymentDueDaysMutationVariables,
  APITypes.UpdatePaymentDueDaysMutation
>;
