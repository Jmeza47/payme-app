import { Button, Space, Modal, App } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { useDeleteCustomer } from "../hooks/useDeleteCustomer";
import { useAppDispatch } from "../../hooks/useStore";
import {
  setIsEditing,
  setShowCreateCustomerModal,
  setEditingValues,
} from "../customerSlice";
import { ICustomer } from "../../common/types";
import { useDeleteLoansByCustomer } from "../../loans/hooks/useDeleteLoansByCustomer";

const { confirm } = Modal;

export function RowActions({ customerRecord }: { customerRecord: ICustomer }) {
  const dispatch = useAppDispatch();
  const { handleDeleteCustomer } = useDeleteCustomer();
  const { handleDeleteLoansByCustomer } = useDeleteLoansByCustomer();

  const handleEdit = () => {
    dispatch(setIsEditing(true));
    dispatch(setEditingValues(customerRecord));
    dispatch(setShowCreateCustomerModal(true));
  };

  const handleDelete = () => {
    if (customerRecord._id) {
      handleDeleteCustomer(customerRecord._id);
      handleDeleteLoansByCustomer(customerRecord._id);
    }
  };

  const showConfirm = () => {
    confirm({
      title: "Eliminar Cliente?",
      icon: <ExclamationCircleFilled />,
      content:
        "Esta seguro que desea eliminar el cliente, esto eliminara toda la informacion relacionada con el cliente como creditos, pagos y reportes!",
      okText: "Eliminar",
      cancelText: "Cancelar",
      onOk() {
        handleDelete();
      },
    });
  };

  return (
    <App>
      <Space>
        <Button type="primary" icon={<EditOutlined />} onClick={handleEdit} />

        <Button
          type="primary"
          onClick={showConfirm}
          danger
          icon={<DeleteOutlined />}
        />
      </Space>
    </App>
  );
}
