'use client'

import React from 'react'
import Breadcrumbs from "@/UI-Components/sharedComponents/breadcrumbs";
import TransactionForm from "@/UI-Components/suppliers/supplierTrans/trans-form";
import {useLocation} from "react-router";


const NewSupplierTransaction = () => {
    const location = useLocation()
    const supplierId = location.pathname.split('/')[2]
    console.log('id',supplierId)
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Suppliers', href: '/suppliersList' },
                    { label: 'Supplier Page', href: `/singleSupplier/${supplierId}` },
                    {
                        label: 'Create Transaction',
                        href: `/newSupplierTransaction/${supplierId}`,
                        active: true,
                    },
                ]}
            />
            <TransactionForm supplierId={supplierId}/>

        </main>
    )
}

export default NewSupplierTransaction