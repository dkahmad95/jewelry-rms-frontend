'use client'
import { createSlice } from "@reduxjs/toolkit";
import {Supplier} from "@/lib/interfaces/suppliers-interface";


const suppliersSlice = createSlice({
    name: "suppliers",
    initialState: {
        suppliers: [] as Supplier[],
        oneSupplier: {} as Supplier,
        isFetching: false,
        error: false,
        oneSupplierIsFetching: false,
        oneSupplierError: false,
    },
    reducers: {
        // Get suppliers
        getSuppliersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getSuppliersSuccess: (state, action) => {
            state.isFetching = false;
            state.suppliers = action.payload;
            state.error = false;

        },
        getSuppliersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },


        // Get One interfaces
        getOneSupplierStart: (state) => {
            state.oneSupplierIsFetching = true;
            state.oneSupplierError = false;
        },
        getOneSupplierSuccess: (state, action) => {
            state.oneSupplierIsFetching = false;
            state.oneSupplier = action.payload;
        },
        getOneSupplierFailure: (state) => {
            state.oneSupplierIsFetching = false;
            state.oneSupplierError = true;
        },



        // Delete suppliers
        deleteSuppliersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteSuppliersSuccess: (state, action) => {
            state.isFetching = false;
            state.suppliers.splice(
                state.suppliers.findIndex((item) => item.id === action.payload),
                1
            );
        },
        deleteSuppliersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },


        // Update suppliers
        updateSuppliersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateSuppliersSuccess: (state, action) => {
            state.isFetching = false;
            state.suppliers[
                state.suppliers.findIndex((item) => item.id === action.payload.id)
                ] = action.payload.suppliers;
        },
        updateSuppliersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },


        // Create suppliers
        addSuppliersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addSuppliersSuccess: (state, action) => {
            state.isFetching = false;
            state.suppliers.push(action.payload);
        },
        addSuppliersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getSuppliersStart,
    getSuppliersSuccess,
    getSuppliersFailure,
    getOneSupplierStart,
    getOneSupplierSuccess,
    getOneSupplierFailure,

    deleteSuppliersStart,
    deleteSuppliersSuccess,
    deleteSuppliersFailure,
    updateSuppliersStart,
    updateSuppliersSuccess,
    updateSuppliersFailure,
    addSuppliersStart,
    addSuppliersSuccess,
    addSuppliersFailure,
} = suppliersSlice.actions;
export default suppliersSlice.reducer;
