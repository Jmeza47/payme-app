import { ConnectionHandler, graphql, useMutation } from "react-relay";
import { ICustomer } from "../../common/types";
import { useAppDispatch } from "../../hooks/useStore";
import { setShowCreateCustomerModal } from "../customerSlice";
import { notification } from "antd";

export function useCreateCustomer() {
  const dispatch = useAppDispatch();

  const CREATE_CUSTOMER_MUTATION = graphql`
    mutation useCreateCustomerMutation($customerData: customerDataInput!) {
      createCustomer(input: $customerData) {
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

  const [createCustomer] = useMutation(CREATE_CUSTOMER_MUTATION);

  const handleCreateCustomer = (customerData: ICustomer) => {
    createCustomer({
      variables: {
        customerData,
      },
      onCompleted: () => {
        notification.open({
          message: "Completado",
          description: "El cliente se ha creado exitosamente",
          type: "success",
          placement: "top",
        });
        dispatch(setShowCreateCustomerModal(false));
      },
      onError: () => {
        notification.open({
          message: "Error",
          description: "Error al crear el cliente",
          type: "error",
          placement: "top",
        });
      },
      updater(store) {
        const root = store.getRoot();
        const connectionId = ConnectionHandler.getConnectionID(
          root.getDataID(),
          "main_customersConnection"
        );

        const connectionRecord = store.get(connectionId);
        const newCustomer = store.getRootField("createCustomer");

        if (connectionRecord && newCustomer) {
          const newEdge = ConnectionHandler.createEdge(
            store,
            connectionRecord,
            newCustomer,
            "CustomerEdge"
          );
          ConnectionHandler.insertEdgeAfter(connectionRecord, newEdge);
        }
      },
    });
  };

  return { handleCreateCustomer };
}
