import { Modal } from "antd";
import { useAppSelector, useAppDispatch } from "../../hooks/useStore";
import { setShowConfirmationPaymentModal } from "../paymentsSlice";
import { useUpdateLoanStatus } from "../../loans/hooks/api/useUpdateLoanStatus";
import { useUpdatePaymentStatus } from "../../loans/hooks/api/useUpdatePaymentStatus";
import { useGetLoans } from "../../loans/hooks/api/useGetLoans";
import { useMemo } from "react";

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
  const { loans } = useGetLoans();
  const { updateLoanStatus } = useUpdateLoanStatus();

  const paymentSchedule = useMemo(() => {
    return loans.find((loan) => loan._id === loanId)?.paymentSchedule;
  }, [loans, loanId]);

  const handleUpdateLoan = () => {
    const allPaymentsPaid =
      paymentSchedule.length > 0 &&
      paymentSchedule.every((payment) => payment.status === "PAID");

    if (allPaymentsPaid && loanId) {
      updateLoanStatus(loanId, "PAID");
    }
  };

  const { updatePaymentStatus } = useUpdatePaymentStatus();
  const dispatch = useAppDispatch();

  const onOk = () => {
    updatePaymentStatus(loanId!, paymentId, "PAID");
    dispatch(setShowConfirmationPaymentModal(false));
    handleUpdateLoan();
  };

  return (
    <Modal
      title="Confirmar Pago de Cuota"
      open={showModal}
      closable={false}
      maskClosable={false}
      okText="Confirmar"
      cancelText="Cancelar"
      onOk={onOk}
      onCancel={() => dispatch(setShowConfirmationPaymentModal(false))}
      centered
      destroyOnClose
    >
      ¿Está seguro de que desea confirmar el pago de la cuota? Esta acción no se
      puede deshacer.
    </Modal>
  );
}
