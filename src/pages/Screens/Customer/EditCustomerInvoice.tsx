import Breadcrumbs from "@/UI-Components/sharedComponents/breadcrumbs";
import React from "react";
import EditCustomerInvoiceForm from "@/UI-Components/customers/editCustomerInvoice-form";

export default function EditCustomerInvoice() {
    return(
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Customer", href: "/customersList" },
                    {
                        label: "Edit Customer Invoice",
                        href: "/editCustomerInvoice",
                        active: true,
                    },
                ]}
            />
            <EditCustomerInvoiceForm/>
        </main>
    )

}