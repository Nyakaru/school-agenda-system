//@ts-check
import * as yup from 'yup';

export const acceptableStudentPayload = yup.object().shape({
    firstName: yup.string().trim().min(3, 'First name should be more than 3 characters').required('First name is required'),
    lastName: yup.string().trim().min(3, 'Last name should be more than 3 characters').required('Last name is required'),
    middleName: yup.string().trim().min(3, 'Last name should be more than 3 characters'),
    admNo: yup.string().trim().required('Student level is required'),
    class: yup.object(),
    school: yup.object(),
    gender: yup.string().trim(),
});
