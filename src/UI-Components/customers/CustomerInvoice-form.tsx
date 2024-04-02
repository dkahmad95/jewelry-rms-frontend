import {Select} from "@/UI-Components/sharedComponents/select";
import {Input} from "@/UI-Components/sharedComponents/input";
import {PlusIcon, XCircleIcon} from "@heroicons/react/24/outline";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/UI-Components/sharedComponents/button";


export default function CustomerInvoiceForm(){
    interface Form {
        id:number
        item: string;
        weight: number;
        desc: string;
        unitePrice: number;
        itemTotal: number

    }
    interface itemTotal{
        id:number,
        total:number
    }
    /// Items select options
    const itemOptions = [
        { value: "18K", label: "18K" },
        { value: "21K", label: "21K" },
        { value: "24K", label: "24K" },
        { value: "silver", label: "Silver" },
        { value: "watch", label: "Watch" },
    ];



    const [formCounter, setFormCounter] = useState(0);
    const [items, setItems] = useState<Form[]>([]);
    const [itemTotal, setItemTotal] = useState<itemTotal[]>([]);
    const [inputs, setInputs] = useState({customerName:"N/A" , phoneNumber: 'N/A' });
    const [total, setTotal] = useState(0);

    // Function to add a new form to the array
    const addForm = () => {
        const newFormKey = formCounter + 1;
        const newForm = {
            id: formCounter,
            item: "18K",
            weight: 0,
            desc: "",
            unitePrice: 0,
            itemTotal:0

        };

        setItems([...items, newForm]);
        setFormCounter(newFormKey);
    };

    /// delete from for items inputs
    const deleteForm = (index: number) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    // Function to handle and update the input changes of items
    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        formIndex: number
    ) => {
        const updatedItems = [...items];
        updatedItems[formIndex] = {
            ...updatedItems[formIndex],
            [event.target.name]: event.target.value,
        };

        setItems(updatedItems);
    };


    // function to calculate th item total

    useEffect(() => {
        // Calculate total unitPrices when data changes
        const calculatedUnitPrice = items.map((item) => ({
            id: item.id,
            total:  item.unitePrice * item.weight  || 0
        }));
        setItemTotal(calculatedUnitPrice);

        let sum = 0;
        items.forEach((item) => {
            const quantity = item.weight* item.unitePrice;
            if (!isNaN(quantity)) {
                sum += quantity;
            }
        });
        setTotal(sum);
    }, [items]);

    //handle customer name and phone
    const handleInfo = (e: { target: { name: string; value: string; }; }) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

// Function to check if the provided input value is valid
    const isValidInput = (value: string | number): boolean => {
        return !isNaN(Number(value)) && Number(value) > 0;
    };

// Handle submission
    const handleSubmission = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            // Validate inputs before submission
            const invalidInputs = items.some(item => !isValidInput(item.weight) || !isValidInput(item.unitePrice));
            if (invalidInputs) {
                // Display error message for invalid inputs
                // You can use a toast or set an error state to display a message
                console.error('Invalid inputs. Please provide valid weight and unit price.');
                return;
            }

            // Proceed with form submission
            console.log("items", items)
            console.log('itemTotal', itemTotal)
            console.log('info', inputs)

        } catch (error) {
            // Handle any submission errors
            console.error('Error occurred during submission:', error);
        }
    };

    return(
        <div className="w-full">
            {/* Customer Info and Total Price */}
            <div className='flex flex-col xl:flex-row justify-between m-6'>
                <div className='flex flex-col justify-center items-center xl:flex-row '>
                    <Input

                        name="customerName"
                        type="text"
                        placeholder="Customer Name"
                        onChange={(e) => handleInfo(e)}
                        className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 mx-3 w-[200px] xl:w-40"

                    />
                    <Input
                        name="phoneNumber"
                        type="text"
                        placeholder="Customer Phone"
                        onChange={(e) => handleInfo(e)}
                        className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 mx-3 w-[200px] xl:w-40"
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <span className="text-lg xl:text-xl font-semibold">Total Invoice: ${total.toFixed(2)}</span>
                </div>
            </div>


            {/* item Components and the rendered values */}
            <div className="flex flex-col mt-16 ">
                {/* items component */}
                <div className="flex flex-col flex-1 items-center w-full">
                    {items.map((item, index) => (
                        <div key={item.id} className=" mb-4 w-full">
                            <form className="flex flex-col w-full ">
                                <div
                                    className="flex flex-col w-full xl:flex-row items-center justify-center md:gap-x-4 ">
                                    <Select
                                        name="item"
                                        id={`item-${index}`}
                                        label="Select Item"
                                        options={itemOptions}
                                        value={item.item}
                                        onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[220px] mx-3 xl:w-40 "
                                        required
                                    />
                                    <Input
                                        name="desc"
                                        id={`desc-${index}`}
                                        placeholder="Description"
                                        type="text"
                                        // value={form.desc}
                                        onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[300px] mx-3 xl:w-40"
                                    />
                                    <Input
                                        name="weight"
                                        id={`weight-${index}`}
                                        type="number"
                                        placeholder="Weight"
                                        // value={form.weight}
                                        onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[300px] mx-3 xl:w-40"
                                        required
                                    />

                                    <Input
                                        name="unitePrice"
                                        type="number"
                                        id={`unitePrice-${index}`}
                                        placeholder="Unite Price"
                                        // value={item.unitePrice}
                                        onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[300px] mx-3 xl:w-40"
                                        required
                                    />
                                    <div className="flex items-center justify-center">
                                        <span className="font-normal text-lg mr-2">Total:</span>
                                        <span
                                            className="bg-gray-100 px-2 py-1 rounded-md">${(itemTotal.find(total => total.id === item.id)?.total || 0).toFixed(2)}</span>
                                    </div>
                                    <XCircleIcon
                                        className="w-6 h-6  text-red-500 cursor-pointer my-3"
                                        onClick={() => deleteForm(index)}
                                    />
                                    <div className="h-[1px] w-1/2 xl:hidden bg-gray-400 my-3"></div>
                                </div>
                            </form>
                        </div>
                    ))}
                    <PlusIcon
                        className="h-10 w-10 text-blue-500 cursor-pointer  "
                        onClick={addForm}
                    />
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    to="/suppliersList"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button className={`text-white `} type="submit" onClick={handleSubmission}>
                    Create Supplier
                </Button>
            </div>
        </div>
    )

}