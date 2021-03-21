//@ts-check
import UserMutations from './users';
import SchoolMutations from './school';
import CountryMutations from './countries';

export default {
    ...UserMutations,
    ...SchoolMutations,
    ...CountryMutations,
};
