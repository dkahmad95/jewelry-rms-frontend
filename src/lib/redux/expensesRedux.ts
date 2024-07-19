'use client'
import { createSlice } from "@reduxjs/toolkit";
import {Expenses} from "@/lib/interfaces/expenses-interface";


const expensesSlice = createSlice({
    name: "expenses",
    initialState: {
        expenses: [] as Expenses[],
        oneExpense: {} as Expenses,
        isFetching: false,
        error: false,
        oneExpenseIsFetching: false,
        oneExpenseError: false,
    },
    reducers: {
        // Get expenses
        getExpensesStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getExpensesSuccess: (state, action) => {
            state.isFetching = false;
            state.expenses = action.payload;
            state.error = false;

        },
        getExpensesFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },


        // Get One interfaces
        getOneExpenseStart: (state) => {
            state.oneExpenseIsFetching = true;
            state.oneExpenseError = false;
        },
        getOneExpenseSuccess: (state, action) => {
            state.oneExpenseIsFetching = false;
            state.oneExpense = action.payload;
        },
        getOneExpenseFailure: (state) => {
            state.oneExpenseIsFetching = false;
            state.oneExpenseError = true;
        },



        // Delete expenses
        deleteExpensesStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteExpensesSuccess: (state, action) => {
            state.isFetching = false;
            state.expenses.splice(
                state.expenses.findIndex((item) => item.id === action.payload),
                1
            );
        },
        deleteExpensesFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },


        // Update expenses
        updateExpensesStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateExpensesSuccess: (state, action) => {
            state.isFetching = false;
            state.expenses[
                state.expenses.findIndex((item) => item.id === action.payload.id)
                ] = action.payload.expenses;
        },
        updateExpensesFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },


        // Create expenses
        addExpensesStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addExpensesSuccess: (state, action) => {
            state.isFetching = false;
            state.expenses.push(action.payload);
        },
        addExpensesFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getExpensesStart,
    getExpensesSuccess,
    getExpensesFailure,
    getOneExpenseStart,
    getOneExpenseSuccess,
    getOneExpenseFailure,

    deleteExpensesStart,
    deleteExpensesSuccess,
    deleteExpensesFailure,
    updateExpensesStart,
    updateExpensesSuccess,
    updateExpensesFailure,
    addExpensesStart,
    addExpensesSuccess,
    addExpensesFailure,
} = expensesSlice.actions;
export default expensesSlice.reducer;
