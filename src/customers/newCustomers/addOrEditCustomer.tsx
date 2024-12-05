import { lazy, Suspense } from "react";
import { Modal, Spin } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { setIsEditing, setShowCreateCustomerModal } from "../customerSlice";
const NewCustomerForm = lazy(() => import("./newCustomerForm"));

export default function AddOrEditCustomer() {
  const showCreateCustomerModal = useAppSelector(
    (state) => state.newCustomer.showModal
  );

  const isEditing = useAppSelector((state) => state.newCustomer.isEditing);
  const dispatch = useAppDispatch();
  return (
    <Modal
      title={isEditing ? "Editar Cliente" : "Agregar Nuevo Cliente"}
      centered
      open={showCreateCustomerModal}
      onCancel={() => {
        dispatch(setShowCreateCustomerModal(false));
        dispatch(setIsEditing(false));
      }}
      destroyOnClose
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
        <NewCustomerForm />
      </Suspense>
    </Modal>
  );
}
