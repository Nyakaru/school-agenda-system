//@ts-check
import UserQueries from './users';
import SchoolQueries from './schools';
import CountryQueries from './countries';

export default {
    ...UserQueries,
    ...SchoolQueries,
    ...CountryQueries,
};
