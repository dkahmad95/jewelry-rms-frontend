'use client';


import { UserCircleIcon,} from '@heroicons/react/24/outline';
import {ArrowRightIcon} from '@heroicons/react/20/solid';
import {Button} from '../sharedComponents/button';

import {AuthService} from "@/lib/auth.service";
import {lusitana} from "@/UI-Components/sharedComponents/fonts";
import { LoginFormSchema} from "@/lib/data";
import {Formik} from "formik";
import {useState} from "react";
import {EyeIcon, KeyIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Loader from "@/UI-Components/sharedComponents/Loader";



const authService = new AuthService()
export default function   LoginForm() {
    const navigator = useNavigate();


    const [showPassword, setShowPassword] = useState(false);
  return (
      <Formik
          initialValues={{
           username:'',
            password:''
          }}
          validationSchema={LoginFormSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              setSubmitting(true);
                console.log('values', values)
              const res =  await authService.userLogin(values.username, values.password);
                navigator("/")
                navigator(0);

                console.log(res)
            } catch (error) {
              console.error('Error:', error);
              alert(`Failed to login! ${error}`);
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
                  className="flex justify-center rounded-lg px-6 space-y-3 pb-4 pt-8"
            >
                <div className=" w-full md:w-1/2">
                    <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                        Please log in to continue.
                    </h1>
                    <div className="w-full">
                        <div>
                            <label
                                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                htmlFor="username"
                            >
                                User Name
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="username"
                                    type="text"
                                    name="username"
                                    placeholder="Enter username "
                                    required
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="username"
                                />
                                <UserCircleIcon
                                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                            </div>
                            {errors.username && touched.username && (
                                <div className="text-red-500 text-xs">{errors.username}</div>
                            )}
                        </div>
                        <div className="mt-4">
                            <label
                                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter password"
                                    required
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="current-password"
                                />
                                <KeyIcon
                                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>

                                <EyeIcon
                                    className={` cursor-pointer absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${showPassword ? 'text-blue-500' : ''}`}
                                    onClick={() => setShowPassword(!showPassword)}/>
                            </div>
                            {errors.password && touched.password && (
                                <div className="text-red-500 text-xs">{errors.password}</div>
                            )}
                        </div>
                    </div>
                    <Button className={` ${isSubmitting && 'cursor-not-allowed'} mt-4 w-full text-white`} type="submit"
                            disabled={isSubmitting}
                    >
                        Log in {isSubmitting? <Loader borderColor={'white'}/>:<ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50"/>}
                    </Button>

                    <div
                        className="flex h-8 items-end space-x-1  justify-between mt-2"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        <Link to='/frogetPassword'>
                            <span className="text-sm text-gray-600 hover:underline cursor-pointer">
                              Forgot password?
                            </span>
                        </Link>

                        <Link to={'/register'}>
                            <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                              Sign up
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


