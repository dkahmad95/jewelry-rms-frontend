'use client'
import * as Yup from "Yup";



export const CreateSupplierSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters")
        .required("Name is required"),
    phoneNumber: Yup.string()
        .min(8, "Phone number must be at least 8 digits")
        .max(20, "Phone number must be 20 digits")
        .required("Phone number is required"),
    cashBalance: Yup.number()
        .typeError("Cash balance must be a number")
        .nullable()
        .required("Cash Balance is required"),
    ramliBalance: Yup.number()
        .min(-1000000, "Ramli balance cannot be less than -1,000,000")
        .max(1000000, "Ramli balance cannot exceed 1,000,000")
        .typeError("Ramli balance must be a number")
        .nullable()
        .required("Ramli Balance is required"),
    silverBalance: Yup.number()
        .min(-1000000, "Silver balance cannot be less than -1,000,000")
        .max(1000000, "Silver balance cannot exceed 1,000,000")
        .typeError("Silver balance must be a number")
        .nullable()
        .required("Silver Balance is required"),
});

export const UpdateSupplierSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters"),
    phoneNumber: Yup.string()
        .min(8, "Phone number must be at least 8 digits")
        .max(20, "Phone number must be 20 digits"),
    cashBalance: Yup.number()
        .typeError("Cash balance must be a number")
        .nullable(),
    ramliBalance: Yup.number()
        .min(-1000000, "Ramli balance cannot be less than -1,000,000")
        .max(1000000, "Ramli balance cannot exceed 1,000,000")
        .typeError("Ramli balance must be a number")
        .nullable(),
    silverBalance: Yup.number()
        .min(-1000000, "Silver balance cannot be less than -1,000,000")
        .max(1000000, "Silver balance cannot exceed 1,000,000")
        .typeError("Silver balance must be a number")
        .nullable(),
});

export const TransactionSchema = Yup.array().of(
    Yup.object().shape({
        item: Yup.string().required("Item is required"),
        weight: Yup.number()
            .min(0, "Weight cannot be negative")
            .required("Weight is required"),
        desc: Yup.string(),
        unitPrice: Yup.number()
            .min(0, "Unit price cannot be negative")
            .required("Unit price is required"),
    })
);

export const LoginFormSchema = Yup.object().shape({
    username: Yup.string()
        .trim()  // Remove leading/trailing whitespace
        .required("Username is required"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long"),
});

export const    RegistrationSchema = Yup.object().shape({
    _email: Yup.string().email('Invalid email format').required('Email is required'),
    _username: Yup.string().trim().required('Username is required'),
    _name: Yup.string().trim().required('Name is required'),
    _country: Yup.string().required('Country is required'),
    _city: Yup.string().required('City is required'),
    _phoneNumber: Yup.string().matches(/^\d+$/, 'Phone number must be numeric')
        .min(8, 'Password must be at least 8 characters long')
        .required('Phone number is required'),
    _password: Yup.string()
        .min(6, 'Password must be at least 6 characters long')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{}|;:',.<>?])[A-Za-z\d!@#$%^&*()_+[\]{}|;:',.<>?]{6,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol'
        )
        .required('Password is required'),
});

export const ConfirmSignUpByEmailSchema = Yup.object().shape({
    userName: Yup.string()
        .trim()
        .required("User Name is required"),
    confirmationCode: Yup.string()
        .required("Confirmation code is required"),
});


export const ForgetPasswordSchemaUsername = Yup.object().shape({
    username: Yup.string()
        .trim()
        .required("Username is required"),

});

export const ForgetPasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
        .required("New password is required")
        .min(6, "Password must be at least 6 characters long"),
    confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref('newPassword')], 'Passwords must match')
        // Provide a default value of '' if confirmPassword is null
        .default(''),
    confirmationCode: Yup.string()
        .required("Confirmation code is required"),
});
