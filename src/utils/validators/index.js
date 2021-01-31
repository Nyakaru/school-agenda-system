//@ts-check
import { acceptableUserPayload } from './auth';
import { acceptableSchoolPayload } from './school';

const checkPayload = async (schema, payload) => {
    try {
        await schema.validate(payload);
    } catch (error) {
        return error;
    }
};

export default { acceptableUserPayload, acceptableSchoolPayload, checkPayload };
