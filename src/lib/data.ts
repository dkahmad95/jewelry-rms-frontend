'use client'
import  { object, string, number, array,ref } from "Yup";

export interface CreateSupplier {
    name: string;
    phoneNumber: string;
    cashBalance: number;
    ramliBalance: number;
    silverBalance: number;
}
export interface Supplier {
    id: number;
    name: string;
    phoneNumber: string;
    createdDate: string;
    cashBalance: number;
    ramliBalance: number;
    silverBalance: number;
}

export interface UpdatedSupplier {
    name?: string;
    phoneNumber?: string;
    createdDate?: string;
    cashBalance?: number;
    ramliBalance?: number;
    silverBalance?: number;
}

export const CreateSupplierSchema = object().shape({
    name: string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters")
        .required("Name is required"),
    phoneNumber: string()
        .min(8, "Phone number must be at least 8 digits")
        .max(20, "Phone number must be 20 digits")
        .required("Phone number is required"),
    cashBalance: number()
        .typeError("Cash balance must be a number")
        .nullable()
        .required("Cash Balance is required"),
    ramliBalance: number()
        .min(-1000000, "Ramli balance cannot be less than -1,000,000")
        .max(1000000, "Ramli balance cannot exceed 1,000,000")
        .typeError("Ramli balance must be a number")
        .nullable()
        .required("Ramli Balance is required"),
    silverBalance: number()
        .min(-1000000, "Silver balance cannot be less than -1,000,000")
        .max(1000000, "Silver balance cannot exceed 1,000,000")
        .typeError("Silver balance must be a number")
        .nullable()
        .required("Silver Balance is required"),
});

export const UpdateSupplierSchema = object().shape({
    name: string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters"),
    phoneNumber: string()
        .min(8, "Phone number must be at least 8 digits")
        .max(20, "Phone number must be 20 digits"),
    cashBalance: number()
        .typeError("Cash balance must be a number")
        .nullable(),
    ramliBalance: number()
        .min(-1000000, "Ramli balance cannot be less than -1,000,000")
        .max(1000000, "Ramli balance cannot exceed 1,000,000")
        .typeError("Ramli balance must be a number")
        .nullable(),
    silverBalance: number()
        .min(-1000000, "Silver balance cannot be less than -1,000,000")
        .max(1000000, "Silver balance cannot exceed 1,000,000")
        .typeError("Silver balance must be a number")
        .nullable(),
});

export const TransactionSchema = array().of(
    object().shape({
        item: string().required("Item is required"),
        weight: number()
            .min(0, "Weight cannot be negative")
            .required("Weight is required"),
        desc: string(),
        unitPrice: number()
            .min(0, "Unit price cannot be negative")
            .required("Unit price is required"),
    })
);

export const LoginFormSchema = object().shape({
    username: string()
        .trim()  // Remove leading/trailing whitespace
        .required("Username is required"),
    password: string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long"),
});

export const    RegistrationSchema = object().shape({
    _email: string().email('Invalid email format').required('Email is required'),
    _username: string().trim().required('Username is required'),
    _name: string().trim().required('Name is required'),
    _country: string().required('Country is required'),
    _city: string().required('City is required'),
    _phoneNumber: string().matches(/^\d+$/, 'Phone number must be numeric')
        .min(8, 'Password must be at least 8 characters long')
        .required('Phone number is required'),
    _password: string()
        .min(6, 'Password must be at least 6 characters long')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{}|;:',.<>?])[A-Za-z\d!@#$%^&*()_+[\]{}|;:',.<>?]{6,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol'
        )
        .required('Password is required'),
});

export const ConfirmSignUpByEmailSchema = object().shape({
    userName: string()
        .trim()
        .required("User Name is required"),
    confirmationCode: string()
        .required("Confirmation code is required"),
});


export const ForgetPasswordSchemaUsername = object().shape({
    username: string()
        .trim()
        .required("Username is required"),

});

export const ForgetPasswordSchema = object().shape({
    newPassword: string()
        .required("New password is required")
        .min(6, "Password must be at least 6 characters long"),
    confirmPassword: string()
        .required("Confirm password is required")
        .oneOf([ref('newPassword')], 'Passwords must match')
        // Provide a default value of '' if confirmPassword is null
        .default(''),
    confirmationCode: string()
        .required("Confirmation code is required"),
});
