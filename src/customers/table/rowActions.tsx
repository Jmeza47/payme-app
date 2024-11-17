import { Button, Space, Modal, App } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
//import { useDeleteCustomer } from "../hooks/useDeleteCustomer";

import { useDeleteCustomer } from "../hooks/api/useDeleteCustomer";
import { useAppDispatch } from "../../hooks/useStore";
import {
  setIsEditing,
  setShowCreateCustomerModal,
  setEditingValues,
} from "../customerSlice";
import { ICustomer } from "../../common/types";
import { useDeleteLoansByCustomerId } from "../../loans/hooks/api/useDeleteLoansByCustomer";
//import { useDeleteLoansByCustomer } from "../../loans/hooks/useDeleteLoansByCustomer";

const { confirm } = Modal;

export function RowActions({ customerRecord }: { customerRecord: ICustomer }) {
  const dispatch = useAppDispatch();

  const { deleteCustomer } = useDeleteCustomer();
  const { deleteLoansByCustomer } = useDeleteLoansByCustomerId();
  //const { handleDeleteCustomer } = useDeleteCustomer();
  //const { handleDeleteLoansByCustomer } = useDeleteLoansByCustomer();

  const handleEdit = () => {
    dispatch(setIsEditing(true));
    dispatch(setEditingValues(customerRecord));
    dispatch(setShowCreateCustomerModal(true));
  };

  const handleDelete = () => {
    if (customerRecord._id) {
      deleteCustomer(customerRecord._id);
      deleteLoansByCustomer(customerRecord._id);
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
      onOk() {
        handleDelete();
      },
    });
  };

  return (
    <App>
      <Space>
        <Button icon={<EditOutlined />} onClick={handleEdit} />
        <Button onClick={showConfirm} danger icon={<DeleteOutlined />} />
      </Space>
    </App>
  );
}
