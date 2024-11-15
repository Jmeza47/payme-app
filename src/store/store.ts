import { configureStore } from "@reduxjs/toolkit";
import showCreateCustomerModal from "../customers/customerSlice";
import loansReducer from "../loans/loansSlice";
import paymentsSlice from "../payments/paymentsSlice";

const store = configureStore({
  reducer: {
    newCustomer: showCreateCustomerModal,
    loans: loansReducer,
    payments: paymentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
