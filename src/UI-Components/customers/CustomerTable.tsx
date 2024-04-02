import {GridColDef} from "@mui/x-data-grid";

import DataTable from "@/UI-Components/sharedComponents/dataTable";
import React from "react";
import {DataTableSkeleton} from "@/UI-Components/suppliers/tableSkelaton";

const CustomerTable = () => {
   const customersIsLoading = false
   const customersError = false

    // const columns: GridColDef[] = [
    //     { field: 'id', headerName: 'ID', width: 70 },
    //     { field: 'name', headerName: 'Name', width: 130 },
    //     { field: 'phoneNumber', headerName: 'Phone Number', width: 130 },
    //     {
    //         field: 'total',
    //         headerName: 'Total',
    //         type: 'number',
    //         width: 130,
    //     },
    //     {
    //         field: 'Date',
    //         headerName: 'Ramli Balance',
    //         type: 'number',
    //         width: 130,
    //     },
    //
    //
    // ];

    
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
                <DataTable columns={[]} rows={[]} path=''/>
            }
        </div>
    )

}

export default CustomerTable