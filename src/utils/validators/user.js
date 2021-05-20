import * as yup from 'yup';

const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

export const acceptableUserPayload = yup.object().shape({
    firstName: yup.string().trim().min(3, 'First name should be more than 3 characters').required('First name is required'),
    lastName: yup.string().trim().min(3, 'Last name should be more than 3 characters').required('Last name is required'),
    middleName: yup.string().trim().min(3, 'Middle name should be more than 3 characters'),
    email: yup.string().trim().email('Invalid email format'),
    school: yup.object().required('School is required'),
    gender: yup.object(),
    role: yup.string().trim(),
    phone: yup.string().trim().min(11, 'Phone number have 11 to 13 numbers').max(13, 'Phone number have 11 to 13 numbers').required('Phone number is required'),
    password: yup
        .string()
        .trim()
        .min(6, 'Password should be more than 6 charcaters')
        .matches(passwordExp, 'Requires at least 1 number, 1 uppercase, 1 lowercase, and 1 special character')
        .required('Password is required'),
});
