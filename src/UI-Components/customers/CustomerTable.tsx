import {GridColDef} from "@mui/x-data-grid";

import DataTable from "@/UI-Components/sharedComponents/dataTable";
import React from "react";
import {DataTableSkeleton} from "@/UI-Components/suppliers/tableSkelaton";

const CustomerTable = () => {
   const customersIsLoading = false
   const customersError = false

   const customerColumns = [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'customerName', headerName: 'Customer Name', width: 250 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 250 },
    { field: 'total', headerName: 'Total', width: 250 },
    
];

const customerData = [
    {
        id: 1,
        date: "09/12/2023",
        customerName: "Ahmad Dekmak",
        phoneNumber: "961-78-940697",
        total: "$320.00",
    },
    {
        id: 2,
        date: "09/13/2023",
        customerName: "John Doe",
        phoneNumber: "123-456-7890",
        total: "$450.00",
    },
    {
        id: 3,
        date: "09/14/2023",
        customerName: "Jane Smith",
        phoneNumber: "987-654-3210",
        total: "$520.00",
    },
    {
        id: 4,
        date: "09/15/2023",
        customerName: "Alice Johnson",
        phoneNumber: "555-123-4567",
        total: "$600.00",
    },
    {
        id: 5,
        date: "09/16/2023",
        customerName: "Bob Brown",
        phoneNumber: "444-567-8901",
        total: "$700.00",
    }
];
    
    if (customersError) {
        return (
            <div className="flex justify-center items-center mt-16">
                <span className="text-red-500 text-2xl">Error while Fetching Customers, please try again!</span>
            </div>
        );
    }

    return(
        <div>
            {customersIsLoading ? <DataTableSkeleton/> :
                <DataTable columns={customerColumns} rows={customerData}/>
            }
        </div>
    )

}

export default CustomerTable