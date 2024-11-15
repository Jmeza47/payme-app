/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const customersConnection =
  /* GraphQL */ `query CustomersConnection($after: String, $first: Int) {
  customersConnection(after: $after, first: $first) {
    edges {
      cursor
      __typename
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
    APITypes.CustomersConnectionQueryVariables,
    APITypes.CustomersConnectionQuery
  >;
export const customer = /* GraphQL */ `query Customer($_id: ID!) {
  customer(_id: $_id) {
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
` as GeneratedQuery<APITypes.CustomerQueryVariables, APITypes.CustomerQuery>;
export const loansConnection =
  /* GraphQL */ `query LoansConnection($after: String, $first: Int) {
  loansConnection(after: $after, first: $first) {
    edges {
      cursor
      __typename
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
      __typename
    }
    totalCount
    __typename
  }
}
` as GeneratedQuery<
    APITypes.LoansConnectionQueryVariables,
    APITypes.LoansConnectionQuery
  >;
export const loan = /* GraphQL */ `query Loan($_id: ID!) {
  loan(_id: $_id) {
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
` as GeneratedQuery<APITypes.LoanQueryVariables, APITypes.LoanQuery>;
