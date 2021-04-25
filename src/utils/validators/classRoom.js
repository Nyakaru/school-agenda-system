//@ts-check
import * as yup from 'yup';

export const acceptableClassRoomPayload = yup.object().shape({
    name: yup.string().trim().required('Class name is required'),
    level: yup.string().trim().required('Class level is required'),
    classTeacher: yup.object(),
});
