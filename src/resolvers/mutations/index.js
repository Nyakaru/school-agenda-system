//@ts-check
import UserMutations from './users';
import SchoolMutations from './school';
import CountryMutations from './countries';
import ClassRoomMutations from './classRoom';
import SubjectMutations from './subject';
import StudentMutations from './student';
import TimetableMutations from './timeTable';

export default {
    ...UserMutations,
    ...SchoolMutations,
    ...CountryMutations,
    ...ClassRoomMutations,
    ...SubjectMutations,
    ...StudentMutations,
    ...TimetableMutations,
};
