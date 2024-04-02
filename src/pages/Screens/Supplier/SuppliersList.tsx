'use client'
import {lusitana} from "@/UI-Components/sharedComponents/fonts";
import {CreateButton} from "@/UI-Components/suppliers/buttons";
import SuppliersTable from "@/UI-Components/suppliers/suppliersTable";

const SuppliersList = () => {

    return (
        <main className="w-full">
            <div className="flex flex-col w-full items-center justify-between gap-y-2 md:flex-row ">
                <h1 className={`${lusitana.className} text-2xl`}>Suppliers</h1>
            </div>
            <div className="my-4 flex items-center justify-end gap-2 md:mt-8">
                <CreateButton lable='Create Supplier' path="/createSupplier" />
            </div>
            <SuppliersTable/>
        </main>
    )
}

export default SuppliersList