"use client";
import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { XCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import {Input} from "@/UI-Components/sharedComponents/input";
import {Select} from "@/UI-Components/sharedComponents/select";
import {lusitana} from "@/UI-Components/sharedComponents/fonts";
import {Link} from "react-router-dom";
import {Button} from "@/UI-Components/sharedComponents/button";

export default function TransactionForm({ supplierId }: { supplierId: string }) {
  interface Form {
    item: string;
    weight: number;
    desc: string;
    unitPrice: number;
    totalPrice: number;
  }

  // ///interfaces select options
  // const supplierOptions = [
  //   { value: "supplier1", label: "Supplier 1" },
  //   { value: "supplier2", label: "Supplier 2" },
  //   { value: "supplier3", label: "Supplier 3" },
  //   { value: "supplier4", label: "Supplier 4" },
  // ];

  /// Items select options
  const itemOptions = [
    { value: "18K", label: "18K" },
    { value: "21K", label: "21K" },
    { value: "24K", label: "24K" },
    { value: "silver", label: "Silver" },
    { value: "watch", label: "Watch" },
  ];

  const [items, setItems] = useState<Form[]>([
    { item: "18K", weight: 0, desc: "", unitPrice: 0, totalPrice: 0 },
  ]);

  const [totalRent, setTotalRent] = useState(0);


  // add from for items input
  const addForm = () => {
    const newForm: Form = {
      item: "18K",
      weight: 0,
      desc: "",
      unitPrice: 0,
      totalPrice: 0,
    };

    setItems([...items, newForm]);
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

  // calculate the total weights
  const weight18K = useMemo(() => {
    let total18KWeight = 0;
    for (const item of items) {
      const weight = item.weight * 1;

      if (!isNaN(weight) && item.item === "18K") {
        total18KWeight += weight;
      }
    }
    return total18KWeight;
  }, [items]);

  const weight21K = useMemo(() => {
    let total21KWeight = 0;
    for (const item of items) {
      const weight = item.weight * 1;

      if (!isNaN(weight) && item.item === "21K") {
        total21KWeight += weight;
      }
    }
    return total21KWeight;
  }, [items]);
  const weight24K = useMemo(() => {
    let total24KWeight = 0;
    for (const item of items) {
      const weight = item.weight * 1;

      if (!isNaN(weight) && item.item === "24K") {
        total24KWeight += weight;
      }
    }
    return total24KWeight;
  }, [items]);

  const weightSilver = useMemo(() => {
    let silverWeight = 0;
    for (const item of items) {
      const total = item.weight * 1;

      if (!isNaN(total) && item.item === "silver") {
        silverWeight += total;
      }
    }
    return silverWeight;
  }, [items]);
  //////////////

  // calculate the TotalPrice of all items
  const totalPrice18K = useMemo(() => {
    let total18K = 0;
    for (const item of items) {
      const total = item.weight * item.unitPrice;

      if (!isNaN(total) && item.item === "18K") {
        total18K += total;
      }
    }
    return total18K;
  }, [items]);

  const totalPrice21K = useMemo(() => {
    let total21K = 0;
    for (const item of items) {
      const total = item.weight * item.unitPrice;

      if (!isNaN(total) && item.item === "21K") {
        total21K += total;
      }
    }
    return total21K;
  }, [items]);

  const totalPrice24K = useMemo(() => {
    let total24K = 0;
    for (const item of items) {
      const total = item.weight * item.unitPrice;

      if (!isNaN(total) && item.item === "24K") {
        total24K += total;
      }
    }
    return total24K;
  }, [items]);

  const totalPriceSilver = useMemo(() => {
    let silver = 0;
    for (const item of items) {
      const total = item.weight * item.unitPrice;

      if (!isNaN(total) && item.item === "silver") {
        silver += total;
      }
    }
    return silver;
  }, [items]);
  //////////

  ///karat weight to ramli
  const w18KtoRamli = useMemo(() => {
    return parseFloat(((weight18K * 750) / 995).toFixed(2));
  }, [weight18K]);
  const w21KtoRamli = useMemo(() => {
    return parseFloat(((weight21K * 875) / 995).toFixed(2));
  }, [weight21K]);

  const totalRamli = useMemo(() => {
    return w18KtoRamli + w21KtoRamli + weight24K;
  }, [w18KtoRamli, w21KtoRamli, weight24K]);

  //////



  const [ramliOldBal, setRamliOldBal] = useState("");
  /// final balnces
  const ramliFinalBal = useMemo(() => {
    return parseFloat(ramliOldBal) + totalRamli;
  }, [ramliOldBal, totalRamli]);

  const [cashOldBal, setCashOldBal] = useState("");
  const cashFinalBal = useMemo(() => {
    return parseFloat(cashOldBal) + totalRent;
  }, [cashOldBal, totalRent]);

  const calculateTotalRent = () => {
    let totalRent = 0;
    items.forEach((item) => {
      const quantity = item.weight * item.unitPrice;
      if (!isNaN(quantity)) {
        totalRent += quantity;
      }
    });
    setTotalRent(totalRent);
  };

  useEffect(() => {
    calculateTotalRent();
  }, [items, calculateTotalRent]);


// Function to check if the provided input value is valid
  const isValidInput = (value: string | number): boolean => {
    return !isNaN(Number(value)) && Number(value) > 0;
  };

// Handle submission
  const handleSubmission = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // Validate inputs before submission
      const invalidInputs = items.some(item => !isValidInput(item.weight) || !isValidInput(item.unitPrice));
      if (invalidInputs) {
        // Display error message for invalid inputs
        // You can use a toast or set an error state to display a message
        console.error('Invalid inputs. Please provide valid weight and unit price.');
        return;
      }

      // Proceed with form submission
      console.log('items', items);
      console.log('supplierId', supplierId);
    } catch (error) {
      // Handle any submission errors
      console.error('Error occurred during submission:', error);
    }
  };

  return (
      <div className="w-full">

        {/* interfaces Info */}
        <div className="flex flex-col w-full items-center justify-between mb-4 gap-y-3 md:flex-row ">
          <h1 className={`${lusitana.className} text-2xl`}>
            Supplier Transaction
          </h1>
          {/*<div className="flex w-full items-center justify-center gap-x-3 md:justify-end">*/}
          {/*  <Select*/}
          {/*      label="Select a interfaces"*/}
          {/*      options={supplierOptions}*/}
          {/*      labelClassName="mb-2 ml-1 "*/}
          {/*      className="h-7"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
        {/* item Components and the rendered values */}
        <div className="flex flex-col ">
          {/* items component */}
          <div className="flex flex-col flex-1 items-center w-full">
            {/*<h1 className={`${lusitana.className} text-lg mb-4`}>*/}
            {/*  Item Component*/}
            {/*</h1>*/}
            {items.map((form, index) => (
                <div key={index} className=" mb-4 w-full">
                  <form className="flex flex-col w-full ">
                    <div className="flex flex-col w-full xl:flex-row items-center justify-center md:gap-x-4 ">
                      <Select
                          name="item"
                          id={`item-${index}`}
                          // label="Select Item"
                          options={itemOptions}
                          value={form.item}
                          onChange={(e) => handleInputChange(e, index)}
                          className=" w-[220px] mx-3 xl:w-40 "
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
                      />
                      <Input
                          type="number"
                          name="unitPrice"
                          id={`unitPrice-${index}`}
                          placeholder="Unit Price"
                          // value={form.unitPrice}
                          onChange={(e) => handleInputChange(e, index)}
                          className=" w-[300px] mx-3 xl:w-40"
                      />
                      {/*<Input*/}
                      {/*    name="totalPrice"*/}
                      {/*    type="number"*/}
                      {/*    id={`totalPrice-${index}`}*/}
                      {/*    placeholder="Total Price"*/}
                      {/*    // value={form.totalPrice}*/}
                      {/*    onChange={(e) => handleInputChange(e, index)}*/}
                      {/*    className=" w-[300px] mx-3 xl:w-40"*/}
                      {/*/>*/}
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
          {/* rederd valus */}
          <div className="p-4 flex flex-col border border-gray-300 rounded-lg shadow-md mt-12">


            {/* Ramli values */}
            <div className="mb-6 text-center md:text-start border-b border-gray-300 pb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Ramli Values
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4 border-r border-gray-300 pr-4">
                  <div className="text-gray-600 mb-2 font-bold">
                    Total Weight 18k: {weight18K}
                  </div>
                  <div className="text-gray-600 mb-2 font-bold">
                    Total Weight 21k: {weight21K}
                  </div>
                  <div className="text-gray-600 mb-2 font-bold">
                    Total Weight 24k: {weight24K}
                  </div>
                  <div className="mb-4  ">
                    <div className="text-gray-600 mb-2 font-bold">
                      18k to Ramli: {w18KtoRamli}
                    </div>
                    <div className="text-gray-600 font-bold">
                      21k to Ramli: {w21KtoRamli}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-gray-600 mb-2 font-bold">
                    Total Ramli: {totalRamli}
                  </div>
                  <Input
                      placeholder="Ramli old balance"
                      type="number"
                      onChange={(e) => setRamliOldBal(e.target.value)}
                      className="mt-2 w-[160px]"
                  />
                  <div className="text-gray-600 mb-2 font-bold">
                    Final Ramli Balance: {ramliFinalBal}
                  </div>
                  <div className="text-gray-600 font-bold">
                    Silver Balance: {weightSilver}
                  </div>
                </div>
              </div>
            </div>

            {/* Cash values */}
            <div className="mb-6 text-center md:text-start">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Rent Values
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div className="mb-4 border-r border-gray-300 pr-4">
                  <div className="text-gray-600 mb-2 font-bold">
                    Total Rent 18k: {totalPrice18K}
                  </div>
                  <div className="text-gray-600 mb-2 font-bold">
                    Total Rent 21k: {totalPrice21K}
                  </div>
                  <div className="text-gray-600 mb-2 font-bold">
                    Total Rent 24k: {totalPrice24K}
                  </div>
                  <div className="text-gray-600 font-bold">
                    Total Rent Silver: {totalPriceSilver}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-gray-600 mb-2 font-bold">
                    Total Rent: {totalRent}
                  </div>
                  <Input
                      placeholder="Cash old balance"
                      type="number"
                      onChange={(e) => setCashOldBal(e.target.value)}
                      className="mt-2  w-[160px]"
                  />
                  <div className="text-gray-600 font-bold">
                    Cash Final Balance: {cashFinalBal}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
              to="/suppliersList"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button className={`text-white `} type="submit"  onClick={handleSubmission} >
            Add Transaction
          </Button>
        </div>
      </div>
  );
};


