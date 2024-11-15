import { Modal } from "antd";
import { useAppSelector, useAppDispatch } from "../../hooks/useStore";
import { setShowConfirmationPaymentModal } from "../paymentsSlice";
import { useUpdatePaymentStatus } from "../../loans/hooks/useUpdatePaymentStatus";
import { useUpdateLoanStatus } from "../../loans/hooks/useUpdateLoanStatus";
import { useGetLoans } from "../../loans/hooks/useGetLoans";

export default function ConfirmPaymentModal({
  loanId,
  paymentId,
}: {
  loanId: string | null;
  paymentId: string;
}) {
  const showModal = useAppSelector(
    (state) => state.payments.setShowConfirmationPaymentModal
  );
  const loans = useGetLoans();
  const { handleUpdateLoanStatus } = useUpdateLoanStatus();
  const paymentSchedule = loans.find(
    (loan) => loan._id === loanId
  )?.paymentSchedule;

  const handleUpdateLoan = () => {
    const allPaymentsPaid =
      paymentSchedule.length > 0 &&
      paymentSchedule.every((payment) => payment.status === "PAID");

    if (allPaymentsPaid && loanId) {
      handleUpdateLoanStatus(loanId, "PAID");
    }
  };
  const { handleUpdatePaymentStatus } = useUpdatePaymentStatus();
  const dispatch = useAppDispatch();

  const onOk = () => {
    handleUpdatePaymentStatus(loanId!, paymentId, "PAID");
    dispatch(setShowConfirmationPaymentModal(false));
    handleUpdateLoan(); // Close the modal
  };

  return (
    <Modal
      title="Confirmar Pago de Cuota"
      open={showModal}
      closable={false}
      maskClosable={false}
      okText="Confirmar"
      cancelText="Cancelar"
      onOk={() => onOk()}
      onCancel={() => dispatch(setShowConfirmationPaymentModal(false))}
      centered
      destroyOnClose
    >
      ¿Está seguro de que desea confirmar el pago de la cuota? Esta acción no se
      puede deshacer.
    </Modal>
  );
}
