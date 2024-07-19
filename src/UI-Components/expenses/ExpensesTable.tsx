import { GridColDef } from "@mui/x-data-grid";

import DataTable from "@/UI-Components/sharedComponents/dataTable";
import React, { useEffect } from "react";
import { DataTableSkeleton } from "@/UI-Components/suppliers/tableSkelaton";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/lib/redux/store";
import { Expenses } from "@/lib/interfaces/expenses-interface";

import { getExpenses } from "@/lib/redux/apiCalls/expensesAPIs";

const ExpenseTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getExpenses(dispatch)
      .then((r) => r)
      .catch(Error);
  }, [dispatch]);

  const expenses: Expenses[] = useSelector(
    (state: RootState) => state.expenses.expenses
  );
  const expensesIsLoading: boolean = useSelector(
    (state: RootState) => state.expenses.isFetching
  );
  const expensesError: boolean = useSelector(
    (state: RootState) => state.expenses.error
  );
  
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "description", headerName: "Description", width: 200 },
    {
      field: "value",
      headerName: "Value",
      type: "number",
      width: 130,
    },
    {
      field: "createdDate",
      headerName: "Date",

      width: 130,
    },
  ];

  if (expensesError) {
    return (
      <div className="flex justify-center items-center mt-16">
        <span className="text-red-500 text-2xl">
          Error while Fetching Expenses, please try again!
        </span>
      </div>
    );
  }

  return (
    <div>
      {expensesIsLoading ? (
        <DataTableSkeleton />
      ) : (
        <DataTable columns={columns} rows={expenses} />
      )}
    </div>
  );
};

export default ExpenseTable;
