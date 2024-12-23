import React, { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

import DataTable from "@/UI-Components/sharedComponents/dataTable";
import { DataTableSkeleton } from "@/UI-Components/suppliers/tableSkelaton";
import { useNavigate } from "react-router";
import { RootState } from "@/lib/redux/store";
import { Expenses } from "@/lib/interfaces/expenses-interface";
import { deleteExpense, getExpenses } from "@/lib/apiCalls/expensesAPIs";
import BasicModal from "../sharedComponents/modal";

const ExpenseTable = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false); // For modal visibility
  const [selectedId, setSelectedId] = useState<number | null>(null); // To track the selected row ID

  const handleDelete = () => {
    if (selectedId !== null) {
      deleteExpense(dispatch, selectedId);
      setOpen(false);
    }
  };

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
    { field: "name", headerName: "Name", width: 200 },
    { field: "description", headerName: "Description", width: 300 },
    {
      field: "value",
      headerName: "Value",
      width: 130,
      renderCell: (params) => <div>$ {params.value}</div>,
    },
    {
      field: "createdDate",
      headerName: "Date",
      width: 130,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="flex flex-row gap-3 mt-4">
            <TrashIcon
              className="w-5 text-red-600 cursor-pointer"
              onClick={() => {
                setSelectedId(params.row.id); // Save the row ID
                setOpen(true); // Open the modal
              }}
            />
          </div>
        );
      },
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

      {/* Modal */}
      <BasicModal
        open={open}
        setOpen={setOpen}
        Title={`Delete Expense`}
        Body={`Are you sure you want to delete this expense?`}
        handleClick={handleDelete} // Use the correct delete handler
      />
    </div>
  );
};

export default ExpenseTable;
