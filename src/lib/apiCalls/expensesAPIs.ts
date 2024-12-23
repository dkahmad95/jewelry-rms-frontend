"use client";

import { Dispatch } from "redux";
import { publicRequest, userRequest } from "@/lib/requestMethods";
import {
  addExpensesFailure,
  addExpensesStart,
  addExpensesSuccess,
  deleteExpensesFailure,
  deleteExpensesStart,
  deleteExpensesSuccess,
  getExpensesFailure,
  getExpensesStart,
  getExpensesSuccess,
  getOneExpenseFailure,
  getOneExpenseStart,
  getOneExpenseSuccess,
  updateExpensesFailure,
  updateExpensesStart,
  updateExpensesSuccess,
} from "@/lib/redux/expensesRedux";
import {
  CreateExpenses,
  UpdatedExpenses,
} from "@/lib/interfaces/expenses-interface";

//get expenses
export const getExpenses = async (dispatch: Dispatch) => {
  dispatch(getExpensesStart());
  try {
    const res = await userRequest.get("/expenses");
    dispatch(getExpensesSuccess(res.data));
  } catch (err) {
    dispatch(getExpensesFailure());
    console.error("Req failed:", err);
  }
};
//get One interfaces
export const getOneExpense = async (dispatch: Dispatch, id: number) => {
  dispatch(getOneExpenseStart());
  try {
    const res = await publicRequest.get(`/expenses/${id}`);
    dispatch(getOneExpenseSuccess(res.data));
  } catch (err) {
    dispatch(getOneExpenseFailure());
    console.error("Req failed:", err);
  }
};

// Add New Expense
export const createExpense = async (
  dispatch: Dispatch,
  expenses: CreateExpenses
) => {
  dispatch(addExpensesStart());
  try {
    const res = await publicRequest.post("/expenses", expenses);
    dispatch(addExpensesSuccess(res.data));
  } catch (err) {
    dispatch(addExpensesFailure());
    console.error("Req failed:", err);
  }
};

//update interfaces using Thunk
export const updateExpense = async (
  newExpense: UpdatedExpenses,
  id: number,
  dispatch: Dispatch
) => {
  dispatch(updateExpensesStart());
  try {
    const res = await publicRequest.patch(`/expenses/${id}`, newExpense);

    dispatch(updateExpensesSuccess(res.data));
  } catch (err) {
    dispatch(updateExpensesFailure());
    console.error("Req failed:", err);
  }
};

// delete Expense

export const deleteExpense = async (dispatch: Dispatch, id: number) => {
  dispatch(deleteExpensesStart());
  try {
    await publicRequest.delete(`/expenses/${id}`);
    dispatch(deleteExpensesSuccess(id));
  } catch (err) {
    dispatch(deleteExpensesFailure());
    console.error("Req failed:", err);
  }
};
