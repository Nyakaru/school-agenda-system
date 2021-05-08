import * as yup from 'yup';

export const acceptableSchoolPayload = yup.object().shape({
    name: yup.string().trim().min(3, 'School name should be more than 3 characters').required('School name is required'),
    email: yup.string().trim().email('Invalid email format'),
    region: yup.object().required('Region is required'),
    address: yup.string().trim(),
    phone: yup.string().trim().min(11, 'Phone number have 11 to 13 numbers').max(13, 'Phone number have 11 to 13 numbers').required('Phone number is required'),
    schoolCode: yup.string().trim().required('School code is required'),
    imageUrl: yup.string().trim(),
});
