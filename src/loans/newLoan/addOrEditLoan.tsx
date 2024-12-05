import { Modal, Spin } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { setShowLoansModal } from "../loansSlice";
import { Suspense, lazy } from "react";
const LoansForm = lazy(() => import("./loansForm"));

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
      <Suspense
        fallback={
          <Spin
            size="large"
            className="flex justify-center items-center h-full"
          />
        }
      >
        <LoansForm />
      </Suspense>
    </Modal>
  );
}
