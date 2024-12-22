"use client";
import { createSlice } from "@reduxjs/toolkit";
import { CustomerInvoice } from "../interfaces/customerInvoice-Interface";

const customerInvoiceSlice = createSlice({
  name: "customerInvoice",
  initialState: {
    customerInvoice: [] as CustomerInvoice[],
    oneCustomerInvoice: {} as CustomerInvoice,
    isFetching: false,
    error: false,
    oneCustomerInvoiceFetching: false,
    oneCustomerInvoiceError: false,
  },
  reducers: {
    // Get CustomerInvoice
    getCustomerInvoiceStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCustomerInvoiceSuccess: (state, action) => {
      state.isFetching = false;
      state.customerInvoice = action.payload;
      state.error = false;
    },
    getCustomerInvoiceFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // Get CustomerInvoice
    getOneCustomerInvoiceStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOneCustomerInvoiceSuccess: (state, action) => {
      state.isFetching = false;
      state.customerInvoice = action.payload;
      state.error = false;
    },
    getOneCustomerInvoiceFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // Delete CustomerInvoice
    deleteCustomerInvoiceStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCustomerInvoiceSuccess: (state, action) => {
      state.isFetching = false;
      state.customerInvoice.splice(
        state.customerInvoice.findIndex((item) => item.id === action.payload),
        1
      );
    },
    deleteCustomerInvoiceFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // Update CustomerInvoice
    updateCustomerInvoiceStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCustomerInvoiceSuccess: (state, action) => {
      state.isFetching = false;
      state.customerInvoice[
        state.customerInvoice.findIndex((item) => item.id === action.payload.id)
      ] = action.payload.customerInvoice;
    },
    updateCustomerInvoiceFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // Create CustomerInvoice
    addCustomerInvoiceStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCustomerInvoiceSuccess: (state, action) => {
      state.isFetching = false;
      state.customerInvoice.push(action.payload);
    },
    addCustomerInvoiceFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCustomerInvoiceStart,
  getCustomerInvoiceSuccess,
  getCustomerInvoiceFailure,
  getOneCustomerInvoiceStart,
  getOneCustomerInvoiceSuccess,
  getOneCustomerInvoiceFailure,
  deleteCustomerInvoiceStart,
  deleteCustomerInvoiceSuccess,
  deleteCustomerInvoiceFailure,
  updateCustomerInvoiceStart,
  updateCustomerInvoiceSuccess,
  updateCustomerInvoiceFailure,
  addCustomerInvoiceStart,
  addCustomerInvoiceSuccess,
  addCustomerInvoiceFailure,
} = customerInvoiceSlice.actions;
export default customerInvoiceSlice.reducer;
