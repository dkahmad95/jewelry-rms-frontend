import {Select} from "@/UI-Components/sharedComponents/select";
import React from "react";
import {Input} from "@/UI-Components/sharedComponents/input";
import {Link} from "react-router-dom";
import {Button} from "@/UI-Components/sharedComponents/button";


export default function EditCustomerInvoiceForm() {
    /// Items select options
    const itemOptions = [
        { value: "18K", label: "18K" },
        { value: "21K", label: "21K" },
        { value: "24K", label: "24K" },
        { value: "silver", label: "Silver" },
        { value: "watch", label: "Watch" },
    ];


    return (
        <div className="mt-6 flow-root">
            {/*customer info*/}
            <div className='flex flex-col xl:flex-row justify-between m-6'>
                <div className='flex flex-col justify-center items-center xl:flex-row '>
                    <Input

                        name="customerName"
                        type="text"
                        placeholder="Customer Name"
                        // onChange={(e) => handleInfo(e)}
                        className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 mx-3 w-[200px] xl:w-40"

                    />
                    <Input
                        name="phoneNumber"
                        type="text"
                        placeholder="Customer Phone"
                        // onChange={(e) => handleInfo(e)}
                        className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 mx-3 w-[200px] xl:w-40"
                    />
                </div>
                <div className='flex justify-center items-center'>

                    <Input
                        name="total"
                        // id={`desc-${index}`}
                        placeholder="Total Invoice"
                        type="text"
                        // value={form.desc}
                        // onChange={(e) => handleInputChange(e, index)}
                        className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 mx-3 w-[200px] xl:w-40"
                    />

                </div>
            </div>

            {/*items Table*/}
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 xl:pt-0">
                    {/*md screen table*/}
                    <div className="xl:hidden">
                        {/* {invoices?.map((invoice) => ( */}
                        <div
                            // key={invoice.id}
                            className="mb-2 w-full rounded-md bg-white p-4"
                        >
                            <div className="flex flex-col w-auto  justify-between border-b pb-4">
                                <div className='flex flex-row justify-between items-center'>


                                    {/* <p>{invoice.name}</p> */}
                                    <p className="text-lg items-center text-gray-500 mb-4">Item: </p>
                                    <Select
                                        name="item"
                                        // id={`item-${index}`}

                                        options={itemOptions}
                                        // value={item.item}
                                        // onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[220px] mx-3 xl:w-40 mb-0 "

                                    />

                                </div>
                                <div className='flex flex-row justify-between items-center'>

                                    <p className="text-lg items-center text-gray-500 mb-4">Description: </p>
                                    <Input
                                        name="desc"
                                        // id={`desc-${index}`}
                                        placeholder="Description"
                                        type="text"
                                        // value={form.desc}
                                        // onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[300px] items-center mx-3 xl:w-40"
                                    />

                                </div>
                                {/* <InvoiceStatus status={invoice.status} /> */}
                            </div>
                            <div className="flex flex-col w-auto  justify-between  pb-4 mt-4">
                                <div className='flex flex-row justify-between items-center'>


                                    {/* <p>{invoice.name}</p> */}
                                    <p className="text-lg items-center text-gray-500 mb-4">Weight: </p>
                                    <Input
                                        name="weight"
                                        // id={`weight-${index}`}
                                        type="number"
                                        placeholder="Weight"
                                        // value={form.weight}
                                        // onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[300px] items-center mx-3 xl:w-40"

                                    />

                                </div>
                                <div className='flex flex-row justify-between items-center'>

                                    <p className="text-lg items-center text-gray-500 mb-4">Unit Price: </p>
                                    <Input
                                        name="unitePrice"
                                        type="number"
                                        // id={`unitePrice-${index}`}
                                        placeholder="Unite Price"
                                        // value={item.unitePrice}
                                        // onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[300px] items-center mx-3 xl:w-40"

                                    />

                                </div>
                                {/* <InvoiceStatus status={invoice.status} /> */}
                            </div>
                        </div>
                        {/* ))} */}
                    </div>
                    {/*full screen table*/}
                    <table className="hidden min-w-full text-gray-900 xl:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Item
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Description
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Weight
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Unit Price
                            </th>

                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {/* {invoices?.map((invoice) => ( */}
                        <tr
                            // key={invoice.id}
                            className="w-full border-b mr-4 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                        >
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex items-center gap-3">


                                    <Select
                                        name="item"
                                        // id={`item-${index}`}
                                        options={itemOptions}
                                        // value={item.item}
                                        // onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[220px] mx-3 xl:w-40 mb-0 "

                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                <Input
                                    name="desc"
                                    // id={`desc-${index}`}
                                    type="text"
                                    // value={form.desc}
                                    // onChange={(e) => handleInputChange(e, index)}
                                    className=" w-[300px] items-center mx-3 xl:w-40"
                                />
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                <Input
                                    name="weight"
                                    // id={`weight-${index}`}
                                    type="number"
                                    // value={form.weight}
                                    // onChange={(e) => handleInputChange(e, index)}
                                    className=" w-[300px] items-center mx-3 xl:w-40"

                                />
                            </td>
                            <td className="whitespace-nowrap  px-3 py-3">
                                <Input
                                    name="unitePrice"
                                    type="number"
                                    // id={`unitePrice-${index}`}
                                    // value={item.unitePrice}
                                    // onChange={(e) => handleInputChange(e, index)}
                                    className=" w-[300px] items-center mx-3 xl:w-40"

                                />

                            </td>

                        </tr>
                        {/* ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Buttons*/}
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    to="/suppliersList"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button className={`text-white `} type="submit" >
                    Update Invoice
                </Button>
            </div>
        </div>
    );
}
