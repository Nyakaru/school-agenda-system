//@ts-check
import * as yup from 'yup';

export const acceptableSubjectPayload = yup.object().shape({
    name: yup.string().trim().required('Subject name is required'),
    class: yup.object().required('Class is required'),
    assignee: yup.object(),
});
