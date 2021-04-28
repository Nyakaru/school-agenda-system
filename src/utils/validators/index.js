//@ts-check
import { acceptableUserPayload } from './user';
import { acceptableSchoolPayload } from './school';
import { acceptableClassRoomPayload, acceptableClassLevelPayload } from './classRoom';
import { acceptableSubjectPayload } from './subject';
export const checkPayload = async (schema, payload) => {
    try {
        await schema.validate(payload);
    } catch (error) {
        return error;
    }
};

export default { acceptableUserPayload, acceptableSchoolPayload, acceptableClassRoomPayload, acceptableSubjectPayload, acceptableClassLevelPayload, checkPayload };
