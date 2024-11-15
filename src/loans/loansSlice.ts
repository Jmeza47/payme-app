import { createSlice } from "@reduxjs/toolkit";

export interface LoansSlice {
  setShowLoansModal: boolean;
}

const initialState: LoansSlice = {
  setShowLoansModal: false,
};

const createOrEditLoanSlice = createSlice({
  name: "loansSlice",
  initialState: initialState,
  reducers: {
    setShowLoansModal: (state, action) => {
      state.setShowLoansModal = state.setShowLoansModal = action.payload;
    },
  },
});

export const { setShowLoansModal } = createOrEditLoanSlice.actions;
export default createOrEditLoanSlice.reducer;
