'use client'

import React from "react";
import Breadcrumbs from "@/UI-Components/sharedComponents/breadcrumbs";
import SupplierForm from "@/UI-Components/suppliers/newSupplier/create-form";

const CreateSupplier = () => {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Suppliers", href: "/suppliersList" },
                    {
                        label: "Create Supplier",
                        href: "/createSupplier",
                        active: true,
                    },
                ]}
            />
            <SupplierForm />
        </main>
    );
};

export default CreateSupplier;
