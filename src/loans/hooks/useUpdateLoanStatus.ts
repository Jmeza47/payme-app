import { notification } from "antd";
import { useMutation } from "react-relay";
import { ConnectionHandler, graphql } from "relay-runtime";

const UPDATE_LOAN_STATUS_MUTATION = graphql`
  mutation useUpdateLoanStatusMutation($loanId: ID!, $loanStatus: String!) {
    updateLoanStatus(loanId: $loanId, loanStatus: $loanStatus) {
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

export function useUpdateLoanStatus() {
  const [updateLoanStatus] = useMutation(UPDATE_LOAN_STATUS_MUTATION);

  const handleUpdateLoanStatus = async (loanId: string, loanStatus: string) => {
    return updateLoanStatus({
      variables: { loanId, loanStatus },
      updater: (store) => {
        const root = store.getRoot();
        const loanConnection = ConnectionHandler.getConnection(
          root,
          "main_loansConnection"
        );

        if (loanConnection) {
          const updatedLoan = store.getRootField("updateLoanStatus");
          if (!updatedLoan) return;

          const updatedLoanId = updatedLoan.getValue("_id");
          const loanEdges = loanConnection.getLinkedRecords("edges") || [];

          const updatedEdges = loanEdges.map((edge) => {
            const loanNode = edge.getLinkedRecord("node");
            if (loanNode?.getValue("_id") === updatedLoanId) {
              edge.setLinkedRecord(updatedLoan, "node");
            }
            return edge;
          });
          loanConnection.setLinkedRecords(updatedEdges, "edges");
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

  return { handleUpdateLoanStatus };
}
