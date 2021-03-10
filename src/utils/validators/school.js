import * as yup from 'yup';

export const acceptableSchoolPayload = yup.object().shape({
    name: yup.string().trim().min(3, 'Username should be more than 3 characters').max(12, 'Username should be less than 12 characters').required('Username is required'),
    email: yup.string().trim().email('Invalid email format'),
    region: yup.object().required('Region is required'),
    address: yup.string().trim(),
    level: yup.string().trim(),
    phone: yup.string().trim().min(13, 'Phone number have 13 numbers').max(13, 'Phone number have 13 numbers').required('Phone number is required'),
    schoolCode: yup.string().trim().required('School code is required'),
    imageUrl: yup.string().trim(),
});
