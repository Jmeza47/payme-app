import { doc, deleteDoc } from "firebase/firestore";
import { database } from "../../../firebase";
import { notification } from "antd";
import { useState } from "react";

export const useDeleteCustomer = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const deleteCustomer = async (customerId: string) => {
    setLoading(true);

    try {
      const customerRef = doc(database, "customers", customerId);
      await deleteDoc(customerRef);

      notification.success({
        message: "Completado",
        description: "El cliente ha sido eliminado exitosamente",
        type: "success",
        placement: "top",
      });
    } catch {
      notification.error({
        message: "Error",
        description: "Error al eliminar cliente",
        type: "error",
        placement: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return { deleteCustomer, loading };
};
