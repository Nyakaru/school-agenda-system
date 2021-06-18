//@ts-check
import * as yup from 'yup';

export const acceptableSubjectPayload = yup.object().shape({
    name: yup.string().trim().required('Subject name is required'),
    school: yup.object().required('School is required'),
    subjectCode: yup.string().trim(),
    subjectAbv: yup.string().trim(),
    status: yup.string().trim(),
    department: yup.object(),
});

export const acceptableClassSubjectPayload = yup.object().shape({
    subject: yup.object().required('Subject is required'),
    assignee: yup.object(),
    class: yup.object().required('Class is required'),
});
