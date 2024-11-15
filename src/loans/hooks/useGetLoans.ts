import { graphql, useLazyLoadQuery } from "react-relay";
import { useGetLoansQuery } from "./__generated__/useGetLoansQuery.graphql";

const getLoansQuery = graphql`
  query useGetLoansQuery {
    loansConnection(first: 100) @connection(key: "main_loansConnection") {
      edges {
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
        cursor
      }
    }
  }
`;

export function useGetLoans() {
  const data = useLazyLoadQuery<useGetLoansQuery>(getLoansQuery, {});
  const loans = data.loansConnection?.edges?.map((edge) => edge.node) ?? [];

  return loans;
}
