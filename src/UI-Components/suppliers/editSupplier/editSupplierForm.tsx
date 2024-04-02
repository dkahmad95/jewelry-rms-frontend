"use client";

import Link from "next/link";
import {
  PhoneIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

import { Input } from "../../sharedComponents/input";
import {Formik} from "formik";
import {Supplier, UpdateSupplierSchema} from "@/lib/data";
import {useDispatch} from "react-redux";
import {getSuppliers, updateSupplier} from "@/lib/redux/apiCalls/supplierAPIs";
import {Button} from "@/UI-Components/sharedComponents/button";
import {useNavigate} from "react-router";




export default function EditSupplierForm({supplierId, supplier}: {supplierId : number, supplier: Supplier}) {

const navigate = useNavigate()
const dispatch =useDispatch()
// TODO: FIX THE INITIAL VALUE SO I CAN UPDATE ONE VALUE AND SEND THE REST NOT AFFECTED
  return (
      <div>
        <Formik
            initialValues={{
              name: supplier.name,
              phoneNumber: supplier.phoneNumber,
              cashBalance: supplier.cashBalance,
              ramliBalance: supplier.ramliBalance,
              silverBalance: supplier.silverBalance,
            }}
            validationSchema={UpdateSupplierSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                console.log('values',values)
                console.log('supplier',supplier)
                 await updateSupplier(values, supplierId, dispatch);
                await  getSuppliers(dispatch)

                  navigate(`/singleSupplier/${supplierId}`)
                alert('Supplier updated successfully!');

              } catch (error) {
                console.error('Error:', error);
                alert('Failed to update supplier. Please try again.');
              } finally {
                setSubmitting(false);
              }
              console.log('values',values);
            }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,


            }) => (
              <form onSubmit={handleSubmit}>
                <div className="rounded-md bg-gray-50 p-4 md:p-6">
                  {/* Supplier Name */}
                  <div className="mb-4">
                    <label htmlFor="supplier" className="mb-2 block text-sm font-medium">
                      Name
                    </label>
                    <div className="relative">
                      <Input
                          id="supplier"
                          name="name"
                          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={supplier?.name}
                      />
                      <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    {errors.name && touched.name && (
                        <div className="text-red-500 text-xs">{errors.name}</div>
                    )}
                  </div>
                  {/* Supplier PhoneNumber */}
                  <div className="mb-4">
                    <label htmlFor="supplierNb" className="mb-2 block text-sm font-medium">
                      Phone
                    </label>
                    <div className="relative">
                      <Input
                          id="supplierNb"
                          name="phoneNumber"
                          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                          value={values.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={supplier?.phoneNumber}
                      />
                      <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    {errors.phoneNumber && touched.phoneNumber && (
                        <div className="text-red-500 text-xs">{errors.phoneNumber}</div>
                    )}
                  </div>
                  {/* Supplier Cash balance */}
                  <div className="mb-4">
                    <label htmlFor="supplierCashBalance" className="mb-2 block text-sm font-medium">
                      Cash Balance
                    </label>
                    <div className="relative">
                      <Input
                          id="supplierCashBalance"
                          name="cashBalance"
                          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                          value={values.cashBalance}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={supplier?.cashBalance.toString()}
                      />
                      <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    {errors.cashBalance && touched.cashBalance && (
                        <div className="text-red-500 text-xs">{errors.cashBalance}</div>
                    )}
                  </div>
                  {/* Supplier Ramli Balance */}
                  <div className="mb-4">
                    <label htmlFor="supplierRamliBalance" className="mb-2 block text-sm font-medium">
                      Ramli Balance
                    </label>
                    <div className="relative">
                      <Input
                          id="supplierRamliBalance"
                          name="ramliBalance"
                          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                          value={values.ramliBalance}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={supplier?.ramliBalance.toString()}
                      />
                      <CircleStackIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    {errors.ramliBalance && touched.ramliBalance && (
                        <div className="text-red-500 text-xs">{errors.ramliBalance}</div>
                    )}
                  </div>
                  {/* Supplier Silver Balance */}
                  <div className="mb-4">
                    <label htmlFor="supplierSilverBalance" className="mb-2 block text-sm font-medium">
                      Silver Balance
                    </label>
                    <div className="relative">
                      <Input
                          id="supplierSilverBalance"
                          name="silverBalance"
                          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                          value={values.silverBalance}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={supplier?.silverBalance.toString()}
                      />
                      <CircleStackIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    {errors.silverBalance && touched.silverBalance && (
                        <div className="text-red-500 text-xs">{errors.silverBalance}</div>
                    )}
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                  <Link
                      href={`/dashboard/suppliers/${supplierId}`}
                      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                  >
                    Cancel
                  </Link>
                  <Button className='text-white' type="submit" disabled={isSubmitting}>
                    Update Supplier
                  </Button>
                </div>
              </form>
          )}
        </Formik>
      </div>
  );
}
