import {GridColDef} from "@mui/x-data-grid";

import DataTable from "@/UI-Components/sharedComponents/dataTable";
import React from "react";
import {DataTableSkeleton} from "@/UI-Components/suppliers/tableSkelaton";

const ExpenseTable = () => {
    const expensesIsLoading = false
    const expensesError = false

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'expenseName', headerName: 'Expense', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
        {
            field: 'expenseValue',
            headerName: 'Value',
            type: 'number',
            width: 130,
        },
        {
            field: 'Date',
            headerName: 'createdDate',

            width: 130,
        },


    ];


    if (expensesError) {
        return (
            <div className="flex justify-center items-center mt-16">
                <span className="text-red-500 text-2xl">Error while Fetching Expenses, please try again!</span>
            </div>
        );
    }

    return(
        <div>
            {expensesIsLoading ? <DataTableSkeleton/> :
                <DataTable columns={columns} rows={[]} path=''/>
            }
        </div>
    )

}

export default ExpenseTable