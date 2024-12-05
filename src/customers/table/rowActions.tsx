import { Button, Space, Modal } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";

import { useDeleteCustomer } from "../hooks/api/useDeleteCustomer";
import { useAppDispatch } from "../../hooks/useStore";
import {
  setIsEditing,
  setShowCreateCustomerModal,
  setEditingValues,
} from "../customerSlice";
import { ICustomer } from "../../common/types";
import { useDeleteLoansByCustomerId } from "../../loans/hooks/api/useDeleteLoansByCustomer";

const { confirm } = Modal;

export function RowActions({ customerRecord }: { customerRecord: ICustomer }) {
  const dispatch = useAppDispatch();

  const { deleteCustomer } = useDeleteCustomer();
  const { deleteLoansByCustomer } = useDeleteLoansByCustomerId();

  const handleEdit = () => {
    dispatch(setIsEditing(true));
    dispatch(setEditingValues(customerRecord));
    dispatch(setShowCreateCustomerModal(true));
  };

  const handleDelete = async () => {
    try {
      if (customerRecord._id) {
        await deleteCustomer(customerRecord._id);
        await deleteLoansByCustomer(customerRecord._id);
      }
    } catch (error) {
      console.error("Error deleting customer or related loans:", error);
    }
  };

  const showConfirm = () => {
    confirm({
      title: "Eliminar cliente?",
      icon: <ExclamationCircleFilled />,
      content:
        "Esta seguro que desea eliminar el cliente, esto eliminara toda la informacion relacionada con el cliente como creditos, pagos y reportes!",
      okText: "Eliminar",
      cancelText: "Cancelar",
      type: "warning",
      onOk: handleDelete,
    });
  };

  return (
    <Space>
      <Button icon={<EditOutlined />} onClick={handleEdit} />
      <Button onClick={showConfirm} danger icon={<DeleteOutlined />} />
    </Space>
  );
}
