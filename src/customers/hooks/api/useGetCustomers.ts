// src/hooks/useCustomers.ts
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../../../firebase";
import { ICustomer } from "../../../common/types";

// Custom hook to get customers with real-time updates from Firestore
export const useGetCustomers = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const customersRef = collection(database, "customers");

    // Set up real-time listener for customers collection
    const unsubscribe = onSnapshot(
      customersRef,
      (snapshot) => {
        const customersList: ICustomer[] = snapshot.docs.map((doc) => ({
          _id: doc.id,
          ...doc.data(),
        })) as ICustomer[];

        setCustomers(customersList); // Update state with the real-time customer data
        setLoading(false); // Data loaded, stop loading
      },
      (error) => {
        setError("Failed to fetch customers");
        setLoading(false);
        console.error("Error fetching customers: ", error);
      }
    );

    // Cleanup on unmount: unsubscribe from real-time updates
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs once on mount

  return { customers, loading, error };
};
