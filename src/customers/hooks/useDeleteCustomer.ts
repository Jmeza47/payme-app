import { graphql, useMutation } from "react-relay";
import { notification } from "antd";

export function useDeleteCustomer() {
  const DELETE_CUSTOMER_MUTATION = graphql`
    mutation useDeleteCustomerMutation($id: ID!) {
      deleteCustomer(_id: $id) {
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
    }
  `;

  const [deleteCustomer] = useMutation(DELETE_CUSTOMER_MUTATION);

  const handleDeleteCustomer = (id: string) => {
    deleteCustomer({
      variables: { id },
      updater: (store) => {
        const root = store.getRoot();
        const customerConnection = root.getLinkedRecord(
          "__main_customersConnection_connection"
        );

        if (customerConnection) {
          const deletedCustomer = store.getRootField("deleteCustomer");
          const deletedCustomerId = deletedCustomer?.getValue("_id");

          if (deletedCustomerId) {
            // Filter out the deleted customer from the connection
            const customerEdges =
              customerConnection.getLinkedRecords("edges") || [];

            const updatedEdges = customerEdges.filter((edge) => {
              return (
                edge.getLinkedRecord("node")?.getValue("_id") !==
                deletedCustomerId
              );
            });

            // Update the root with the filtered customer edges
            customerConnection.setLinkedRecords(updatedEdges, "edges");
            root.setLinkedRecord(root, "customersConnection");
          }
        }
      },

      onCompleted: () => {
        notification.success({
          message: "Completo",
          description: "El cliente ha sido eliminado Exitosamente",
          placement: "top",
        });
      },
      onError: () => {
        notification.error({
          message: "Error",
          description: "Ha ocurrido un error al eliminar el cliente",
          placement: "top",
        });
      },
    });
  };

  return { handleDeleteCustomer };
}
