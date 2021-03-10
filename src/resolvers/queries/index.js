//@ts-check
import UserQueries from './users';
import SchoolQueries from './schools';

export default {
    ...UserQueries,
    ...SchoolQueries,
};
