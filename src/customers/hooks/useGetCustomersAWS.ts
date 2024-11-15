import { Amplify } from "aws-amplify";
import config from "../../aws-exports.js";
import { generateClient } from "aws-amplify/api";
Amplify.configure(config);
const client = generateClient();

const customerData = await client.graphql({
  query: `query MyQuery {
  customersConnection {
    edges {
      node {
          name
          lastName
         phone1
         phone2
         address
         _id
         ref1
         ref1Tel
         ref2
         ref2Tel
      }
    }
  }
}
`,
});

export function useGetCustomers() {
  //const data = useLazyLoadQuery<customersTableQuery>(getCustomersQuery, {});
  const customers = customerData.data.customersConnection.edges;

  return customers;
}
