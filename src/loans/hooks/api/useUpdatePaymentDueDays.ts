import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { database } from "../../../firebase";
import {
  successNotification,
  errorNotification,
} from "../../../ui/notifications";

export const useUpdatePaymentDueDays = () => {
  const [loading, setLoading] = useState(false);

  const updatePaymentDueDays = async (
    loanId: string,
    paymentId: string,
    dueDays: number,
    extraInterest: number
  ) => {
    setLoading(true);
    try {
      const loanDoc = await getDoc(doc(database, "loans", loanId));

      if (!loanDoc.exists()) {
        throw new Error("Loan document not found");
      }

      const paymentSchedule = loanDoc.data()?.paymentSchedule ?? [];

      const updatedSchedule = paymentSchedule.map((payment) =>
        payment._id === paymentId
          ? { ...payment, dueDays: dueDays, extraInterest: extraInterest }
          : payment
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

  return { updatePaymentDueDays, loading };
};
