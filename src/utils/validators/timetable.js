//@ts-check
import * as yup from 'yup';

export const acceptableTimetablePayload = yup.object().shape({
    class: yup.object(),
    teacher: yup.object(),
    type: yup.string().trim().required('Type is required'),
    weekday: yup.string().trim(),
    start: yup.string().trim(),
    end: yup.string().trim(),
    school: yup.object(),
    event: yup.string().trim(),
    subject: yup.object(),
});
