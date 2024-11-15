import { ConnectionHandler, graphql, useMutation } from "react-relay";
import { notification } from "antd";

const UPDATE_PAYMENT_STATUS_MUTATION = graphql`
  mutation useUpdatePaymentStatusMutation(
    $loanId: ID!
    $paymentScheduleId: ID!
    $status: String!
  ) {
    updatePaymentStatus(
      loanId: $loanId
      paymentScheduleId: $paymentScheduleId
      status: $status
    ) {
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

export function useUpdatePaymentStatus() {
  const [updatePaymentStatus] = useMutation(UPDATE_PAYMENT_STATUS_MUTATION);

  const handleUpdatePaymentStatus = (
    loanId: string,
    paymentScheduleId: string,
    status: string
  ) => {
    updatePaymentStatus({
      variables: { loanId, paymentScheduleId, status },
      updater: (store) => {
        const root = store.getRoot();

        const loanConnection = ConnectionHandler.getConnection(
          root,
          "main_loansConnection"
        );

        if (loanConnection) {
          const updatedLoan = store.getRootField("updatePaymentStatus");

          if (!updatedLoan) return;

          const updatedLoanId = updatedLoan?.getValue("_id");
          if (updatedLoanId) {
            // Get the current edges from the connection
            const loanEdges = loanConnection.getLinkedRecords("edges") || [];

            // Update the specific edge with the new data
            const updatedEdges = loanEdges.map((edge) => {
              const loanNode = edge.getLinkedRecord("node");

              if (loanNode?.getValue("_id") === updatedLoanId) {
                // Replace the old node with the updated customer data from the mutation
                edge.setLinkedRecord(updatedLoan, "node");
              }

              return edge;
            });
            loanConnection.setLinkedRecords(updatedEdges, "edges");
          }
        }
      },

      onCompleted: () => {
        notification.success({
          message: "Completado",
          description: "Estado de pago actualizado exitosamente",
          type: "success",
          placement: "top",
        });
      },
      onError: (error) => {
        notification.error({
          message: "Error",
          description: error.message,
          type: "error",
          placement: "top",
        });
      },
    });
  };

  return { handleUpdatePaymentStatus };
}
