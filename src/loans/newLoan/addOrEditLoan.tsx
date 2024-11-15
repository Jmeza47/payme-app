import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { setShowLoansModal } from "../loansSlice";
import LoansForm from "./loansForm";

export function AddOrEditLoan() {
  const showLoansModal = useAppSelector(
    (state) => state.loans.setShowLoansModal
  );

  const dispatch = useAppDispatch();
  return (
    <Modal
      title="Nuevo Prestamo"
      open={showLoansModal}
      onCancel={() => dispatch(setShowLoansModal(false))}
      destroyOnClose
      width={600}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
    >
      <LoansForm />
    </Modal>
  );
}
