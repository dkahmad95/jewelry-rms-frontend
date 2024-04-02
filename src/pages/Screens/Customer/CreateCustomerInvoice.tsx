import Breadcrumbs from "@/UI-Components/sharedComponents/breadcrumbs";
import React from "react";
import CustomerInvoiceForm from "@/UI-Components/customers/CustomerInvoice-form";

const CreateCustomerInvoice = () => {
  return (
      <main>
          <Breadcrumbs
              breadcrumbs={[
                  {label: 'Customers', href: '/customersList'},
                  {label: 'Create Invoice', href: `/createCustomerInvoice` , active: true},

              ]}
          />
        <CustomerInvoiceForm/>

      </main>
  )
}

export default CreateCustomerInvoice