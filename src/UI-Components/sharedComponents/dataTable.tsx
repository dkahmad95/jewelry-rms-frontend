'use client'
import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';


import {useDispatch} from "react-redux";

import {useNavigate} from "react-router";
import {getOneSupplier} from "@/lib/redux/apiCalls/supplierAPIs";




// @ts-ignore
export default function DataTable({ rows, columns, path }) {
    console.log('path', path)
    const navigate = useNavigate();
    const dispatch = useDispatch()
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
                onRowDoubleClick={async (params)=> {
                    const id: number = Number(params.id);
                   await getOneSupplier(dispatch, id);
                    navigate(`${path}/${id}`)

                }}

                // onRowClick={(params)=> {
                //     route.push(`${pathName+'/'+params.id}`)
                // }}
            />
        </div>
    );
}