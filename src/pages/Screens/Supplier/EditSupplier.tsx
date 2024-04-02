'use client'
import React from 'react'
import {useSelector} from "react-redux";
import {RootState} from "@/lib/redux/store";
import {useLocation} from "react-router";
import Breadcrumbs from "@/UI-Components/sharedComponents/breadcrumbs";
import EditSupplierForm from "@/UI-Components/suppliers/editSupplier/editSupplierForm";

const EditSupplier = () => {
const location = useLocation()
    const oneSupplierById = useSelector((state: RootState)=> state.supplier.oneSupplier)
    const supplierId = parseInt(location.pathname.split('/')[2])
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Suppliers', href: '/suppliersList'},
                    {
                        label: 'Supplier Page',
                        href:  `/singleSupplier/${supplierId}`,

                    },
                    {
                        label: 'Edit Supplier',
                        href: `/editSupplier/${supplierId}`,
                        active: true,
                    },
                ]}
            />
            <EditSupplierForm supplierId={supplierId} supplier={oneSupplierById}/>
        </main>
    )
}

export default EditSupplier