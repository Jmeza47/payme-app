import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../../firebase";
import { notification } from "antd";
import { ILoans } from "../../../common/types";

const successNotification = () => {
  notification.success({
    message: "Completado",
    description: "El credito ha sido creado exitosamente",
    type: "success",
    placement: "top",
  });
};

const errorNotification = () => {
  notification.error({
    message: "Error",
    description: "Error al crear el credito",
    type: "error",
    placement: "top",
  });
};
export const useCreateLoan = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const addNewLoan = async (loanInput: ILoans) => {
    setLoading(true);

    try {
      const loansRef = collection(database, "loans");
      await addDoc(loansRef, loanInput);
      successNotification();
    } catch {
      errorNotification();
    } finally {
      setLoading(false);
    }
  };

  return { addNewLoan, loading };
};
