//@ts-check
import UserMutations from './users';
import SchoolMutations from './school';

export default {
    ...UserMutations,
    ...SchoolMutations,
};
