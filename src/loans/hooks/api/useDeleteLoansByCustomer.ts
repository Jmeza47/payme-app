import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { database } from "../../../firebase";
import { useState } from "react";
import {
  successNotification,
  errorNotification,
} from "../../../ui/notifications";

export const useDeleteLoansByCustomerId = () => {
  const [loading, setLoading] = useState(false);

  const deleteLoansByCustomer = async (customerId: string) => {
    setLoading(true);
    try {
      const loansRef = collection(database, "loans");
      const customerIdQuery = query(
        loansRef,
        where("customerId", "==", customerId)
      );

      const querySnapshot = await getDocs(customerIdQuery);
      for (const docSnapshot of querySnapshot.docs) {
        await deleteDoc(doc(database, "loans", docSnapshot.id));
      }
      successNotification(
        "Se ha eliminado con exito la informacion sobre creditos del cliente!"
      );
    } catch {
      errorNotification(
        "Ha ocurrido un error al eliminar la informacion de creditos del cliente!"
      );
    } finally {
      setLoading(false);
    }
  };

  return { deleteLoansByCustomer, loading };
};
