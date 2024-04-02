import {  useState } from "react";
import { Button } from "@/UI-Components/sharedComponents/button";
import { Input } from "@/UI-Components/sharedComponents/input";
import { AuthService } from "@/lib/auth.service";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import {ForgetPasswordSchema, ForgetPasswordSchemaUsername} from "@/lib/data";
import { lusitana } from "@/UI-Components/sharedComponents/fonts";
import { EyeIcon } from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import Loader from "@/UI-Components/sharedComponents/Loader";
import {ArrowRightIcon} from "@heroicons/react/20/solid";

const authService = new AuthService();

export default function ForgetPasswordForm() {
    const [username, setUsername] = useState('');
    const [usernameConfirmed, setUsernameConfirmed] = useState(true );
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const navigator = useNavigate();


    return (
        <>
            <Formik
                initialValues={{ username: '' }}
                validationSchema={ForgetPasswordSchemaUsername}
                onSubmit={ async (values, { setSubmitting }) => {
                    try {
                        setSubmitting(true);
                        console.log("username",values)
                        setUsername(values.username)
                       const res= await authService.forgetPassword(values.username);
                        console.log("res",res)
                        setUsernameConfirmed(true);
                    } catch (error) {
                        console.error('Error:', error);
                        alert(`Failed to Send! ${error}`);
                    }finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ values, errors, touched, handleBlur, handleSubmit, isSubmitting, handleChange }) => (
                    <form onSubmit={handleSubmit} className="flex justify-center rounded-lg px-6 space-y-3 pb-4 pt-8">
                        <div className=" w-full md:w-1/2 flex flex-col ">
                            <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                                Please confirm user name to continue.
                            </h1>

                            <Input
                                type='text'
                                name='username'
                                label='Enter User Name'
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            {errors.username && touched.username && (
                                <div className="text-red-500 text-xs">{errors.username}</div>
                            )}
                            <div
                                className="flex h-8 items-end space-x-1  justify-between mt-2"
                                aria-live="polite"
                                aria-atomic="true"
                            >
                                <button

                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                  {isSubmitting? <Loader borderColor={'blue'}/>: <span className="text-sm text-gray-600 underline  ">Send confirmation code to my mail</span>  }


                                </button>
                            </div>
                    </div>
                    </form>
                    )}
            </Formik>

            {usernameConfirmed && (
            <Formik
                initialValues={{confirmationCode: '', newPassword: '', confirmPassword: '' }}
                    validationSchema={ForgetPasswordSchema}
                    onSubmit={ async (values, { setSubmitting }) => {
                        try {
                            setSubmitting(true);
                            console.log("values",values)
                            const res1 = await authService.setNewPassword(username,values.confirmationCode, values.newPassword);
                            console.log("username",username, values.confirmationCode, values.newPassword)
                            console.log("res1",res1)
                            alert('The password changed successfully')
                            navigator("/");
                            navigator(0);

                        } catch (error) {
                            console.error('Error:', error);
                            alert(`Failed to Rest! ${error}`);
                        }
                        finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ values, errors, touched,  handleBlur, handleSubmit,handleChange, isSubmitting }) => (
                        <form onSubmit={handleSubmit} className="flex justify-center   rounded-lg px-6 space-y-3 pb-4 pt-8">
                            <div className=" w-full md:w-1/2 flex flex-col ">

                                <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                                    Create a new password.
                                </h1>
                                <span className="text-sm text-gray-400 ">
                              If you didn't receive the code, please check your junk or spam mails.
                            </span>
                                <Input
                                    type='text'
                                    name='confirmationCode'
                                    label='Confirmation Code'
                                    value={values.confirmationCode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                                {errors.confirmationCode && touched.confirmationCode && (
                                    <div className="text-red-500 text-xs">{errors.confirmationCode}</div>
                                )}

                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        name='newPassword'
                                        label='Enter a new password'
                                        value={values.newPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    <EyeIcon
                                        className={` cursor-pointer absolute right-3 top-3/4 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${showPassword ? 'text-blue-500' : ''}`}
                                        onClick={() => setShowPassword(!showPassword)}/>
                                </div>
                                {errors.newPassword && touched.newPassword && (
                                    <div className="text-red-500 text-xs">{errors.newPassword}</div>
                                )}

                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        name='confirmPassword'
                                        label='Confirm Password'
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    <EyeIcon
                                        className={` cursor-pointer absolute right-3 top-3/4  h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${showPassword ? 'text-blue-500' : ''}`}
                                        onClick={() => setShowPassword(!showPassword)}/>
                                </div>
                                {errors.confirmPassword && touched.confirmPassword && (
                                    <div className="text-red-500 text-xs">{errors.confirmPassword}</div>
                                )}


                                <Button
                                    className='text-white mt-4'
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Reset Password {isSubmitting? <Loader borderColor={'white'}/>:<ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50"/>}
                                </Button>
                                <div
                                    className="flex h-8 items-end space-x-1  justify-end mt-2"
                                    aria-live="polite"
                                    aria-atomic="true"
                                >


                                    <Link to={'/login'}>
                            <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                              login
                            </span>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            )}
        </>
    );
}
