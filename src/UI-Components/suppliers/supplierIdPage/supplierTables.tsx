'use client'

import {useState} from "react";
import {Button} from "@/UI-Components/sharedComponents/button";
import DataTable from "@/UI-Components/sharedComponents/dataTable";

 const SupplierTables = () => {
const [supplierTransTable,setSupplierTransTable] = useState(true)
     const [supplierPaymentsTable,setSupplierPaymentsTable] = useState(false)
     const transColumns = [
        { field: 'date', headerName: 'Date', width: 250 },
        { field: 'totalCash', headerName: 'Total Cash', width: 250 },
        { field: 'totalRamli', headerName: 'Total Ramli', width: 250 },
        { field: 'totalSilver', headerName: 'Total Silver', width: 250 }
    ];

    const supplierTransData = [
        {   id: 1,
            date: "2024-07-01",
            totalCash: 1500,
            totalRamli: 300,
            totalSilver: 200
        },
        {   id: 2,
            date: "2024-07-02",
            totalCash: 1800,
            totalRamli: 350,
            totalSilver: 250
        },
        {   id: 3,
            date: "2024-07-03",
            totalCash: 1200,
            totalRamli: 250,
            totalSilver: 150
        },
        {   id: 4,
            date: "2024-07-04",
            totalCash: 2000,
            totalRamli: 400,
            totalSilver: 300
        },
        {   id: 5,
            date: "2024-07-05",
            totalCash: 1600,
            totalRamli: 320,
            totalSilver: 220
        }
    ];



    const paymentColumns = [
        { field: 'date', headerName: 'Date', width: 250 },
        { field: 'ramliPayment', headerName: 'Ramli Payment', width: 250 },
        { field: 'silverPayment', headerName: 'Silver Payment', width: 250 },
        { field: 'cashPayment', headerName: 'Cash Payment', width: 250 }
    ];
    const paymentData = [
        {
            id: 1,
            date: "2024-07-01",
            ramliPayment: 100,
            silverPayment: 150,
            cashPayment: 200
        },
        {
            id: 2,
            date: "2024-07-02",
            ramliPayment: 120,
            silverPayment: 170,
            cashPayment: 220
        },
        {
            id: 3,
            date: "2024-07-03",
            ramliPayment: 90,
            silverPayment: 140,
            cashPayment: 180
        },
        {
            id: 4,
            date: "2024-07-04",
            ramliPayment: 110,
            silverPayment: 160,
            cashPayment: 210
        },
        {
            id: 5,
            date: "2024-07-05",
            ramliPayment: 130,
            silverPayment: 180,
            cashPayment: 230
        }
    ];
    

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
                <DataTable columns={transColumns} rows={supplierTransData} />
                }
                {supplierPaymentsTable &&
					<DataTable columns={paymentColumns} rows={paymentData} />
                }
            </div>
        </div>
    )
 }

export default SupplierTables;