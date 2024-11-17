import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../../firebase";
import { notification } from "antd";
import { useState } from "react";
import { ICustomer } from "../../../common/types";
import { useAppDispatch } from "../../../hooks/useStore";
import { setShowCreateCustomerModal } from "../../customerSlice";

export const useUpdateCustomer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const updateCustomer = async (
    customerId: string,
    updatedFields: Partial<ICustomer>
  ) => {
    setLoading(true);

    try {
      const customerRef = doc(database, "customers", customerId);
      await updateDoc(customerRef, updatedFields);
      dispatch(setShowCreateCustomerModal(false));
      notification.success({
        message: "Completado",
        description: "El cliente ha sido actualizado exitosamente",
        type: "success",
        placement: "top",
      });
    } catch {
      notification.error({
        message: "Error",
        description: "Error al actualizar cliente",
        type: "error",
        placement: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return { updateCustomer, loading };
};
