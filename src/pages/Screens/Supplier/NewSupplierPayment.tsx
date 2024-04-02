import Breadcrumbs from "@/UI-Components/sharedComponents/breadcrumbs";
import React from "react";
import PaymentForm from "@/UI-Components/suppliers/newSupplierPayment/payment-form";

const NewSupplierPayment=()=>{
    return(
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Suppliers', href: '/suppliersList' },
                    { label: 'Supplier Page', href: '/' },
                    {
                        label: 'Create Payment',
                        href: '/',
                        active: true,
                    },
                ]}
            />
            <PaymentForm/>
        </main>
    )
}

export default NewSupplierPayment