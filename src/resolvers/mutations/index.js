//@ts-check
import UserMutations from './users';
import SchoolMutations from './school';
import CountryMutations from './countries';
import ClassRoomMutations from './classRoom';

export default {
    ...UserMutations,
    ...SchoolMutations,
    ...CountryMutations,
    ...ClassRoomMutations,
};
