
import React, {useEffect} from "react";
import {GridColDef} from "@mui/x-data-grid";
import {useDispatch, useSelector} from "react-redux";
import {Supplier} from "@/lib/data";
import {RootState} from "@/lib/redux/store";
import {getSuppliers} from "@/lib/redux/apiCalls/supplierAPIs";
import {DataTableSkeleton} from "@/UI-Components/suppliers/tableSkelaton";
import DataTable from "@/UI-Components/sharedComponents/dataTable";
import {useLocation} from "react-router";






export default  function SuppliersTable () {
const location = useLocation()
    const dispatch = useDispatch()
    const suppliers: Supplier[] = useSelector((state: RootState) => state.supplier.suppliers);
    const suppliersIsLoading: boolean = useSelector((state: RootState) => state.supplier.isFetching);
    const suppliersError: boolean = useSelector((state: RootState) => state.supplier.error);
console.log('suppliers',suppliers)
    useEffect(() => {
        getSuppliers(dispatch).then(r => r).catch(Error)
    }, [dispatch]);


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'phoneNumber', headerName: 'Phone Number', width: 130 },
        {
            field: 'cashBalance',
            headerName: 'Cash Balance',
            type: 'number',
            width: 130,
        },
        {
            field: 'ramliBalance',
            headerName: 'Ramli Balance',
            type: 'number',
            width: 130,
        },
        {
            field: 'silverBalance',
            headerName: 'Silver Balance',
            type: 'number',
            width: 130,
        },
        {
            field: 'createdDate',
            headerName: 'Created Date',
            type: 'string',
            width: 130,
        },

    ];
    if (suppliersError) {
        return (
            <div className="flex justify-center items-center mt-16">
                <span className="text-red-500 text-2xl">Error while Fetching Suppliers, please try again!</span>
            </div>
        );
    }

    return(
        <div>
            {suppliersIsLoading ? <DataTableSkeleton/> :
            <DataTable columns={columns} rows={suppliers} path='/singleSupplier'/>
            }
        </div>
    )

}