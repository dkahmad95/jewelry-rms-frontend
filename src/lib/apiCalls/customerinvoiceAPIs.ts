import { Dispatch } from "redux";
import {
  addCustomerInvoiceFailure,
  addCustomerInvoiceStart,
  addCustomerInvoiceSuccess,
  deleteCustomerInvoiceFailure,
  deleteCustomerInvoiceStart,
  deleteCustomerInvoiceSuccess,
  getCustomerInvoiceFailure,
  getCustomerInvoiceStart,
  getCustomerInvoiceSuccess,
  getOneCustomerInvoiceFailure,
  getOneCustomerInvoiceStart,
  getOneCustomerInvoiceSuccess,
  updateCustomerInvoiceFailure,
  updateCustomerInvoiceStart,
  updateCustomerInvoiceSuccess,
} from "../redux/customerInvoiceRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  CreateCustomerInvoice,
  UpdatedCustomerInvoice,
} from "../interfaces/customerInvoice-Interface";

//get CustomerInvoice
export const getCustomerInvoice = async (dispatch: Dispatch) => {
  dispatch(getCustomerInvoiceStart());
  try {
    const res = await userRequest.get("/customerInvoice");
    dispatch(getCustomerInvoiceSuccess(res.data));
    console.log("res", res);
  } catch (err) {
    dispatch(getCustomerInvoiceFailure());
    console.error("Req failed:", err);
  }
};
//get One CustomerInvoice
export const getOneCustomerInvoice = async (
  dispatch: Dispatch,
  customerInvoiceId: number
) => {
  dispatch(getOneCustomerInvoiceStart());
  try {
    const res = await userRequest.get(`/customerInvoice/${customerInvoiceId}`);
    dispatch(getOneCustomerInvoiceSuccess(res.data));
    console.log("res", res);
  } catch (err) {
    dispatch(getOneCustomerInvoiceFailure());
    console.error("Req failed:", err);
  }
};

// Add New customerInvoice
export const createCustomerInvoice = async (
  dispatch: Dispatch,
  customerInvoice: CreateCustomerInvoice
) => {
  dispatch(addCustomerInvoiceStart());
  try {
    const res = await publicRequest.post("/customerInvoice", customerInvoice);
    dispatch(addCustomerInvoiceSuccess(res.data));
  } catch (err) {
    dispatch(addCustomerInvoiceFailure());
    console.error("Req failed:", err);
  }
};

//update interfaces using Thunk
export const updateCustomerInvoice = async (
  newCustomerInvoice: UpdatedCustomerInvoice,
  id: number,
  dispatch: Dispatch
) => {
  dispatch(updateCustomerInvoiceStart());
  try {
    const res = await publicRequest.patch(
      `/customerInvoice/${id}`,
      newCustomerInvoice
    );

    dispatch(updateCustomerInvoiceSuccess(res.data));
  } catch (err) {
    dispatch(updateCustomerInvoiceFailure());
    console.error("Req failed:", err);
  }
};

// delete customerInvoice

export const deleteCustomerInvoice = async (dispatch: Dispatch, id: number) => {
  dispatch(deleteCustomerInvoiceStart());
  try {
    await publicRequest.delete(`/customerInvoice/${id}`);
    dispatch(deleteCustomerInvoiceSuccess(id));
  } catch (err) {
    dispatch(deleteCustomerInvoiceFailure());
    console.error("Req failed:", err);
  }
};
