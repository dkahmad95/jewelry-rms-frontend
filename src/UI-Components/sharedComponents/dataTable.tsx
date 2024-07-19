'use client'
import * as React from 'react';
import {DataGrid, GridRowParams} from '@mui/x-data-grid';


import {useDispatch} from "react-redux";

import {useNavigate} from "react-router";
import {getOneSupplier} from "@/lib/redux/apiCalls/supplierAPIs";


type DataTableProps = {
    rows: any[];
    columns: any[];
    handleEvent?: any;
};

export default function DataTable({ rows, columns ,handleEvent}:DataTableProps) {



    const getRowClassName = (params: GridRowParams) => {
        return "cursor-pointer";
    };

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows?.toReversed()}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection

                onRowDoubleClick={handleEvent}

                getRowClassName={getRowClassName} // Add cursor pointer to row
            />
        </div>
    );
}