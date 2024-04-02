import { UserCircleIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '../sharedComponents/button';
import { AuthService } from "@/lib/auth.service";
import { lusitana } from "@/UI-Components/sharedComponents/fonts";
import { useState } from "react";
import { EyeIcon, KeyIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { ConfirmSignUpByEmailSchema } from "@/lib/data";
import { Input } from "@/UI-Components/sharedComponents/input";
import { useNavigate } from "react-router";
import Loader from "@/UI-Components/sharedComponents/Loader";

const authService = new AuthService();

export default function ConfirmSignUpByEmailForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Formik
            initialValues={{
                userName: '',
                confirmationCode: ''
            }}
            validationSchema={ConfirmSignUpByEmailSchema}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    setSubmitting(true);
                    console.log('values', values)
                    const res = await authService.confirmSignUp(values.userName, values.confirmationCode);

                    if (res.isSignUpComplete) {
                        navigate('/login')
                        console.log("go to page");
                    }
                    console.log(res)
                    alert('Confirmed!');
                } catch (error) {
                    console.error('Error:', error);
                    alert(`Failed to Send! ${error}`);
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
                <form onSubmit={handleSubmit} className="flex justify-center rounded-lg px-6 space-y-3 pb-4 pt-8">
                    <div className="w-full md:w-1/2">
                        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                            Confirm Sign Up
                        </h1>
                        <div className="w-full">
                            <div className="relative">
                                <Input
                                    type='text'
                                    name='userName'
                                    label='User Name'
                                    value={values.userName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                {errors.userName && touched.userName && (
                                    <div className="text-red-500 text-xs">{errors.userName}</div>)}
                            </div>
                            <div className="relative mt-4">
                                <Input
                                    type='text'
                                    name='confirmationCode'
                                    label='Confirmation code'
                                    value={values.confirmationCode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                {errors.confirmationCode && touched.confirmationCode && (
                                    <div className="text-red-500 text-xs">{errors.confirmationCode}</div>)}


                            </div>

                        </div>
                        <div className='mt-2'>
                           < span className="text-sm  text-gray-400 ">
                            If you didn't receive the code, please check your junk or spam mails.
                        </span>
                        </div>

                        <Button
                            className={` ${isSubmitting && 'cursor-not-allowed'} mt-4 w-full text-white`}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Confirm Sign Up {isSubmitting ? <Loader borderColor={'white'}/> :
                            <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50"/>}

                        </Button>

                        <div className="flex h-8 items-end space-x-1 justify-between mt-2" aria-live="polite"
                             aria-atomic="true">

                            <Link to='/login'>
                                <span className="text-sm text-gray-600 hover:underline cursor-pointer">
                                    Already have an account? Log in
                                </span>
                            </Link>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
}
