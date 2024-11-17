import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { database } from "../../../firebase";
import {
  successNotification,
  errorNotification,
} from "../../../ui/notifications";

export const useUpdatePaymentStatus = () => {
  const [loading, setLoading] = useState(false);

  const updatePaymentStatus = async (
    loanId: string,
    paymentId: string,
    newStatus: string
  ) => {
    setLoading(true);
    try {
      const loanDoc = await getDoc(doc(database, "loans", loanId));

      if (!loanDoc.exists()) {
        throw new Error("Loan document not found");
      }

      const paymentSchedule = loanDoc.data()?.paymentSchedule ?? [];

      const updatedSchedule = paymentSchedule.map((payment) =>
        payment._id === paymentId ? { ...payment, status: newStatus } : payment
      );
      await updateDoc(loanDoc.ref, { paymentSchedule: updatedSchedule });
      successNotification("Payment status updated successfully");
    } catch (error) {
      console.error("Error updating payment status:", error);
      errorNotification("Ha ocurrido un error actualizando el estado del pago");
    } finally {
      setLoading(false);
    }
  };

  return { updatePaymentStatus, loading };
};
