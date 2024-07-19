
import React, {useEffect} from "react";
import {GridColDef, GridEventListener} from "@mui/x-data-grid";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "@/lib/redux/store";
import {getOneSupplier, getSuppliers} from "@/lib/redux/apiCalls/supplierAPIs";
import {DataTableSkeleton} from "@/UI-Components/suppliers/tableSkelaton";
import DataTable from "@/UI-Components/sharedComponents/dataTable";
import { useNavigate} from "react-router";
import {Supplier} from "@/lib/interfaces/suppliers-interface";
import { Button } from "../sharedComponents/button";






export default  function SuppliersTable () {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const suppliers: Supplier[] = useSelector((state: RootState) => state.supplier.suppliers);
    const suppliersIsLoading: boolean = useSelector((state: RootState) => state.supplier.isFetching);
    const suppliersError: boolean = useSelector((state: RootState) => state.supplier.error);

    

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
        {
            field: 'viewSupplier',
            headerName: 'View Supplier',
            width: 150,
            renderCell: (params) => {
                const navigate = useNavigate();
                const handleClick = () => {
                    navigate(`/singleSupplier/${params.row.id}`);
                };
    
                return (
                    <div className=" mt-4">
                    <Button onClick={handleClick} className=" text-white h-6 ">
                        View
                    </Button>
                </div>
                );
            },
        },
    ];

    if (suppliersError) {
        return (
            <div className="flex justify-center items-center mt-16">
                <span className="text-red-500 text-2xl">Error while Fetching Suppliers, please try again!</span>
            </div>
        );
    }

    const handleSuppliers: GridEventListener<'rowDoubleClick'> = async (
        params, // GridRowParams
    ) => {
        const id: number = Number(params.id);
        await getOneSupplier(dispatch, id);
        navigate(`/singleSupplier/${id}`)
    };

    return(
        <div>
            {suppliersIsLoading ? <DataTableSkeleton/> :
            <DataTable columns={columns} rows={suppliers} handleEvent={handleSuppliers}/>
            }
        </div>
    )

}