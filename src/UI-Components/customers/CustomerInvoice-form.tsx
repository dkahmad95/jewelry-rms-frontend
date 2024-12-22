import { Select } from "@/UI-Components/sharedComponents/select";
import { Input } from "@/UI-Components/sharedComponents/input";
import { PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/UI-Components/sharedComponents/button";
import { Formik, FieldArray, Form } from "formik";
import * as Yup from "yup";
import {
  createCustomerInvoice,
  getCustomerInvoice,
} from "@/lib/apiCalls/customerinvoiceAPIs";
import { useDispatch } from "react-redux";

export default function CustomerInvoiceForm() {
  const itemOptions = [
    { value: "18K", label: "18K" },
    { value: "21K", label: "21K" },
    { value: "24K", label: "24K" },
    { value: "silver", label: "Silver" },
    { value: "watch", label: "Watch" },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("Customer name is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    items: Yup.array()
      .of(
        Yup.object().shape({
          item: Yup.string().required("Item is required"),
          weight: Yup.number()
            .required("Weight is required")
            .positive("Weight must be greater than 0"),
          unitPrice: Yup.number()
            .required("Unit price is required")
            .positive("Unit price must be greater than 0"),
        })
      )
      .required("At least one item is required"),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          items: [
            {
              item: "18K",
              weight: 0,
              description: "",
              unitPrice: 0,
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await createCustomerInvoice(dispatch, values);
            await getCustomerInvoice(dispatch);
            navigate("/customersList");
            alert("Customer Invoice created successfully!");
          } catch (error) {
            console.error("Error:", error);
            alert("Failed to create interfaces. Please try again.");
          } finally {
            setSubmitting(false);
          }
          console.log("values", values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <div className="w-full">
              {/* Customer Info and Total Price */}
              <div className="flex flex-col xl:flex-row justify-between m-6 gap-4">
                <div className="flex flex-col justify-center items-center xl:flex-row gap-4">
                  <div className="flex flex-col gap-2">
                    <Input
                      id="name"
                      label="Customer Name"
                      name="name"
                      type="text"
                      placeholder="Customer Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500w-[200px] xl:w-40"
                    />
                    {errors.name && touched.name && (
                      <div className="text-red-500 text-xs">{errors.name}</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Input
                      id="phoneNumber"
                      label="Customer Phone"
                      name="phoneNumber"
                      type="text"
                      placeholder="Customer Phone"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500  w-[200px] xl:w-40"
                    />

                    {errors.phoneNumber && touched.phoneNumber && (
                      <div className="text-red-500 text-xs">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-lg xl:text-xl font-semibold">
                    Total Invoice: $
                    {values.items
                      .reduce(
                        (sum, item) => sum + item.weight * item.unitPrice,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Item Components */}
              <div className="flex flex-col mt-16 ">
                <FieldArray
                  name="items"
                  render={(arrayHelpers) => (
                    <div className="flex flex-col flex-1 items-center w-full">
                      {values.items.map((item, index) => (
                        <div key={index} className="mb-4 w-full">
                          <div className="flex flex-col w-full">
                            <div className="flex flex-col w-full xl:flex-row items-center justify-center md:gap-x-4">
                              <div className="flex-grow xl:flex  xl:flex-row items-center justify-center  gap-5">
                                <Select
                                  id={`item-${index}`}
                                  label="Select Item"
                                  name={`items.${index}.item`}
                                  value={item.item}
                                  onChange={handleChange}
                                  options={itemOptions}
                                  className="w-[300px]"
                                  required
                                />
                                <Input
                                  name={`items.${index}.description`}
                                  label="Description"
                                  placeholder="Description"
                                  type="text"
                                  value={item.description}
                                  onChange={handleChange}
                                  className="w-[300px]"
                                />
                                <Input
                                  name={`items.${index}.weight`}
                                  label="Weight"
                                  placeholder="Weight"
                                  type="number"
                                  value={item.weight}
                                  onChange={handleChange}
                                  className="w-[300px]"
                                  required
                                />
                                <Input
                                  name={`items.${index}.unitPrice`}
                                  label="Unit Price"
                                  placeholder="Unit Price"
                                  type="number"
                                  value={item.unitPrice}
                                  onChange={handleChange}
                                  className="w-[300px]"
                                  required
                                />
                                <div className="flex items-center justify-center m-4 gap-4  ">
                                  <div className="flex items-center justify-center">
                                    <span className="font-normal text-lg mr-2">
                                      Total:
                                    </span>
                                    <span className="bg-gray-100 px-2 py-1 rounded-md">
                                      $
                                      {(item.weight * item.unitPrice).toFixed(
                                        2
                                      )}
                                    </span>
                                  </div>
                                  <XCircleIcon
                                    className="w-6 h-6 text-red-500 cursor-pointer my-3"
                                    onClick={() => arrayHelpers.remove(index)}
                                  />
                                </div>{" "}
                              </div>
                              <div className="h-[1px] w-3/4 xl:hidden bg-gray-400 my-3"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <PlusIcon
                        className="h-10 w-10 text-blue-500 cursor-pointer"
                        onClick={() =>
                          arrayHelpers.push({
                            item: "18K",
                            weight: 0,
                            description: "",
                            unitPrice: 0,
                          })
                        }
                      />
                    </div>
                  )}
                />
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <Link
                  to="/suppliersList"
                  className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                  Cancel
                </Link>
                <Button className={`text-white`} type="submit">
                  Create Invoice
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
