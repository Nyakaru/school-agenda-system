//@ts-check
import * as yup from 'yup';

export const acceptableClassRoomPayload = yup.object().shape({
    name: yup.string().trim().required('Class name is required'),
    level: yup.object().required('Class level is required'),
    classTeacher: yup.object(),
});

export const acceptableClassLevelPayload = yup.object().shape({
    levelName: yup.string().trim().required('level name is required'),
    description: yup.string(),
});
