import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../../firebase";
import {
  successNotification,
  errorNotification,
} from "../../../ui/notifications";
import { useState } from "react";

export const useUpdateLoanStatus = () => {
  const [loading, setLoading] = useState(false);

  const updateLoanStatus = async (loanId: string, newStatus) => {
    setLoading(true);
    try {
      const loanRef = doc(database, "loans", loanId);

      await updateDoc(loanRef, {
        loanStatus: newStatus,
      });
      successNotification("El estado del prestamo se ha actualizado");
    } catch {
      errorNotification(
        "Ha ocurrido un error al actualizar el estado del prestamo"
      );
    } finally {
      setLoading(false);
    }
  };

  return { updateLoanStatus, loading };
};
