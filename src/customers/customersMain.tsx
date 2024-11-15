import ShowCustomersTable from "./table/customersTable";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { customersMainQuery } from "./__generated__/customersMainQuery.graphql";
import AddOrEditCustomer from "./newCustomers/addOrEditCustomer";

const getCustomersQuery = graphql`
  query customersMainQuery {
    customersConnection(first: 100)
      @connection(key: "main_customersConnection") {
      edges {
        ...customersTable
      }
    }
  }
`;

export default function CustomerMainScreen() {
  const data = useLazyLoadQuery<customersMainQuery>(getCustomersQuery, {});

  return (
    <div>
      <ShowCustomersTable
        customersFragmentKey={data.customersConnection?.edges ?? null}
      />
      <AddOrEditCustomer />
    </div>
  );
}
