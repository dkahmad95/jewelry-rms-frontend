'use client'
import React,  {useState} from 'react';

import {useDispatch} from "react-redux";
import {deleteSupplier,} from "@/lib/redux/apiCalls/supplierAPIs";
import {DeleteButton, UpdateButton} from "@/UI-Components/suppliers/buttons";
import BasicModal from "@/UI-Components/sharedComponents/modal";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {Supplier} from "@/lib/interfaces/suppliers-interface";

const SupplierInfo =  ({ supplier, supplierId,pathname }: { supplier: Supplier, supplierId: number ,pathname: string}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);// for modal

    const handleDeleteSupplier = async () => {
        try{
            await deleteSupplier(dispatch, supplierId)
            console.log('interfaces has been deleted')
            navigate('/suppliersList')
        }catch (e){
            console.log(`failed to Delete supplier with ID ${supplierId}` , e)
             alert('Failed to delete interfaces. Please try again.');
        }
    }
    return <div className="w-full mx-auto  rounded-lg overflow-hidden border-4 border-gray-50 hover:bg-gray-50">
        <div className="p-4">
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Supplier Information</h2>
            <div className=" flex flex-col md:flex-row justify-center items-center gap-3 text-sm text-gray-600">
                <p><strong>Supplier ID:</strong> {supplier?.id}</p>
                <p><strong>Supplier Name:</strong> {supplier?.name}</p>
                <p><strong>Cash Balance:</strong> ${supplier?.cashBalance}</p>
                <p><strong>Ramli Balance:</strong> {supplier?.ramliBalance}</p>
                <p><strong>Silver Balance:</strong> {supplier?.silverBalance}</p>
                <p><strong>Created Date:</strong> {supplier?.createdDate}</p>
            </div>
        </div>
    <div className="flex justify-end gap-3 pb-4 pr-4">
        <Link to={`/editSupplier/${supplierId}`}>
            <UpdateButton
            />
        </Link>
        <BasicModal
            open={open}
            setOpen={setOpen}
            handleClick={()=>handleDeleteSupplier()}
            Title={"Logout"}
            Body={"Are you sure?"}
        />
        <DeleteButton onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
            e.preventDefault()
            setOpen(true)
        }}
        />
    </div>
    </div>;
};

export default SupplierInfo;