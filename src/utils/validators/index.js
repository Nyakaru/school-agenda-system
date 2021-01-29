//@ts-check
import * as yup from 'yup';

const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

export const acceptableUserPayload = yup.object().shape({
    username: yup.string().trim().min(3, 'Username should be more than 3 characters').max(12, 'Username should be less than 12 characters').required('Username is required'),
    email: yup.string().trim().email('Invalid email format'),
    school: yup.string().trim().required('School name is required'),
    role: yup.string().trim(),
    phone: yup.string().trim().min(13, 'Phone number have 13 numbers').max(13, 'Phone number have 13 numbers'),
    password: yup
        .string()
        .trim()
        .min(6, 'Password should be more than 6 charcaters')
        .matches(passwordExp, 'Requires at least 1 number, 1 uppercase, 1 lowercase, and 1 special character')
        .required('Password is required'),
});

export const checkUserPayload = async (schema, payload) => {
    try {
        await schema.validate(payload);
    } catch (error) {
        return error;
    }
};
