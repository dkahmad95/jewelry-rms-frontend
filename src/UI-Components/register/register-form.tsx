'use client';


import {AtSymbolIcon, MapIcon, UserCircleIcon, HashtagIcon , MapPinIcon} from '@heroicons/react/24/outline';
import {ArrowRightIcon} from '@heroicons/react/20/solid';
import {Button} from '../sharedComponents/button';

import {AuthService} from "@/lib/auth.service";
import {lusitana} from "@/UI-Components/sharedComponents/fonts";
import {RegistrationSchema} from "@/lib/data";
import {Formik} from "formik";
import {useState} from "react";
import {EyeIcon, KeyIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Loader from "@/UI-Components/sharedComponents/Loader";




const authService = new AuthService()
export default function   RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
   const navigate= useNavigate()

    return (
        <Formik
            initialValues={{
                _email:'',
                _username:'',
                _name:'',
                _country:'',
                _city:'',
                _phoneNumber:'',
                _password:'',
            }}
            validationSchema={RegistrationSchema}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    setSubmitting(true);
                   const res = await authService.userSignUp(values);
                   console.log('res',res)
                   if  (res.nextStep.signUpStep==="CONFIRM_SIGN_UP") {
                   navigate('/confirmSignUpByEmail')
                   console.log("go to confirm signup page")
                     }
                    alert('Success!');
                } catch (error) {
                    console.error('Error:', error);
                    alert(`Failed to SignUp! ${error}`);
                } finally {
                    setSubmitting(false);
                }
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
                <form onSubmit={handleSubmit}
                      className="flex justify-center rounded-lg  px-6 space-y-3 pb-4 pt-8"
                   >
                    <div className=" w-full md:w-1/2">
                        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                            Please sign up!
                        </h1>
                        <div className="w-full">
                            {/*email-username-password*/}
                            <div>
                                <div>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="_email"
                                    >
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="_email"
                                            type="email"
                                            name="_email"
                                            placeholder="Enter your email address"
                                            required
                                            value={values._email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <AtSymbolIcon
                                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                                    </div>
                                    {errors._email && touched._email && (
                                        <div className="text-red-500 text-xs">{errors._email}</div>
                                    )}
                                </div>
                                <div className='mt-4'>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="_username"
                                    >
                                        User Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="_username"
                                            type="text"
                                            name="_username"
                                            placeholder="Enter user name "
                                            required
                                            value={values._username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <UserCircleIcon
                                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                                    </div>
                                    {errors._username && touched._username && (
                                        <div className="text-red-500 text-xs">{errors._username}</div>
                                    )}
                                </div><div className='mt-4'>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="_name"
                                    >
                                        Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="_name"
                                            type="text"
                                            name="_name"
                                            placeholder="Enter Name "
                                            required
                                            value={values._name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <UserCircleIcon
                                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                                    </div>
                                    {errors._name && touched._name && (
                                        <div className="text-red-500 text-xs">{errors._name}</div>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="_password"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="_password"
                                            type={showPassword ? "text" : "password"}
                                            name="_password"
                                            placeholder="Enter password"
                                            required
                                            value={values._password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <KeyIcon
                                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>

                                        <EyeIcon
                                            className={` cursor-pointer absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${showPassword ? 'text-blue-500' : ''}`}
                                            onClick={() => setShowPassword(!showPassword)}/>
                                    </div>
                                    {errors._password && touched._password && (
                                        <div className="text-red-500 text-xs">{errors._password}</div>
                                    )}
                                </div>
                            </div>
                            {/*country-city-phone number*/}
                            <div>
                                <div className='mt-4'>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="_country"
                                    >
                                        Country
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="_country"
                                            type="text"
                                            name="_country"
                                            placeholder="Enter your country"
                                            required
                                            value={values._country}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <MapIcon
                                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                                    </div>
                                    {errors._country && touched._country && (
                                        <div className="text-red-500 text-xs">{errors._country}</div>
                                    )}
                                </div>
                                <div>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="_city"
                                    >
                                        City
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="_city"
                                            type="text"
                                            name="_city"
                                            placeholder="Enter your city"
                                            required
                                            value={values._city}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <MapPinIcon
                                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                                    </div>
                                    {errors._city && touched._city && (
                                        <div className="text-red-500 text-xs">{errors._city}</div>
                                    )}
                                </div>
                                <div>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="_phoneNumber"
                                    >
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="_phoneNumber"
                                            type="text"
                                            name="_phoneNumber"
                                            placeholder="Enter your phone number"
                                            required
                                            value={values._phoneNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <HashtagIcon
                                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                                    </div>
                                    {errors._phoneNumber && touched._phoneNumber && (
                                        <div className="text-red-500 text-xs">{errors._phoneNumber}</div>
                                    )}
                                </div>
                            </div>


                        </div>
                        <Button className={` ${isSubmitting && 'cursor-not-allowed'} mt-4 w-full text-white`}
                                type="submit"
                                disabled={isSubmitting}
                        >
                            Sign up {isSubmitting? <Loader borderColor={'white'}/>:<ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50"/>}

                        </Button>

                        <div
                            className="flex h-8 items-end justify-end space-x-1  mt-2"
                            aria-live="polite"
                            aria-atomic="true"
                        >

                            <Link to={'/login'}>
                            <span className=" text-sm  text-blue-600 hover:underline cursor-pointer">
                              Login
                            </span>
                            </Link>
                        </div>

                    </div>

                </form>
            )}
        </Formik>
    )
        ;
}


