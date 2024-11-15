import { ConnectionHandler, graphql, useMutation } from "react-relay";
import { ILoans } from "../../common/types";
import { notification } from "antd";

const CREATE_LOAN_MUTATION = graphql`
  mutation useCreateLoanMutation($loanData: loanDataInput!) {
    createLoan(input: $loanData) {
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
export function useCreateLoan() {
  const [createLoan] = useMutation(CREATE_LOAN_MUTATION);

  const handleCreateLoan = async (loanData: ILoans) => {
    createLoan({
      variables: {
        loanData,
      },
      onCompleted: () => {
        notification.open({
          message: "Completado",
          description: "El prestamo se ha creado exitosamente",
          type: "success",
          placement: "top",
        });
      },
      onError: (error) => {
        notification.open({
          message: "Error",
          description: `Error al crear el prestamo ${error}`,
          type: "error",
          placement: "top",
        });
      },
      updater(store) {
        const root = store.getRoot();
        const connectionId = ConnectionHandler.getConnectionID(
          root.getDataID(),
          "main_loansConnection"
        );
        const connectionRecord = store.get(connectionId);
        const newLoan = store.getRootField("createLoan");

        if (connectionRecord && newLoan) {
          const newEdge = ConnectionHandler.createEdge(
            store,
            connectionRecord,
            newLoan,
            "LoanEdge"
          );
          ConnectionHandler.insertEdgeAfter(connectionRecord, newEdge);
        }
      },
    });
  };

  return { handleCreateLoan };
}
