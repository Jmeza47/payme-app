import { ConnectionHandler, graphql, useMutation } from "react-relay";
import { ICustomer } from "../../common/types";
import { useAppDispatch } from "../../hooks/useStore";
import { setShowCreateCustomerModal } from "../customerSlice";

import { notification } from "antd";

export function useUpdateCustomer() {
  const UPDATE_CUSTOMER_MUTATION = graphql`
    mutation useUpdateCustomerMutation(
      $_id: ID!
      $customerData: customerDataInput!
    ) {
      updateCustomer(_id: $_id, input: $customerData) {
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

  const [updateCustomer] = useMutation(UPDATE_CUSTOMER_MUTATION);
  const dispatch = useAppDispatch();

  const handleUpdateCustomer = (_id: string, customerData: ICustomer) => {
    updateCustomer({
      variables: { _id, customerData },
      updater: (store) => {
        const root = store.getRoot();

        const customerConnection = ConnectionHandler.getConnection(
          root,
          "main_customersConnection"
        );

        if (customerConnection) {
          const updatedCustomer = store.getRootField("updateCustomer");
          if (!updatedCustomer) return;

          const updatedCustomerId = updatedCustomer?.getValue("_id");
          if (updatedCustomerId) {
            // Get the current edges from the connection
            const customerEdges =
              customerConnection.getLinkedRecords("edges") || [];

            // Update the specific edge with the new data
            const updatedEdges = customerEdges.map((edge) => {
              const customerNode = edge.getLinkedRecord("node");

              if (customerNode?.getValue("_id") === updatedCustomerId) {
                // Replace the old node with the updated customer data from the mutation
                edge.setLinkedRecord(updatedCustomer, "node");
              }

              return edge;
            });
            customerConnection.setLinkedRecords(updatedEdges, "edges");
          }
        }
      },

      onCompleted: () => {
        dispatch(setShowCreateCustomerModal(false));
        notification.success({
          message: "Completado",
          description: "Cliente actualizado exitosamente",
          type: "success",
          placement: "top",
        });
      },
      onError: () => {
        notification.success({
          message: "Error",
          description: "Error al actualizar al cliente",
          type: "error",
          placement: "top",
        });
      },
    });
  };

  return { handleUpdateCustomer };
}
