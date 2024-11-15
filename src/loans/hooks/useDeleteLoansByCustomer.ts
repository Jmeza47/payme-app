import { ConnectionHandler, graphql, useMutation } from "react-relay";
import { notification } from "antd";

export function useDeleteLoansByCustomer() {
  const DELETE_LOANS_BY_CUSTOMER_MUTATION = graphql`
    mutation useDeleteLoansByCustomerMutation($customerId: ID!) {
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
        }
      }
    }
  `;

  const [deleteLoansByCustomer] = useMutation(
    DELETE_LOANS_BY_CUSTOMER_MUTATION
  );

  const handleDeleteLoansByCustomer = (customerId: string) => {
    deleteLoansByCustomer({
      variables: { customerId },
      updater: (store) => {
        const root = store.getRoot();
        const loanConnection = ConnectionHandler.getConnection(
          root,
          "loansConnection"
        );

        if (loanConnection) {
          const deletedLoans = store.getRootField("loansMainQuery");
          console.log(deletedLoans);
          if (deletedLoans) {
            const customerEdges =
              loanConnection.getLinkedRecords("edges") || [];

            // Filter out edges where customerId matches the deleted customerId
            const updatedEdges = customerEdges.filter((edge) => {
              return (
                edge.getLinkedRecord("node")?.getValue("customerId") !==
                customerId
              );
            });

            // Update the loanConnection with the filtered edges
            loanConnection.setLinkedRecords(updatedEdges, "edges");
          }
        }
      },
      onCompleted: () => {
        notification.success({
          message: "Completo",
          description:
            "Los créditos y la información de pago han sido eliminados correctamente",
          placement: "top",
        });
      },
      onError: () => {
        notification.error({
          message: "Error",
          description:
            "Ha ocurrido un error al eliminar los créditos del cliente",
          placement: "top",
        });
      },
    });
  };

  return { handleDeleteLoansByCustomer };
}
