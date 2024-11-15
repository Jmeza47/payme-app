import { graphql } from "relay-runtime";
import Payments from "./paymentsTable/payments";
import { useLazyLoadQuery } from "react-relay";
import { paymentsMainQuery } from "./__generated__/paymentsMainQuery.graphql";

const getPaymentsQuery = graphql`
  query paymentsMainQuery {
    loansConnection(first: 100) @connection(key: "main_loansConnection") {
      edges {
        ...paymentsTable
      }
    }
  }
`;

export default function PaymentsMain() {
  const data = useLazyLoadQuery<paymentsMainQuery>(getPaymentsQuery, {});
  return <Payments paymentsFragmentKey={data.loansConnection?.edges ?? null} />;
}
