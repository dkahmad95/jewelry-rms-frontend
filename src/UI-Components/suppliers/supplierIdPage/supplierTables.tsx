'use client'

import {useState} from "react";
import {Button} from "@/UI-Components/sharedComponents/button";
import DataTable from "@/UI-Components/sharedComponents/dataTable";

 const SupplierTables = () => {
const [supplierTransTable,setSupplierTransTable] = useState(true)
     const [supplierPaymentsTable,setSupplierPaymentsTable] = useState(false)

     return(
        <div>
            <div className='flex w-full items-center justify-center gap-x-3 md:justify-end '>
                <Button className={`${supplierTransTable ?'bg-blue-600 text-white' : 'bg-white text-black ' } border-2  border-b-600 hover:bg-blue-600 hover:text-white`}
                onClick={()=> {
                    setSupplierTransTable(true)
                    setSupplierPaymentsTable(false)
                }}
                >View Transactions</Button>
                 <Button className={`${supplierPaymentsTable ?'bg-blue-600 text-white' : 'bg-white '} border-2    border-b-600 hover:bg-blue-600 hover:text-white`}
                         onClick={()=> {
                             setSupplierPaymentsTable(true)
                             setSupplierTransTable (false)
                         }}
                 >View Payments</Button>
            </div>

            <div className='w-full my-3'>
                {supplierTransTable &&
                <DataTable columns={[]} rows={[]} path={''}/>
                }
                {supplierPaymentsTable &&
					<DataTable columns={[]} rows={[]} path={''}/>
                }
            </div>
        </div>
    )
 }

export default SupplierTables;