// src/hooks/useCustomers.ts
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../../../firebase";
import { ILoans } from "../../../common/types";

// Custom hook to get customers with real-time updates from Firestore
export const useGetLoans = () => {
  const [loans, setLoans] = useState<ILoans[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const loansRef = collection(database, "loans");

    const unsubscribe = onSnapshot(
      loansRef,
      (snapshot) => {
        const loansList: ILoans[] = snapshot.docs.map((doc) => ({
          _id: doc.id,
          ...doc.data(),
        })) as ILoans[];

        setLoans(loansList); // Update state with the real-time customer data
        setLoading(false); // Data loaded, stop loading
      },
      (error) => {
        setError("Failed to fetch Loans");
        setLoading(false);
        console.error("Error fetching loans: ", error);
      }
    );

    // Cleanup on unmount: unsubscribe from real-time updates
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs once on mount

  return { loans, loading, error };
};
