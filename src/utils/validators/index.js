//@ts-check
import { acceptableUserPayload } from './user';
import { acceptableSchoolPayload } from './school';
import { acceptableClassRoomPayload, acceptableClassLevelPayload } from './classRoom';
import { acceptableSubjectPayload, acceptableClassSubjectPayload } from './subject';
import { acceptableStudentPayload } from './student';
import { acceptableTimetablePayload } from './timetable';

export const checkPayload = async (schema, payload) => {
    try {
        await schema.validate(payload);
    } catch (error) {
        return error;
    }
};

export default {
    acceptableUserPayload,
    acceptableSchoolPayload,
    acceptableClassRoomPayload,
    acceptableSubjectPayload,
    acceptableStudentPayload,
    acceptableClassLevelPayload,
    acceptableClassSubjectPayload,
    acceptableTimetablePayload,
    checkPayload,
};
