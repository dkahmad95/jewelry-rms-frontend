import {lusitana} from "@/UI-Components/sharedComponents/fonts";
import {CreateButton} from "@/UI-Components/suppliers/buttons";
import CustomerTable from "@/UI-Components/customers/CustomerTable";

const CustomersList = () => {
  return (
      <main className="w-full">
          <div className="flex flex-col w-full items-center justify-between gap-y-2 md:flex-row ">
              <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
          </div>
          <div className="my-4 flex items-center justify-end gap-2 md:mt-8">

              <CreateButton lable='Create Invoice' path="/createCustomerInvoice"/>
          </div>
          <CustomerTable/>
      </main>
  )
}

export default CustomersList