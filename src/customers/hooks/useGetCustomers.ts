import { graphql, useLazyLoadQuery } from "react-relay";
import { customersTableQuery } from "../__generated__/customersTableQuery.graphql";

const getCustomersQuery = graphql`
  query useGetCustomersQuery {
    customersConnection(first: 100)
      @connection(key: "main_customersConnection") {
      edges {
        node {
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
        }
        cursor
      }
    }
  }
`;

export function useGetCustomers() {
  const data = useLazyLoadQuery<customersTableQuery>(getCustomersQuery, {});
  const customers =
    data.customersConnection?.edges?.map((edge) => edge?.node) ?? [];

  return customers;
}
