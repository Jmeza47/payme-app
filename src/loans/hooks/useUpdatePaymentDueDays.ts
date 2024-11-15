import { ConnectionHandler, graphql, useMutation } from "react-relay";
import { notification } from "antd";

const UPDATE_PAYMENT_DUE_DAYS_MUTATION = graphql`
  mutation useUpdatePaymentDueDaysMutation(
    $loanId: ID!
    $paymentScheduleId: ID!
    $dueDays: Int!
    $extraInterest: Float!
  ) {
    updatePaymentDueDays(
      loanId: $loanId
      paymentScheduleId: $paymentScheduleId
      dueDays: $dueDays
      extraInterest: $extraInterest
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

export function useUpdatePaymentDueDays() {
  const [updatePaymentDueDays] = useMutation(UPDATE_PAYMENT_DUE_DAYS_MUTATION);

  const handleUpdatePaymentDueDays = (
    loanId: string,
    paymentScheduleId: string,
    dueDays: number,
    extraInterest: number
  ) => {
    updatePaymentDueDays({
      variables: { loanId, paymentScheduleId, dueDays, extraInterest },
      updater: (store) => {
        const root = store.getRoot();

        const loanConnection = ConnectionHandler.getConnection(
          root,
          "main_loansConnection"
        );

        if (loanConnection) {
          const updatedLoan = store.getRootField("updatePaymentDueDays");

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

  return { handleUpdatePaymentDueDays };
}
