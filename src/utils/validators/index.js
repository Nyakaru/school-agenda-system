//@ts-check
import { acceptableUserPayload } from './user';
import { acceptableSchoolPayload } from './school';
import { acceptableClassRoomPayload } from './classRoom';

export const checkPayload = async (schema, payload) => {
    try {
        await schema.validate(payload);
    } catch (error) {
        return error;
    }
};

export default { acceptableUserPayload, acceptableSchoolPayload, acceptableClassRoomPayload, checkPayload };
