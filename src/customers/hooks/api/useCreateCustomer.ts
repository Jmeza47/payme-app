import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../../firebase";
import { ICustomer } from "../../../common/types";
import { notification } from "antd";
import { useAppDispatch } from "../../../hooks/useStore";
import { setShowCreateCustomerModal } from "../../customerSlice";

export const useCreateCustomer = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const addCustomer = async (customer: ICustomer) => {
    setLoading(true);

    try {
      const customerRef = collection(database, "customers");
      await addDoc(customerRef, customer);
      dispatch(setShowCreateCustomerModal(false));
      notification.open({
        message: "Completado",
        description: "El cliente se ha creado exitosamente",
        type: "success",
        placement: "top",
      });
    } catch {
      notification.open({
        message: "Error",
        description: "Error al crear el cliente",
        type: "error",
        placement: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return { addCustomer, loading };
};
