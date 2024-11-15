import { createSlice } from "@reduxjs/toolkit";
import { ICustomer } from "../common/types";

export interface ShowCreateCustomerModal {
  showModal: boolean;
  isEditing: boolean;
  setEditingValues: ICustomer;
}

const initialState: ShowCreateCustomerModal = {
  showModal: false,
  isEditing: false,
  setEditingValues: {
    name: "",
    lastName: "",
    phone1: "",
    phone2: "",
    address: "",
    ref1: "",
    ref1Tel: "",
    ref2: "",
    ref2Tel: "",
  },
};

const createCustomerSlice = createSlice({
  name: "showCreateCustomerModal",
  initialState,
  reducers: {
    setShowCreateCustomerModal: (state, payload) => {
      state.showModal = state.showModal = payload.payload;
    },
    setIsEditing: (state, payload) => {
      state.isEditing = state.isEditing = payload.payload;
    },
    setEditingValues: (state, payload) => {
      state.setEditingValues = {
        ...state.setEditingValues,
        ...payload.payload,
      };
    },
  },
});

export const { setShowCreateCustomerModal, setIsEditing, setEditingValues } =
  createCustomerSlice.actions;

export default createCustomerSlice.reducer;
