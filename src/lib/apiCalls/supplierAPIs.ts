"use client";
import {
  addSuppliersFailure,
  addSuppliersStart,
  addSuppliersSuccess,
  deleteSuppliersFailure,
  deleteSuppliersStart,
  deleteSuppliersSuccess,
  getOneSupplierFailure,
  getOneSupplierStart,
  getOneSupplierSuccess,
  getSuppliersFailure,
  getSuppliersStart,
  getSuppliersSuccess,
  updateSuppliersFailure,
  updateSuppliersStart,
  updateSuppliersSuccess,
} from "@/lib/redux/supplierRedux";

import { Dispatch } from "redux";
import { publicRequest, userRequest } from "@/lib/requestMethods";
import {
  CreateSupplier,
  UpdatedSupplier,
} from "@/lib/interfaces/suppliers-interface";

//get suppliers
export const getSuppliers = async (dispatch: Dispatch) => {
  dispatch(getSuppliersStart());
  try {
    const res = await userRequest.get("/supplier");
    dispatch(getSuppliersSuccess(res.data));
  } catch (err) {
    dispatch(getSuppliersFailure());
    console.error("Req failed:", err);
  }
};
//get One interfaces
export const getOneSupplier = async (dispatch: Dispatch, id: number) => {
  dispatch(getOneSupplierStart());
  try {
    const res = await publicRequest.get(`/supplier/${id}`);
    dispatch(getOneSupplierSuccess(res.data));
  } catch (err) {
    dispatch(getOneSupplierFailure());
    console.error("Req failed:", err);
  }
};

// Add New Supplier
export const createSupplier = async (
  dispatch: Dispatch,
  supplier: CreateSupplier
) => {
  dispatch(addSuppliersStart());
  try {
    const res = await publicRequest.post("/supplier", supplier);
    dispatch(addSuppliersSuccess(res.data));
  } catch (err) {
    dispatch(addSuppliersFailure());
    console.error("Req failed:", err);
  }
};

//update interfaces using Thunk
export const updateSupplier = async (
  newSupplier: UpdatedSupplier,
  id: number,
  dispatch: Dispatch
) => {
  dispatch(updateSuppliersStart());
  try {
    const res = await publicRequest.patch(`/supplier/${id}`, newSupplier);

    dispatch(updateSuppliersSuccess(res.data));
  } catch (err) {
    dispatch(updateSuppliersFailure());
    console.error("Req failed:", err);
  }
};

// delete Supplier

export const deleteSupplier = async (dispatch: Dispatch, id: number) => {
  dispatch(deleteSuppliersStart());
  try {
    await publicRequest.delete(`/supplier/${id}`);
    dispatch(deleteSuppliersSuccess(id));
  } catch (err) {
    dispatch(deleteSuppliersFailure());
    console.error("Req failed:", err);
  }
};
