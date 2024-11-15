import { createSlice } from "@reduxjs/toolkit";
import { PaymentScheduleInput } from "../common/types";

export interface paymentsSlice {
  setShowConfirmationPaymentModal: boolean;
  paymentInformation: PaymentScheduleInput;
}

const initialState: paymentsSlice = {
  setShowConfirmationPaymentModal: false,
  paymentInformation: {
    _id: "",
    paymentDate: new Date(),
    amountPaid: 0,
    interestPaid: 0,
    dueDays: 0,
    extraInterest: 0,
    status: "ACTIVE",
  },
};

const paymentsSlice = createSlice({
  name: "paymentsSlice",
  initialState: initialState,
  reducers: {
    setShowConfirmationPaymentModal: (state, action) => {
      state.setShowConfirmationPaymentModal =
        state.setShowConfirmationPaymentModal = action.payload;
    },
    paymentInformation: (state, action) => {
      state.paymentInformation = {
        ...state.paymentInformation,
        ...action.payload,
      };
    },
  },
});

export const { setShowConfirmationPaymentModal, paymentInformation } =
  paymentsSlice.actions;
export default paymentsSlice.reducer;
