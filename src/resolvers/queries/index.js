//@ts-check
import UserQueries from './users';
import SchoolQueries from './schools';
import CountryQueries from './countries';
import ClassRoomQueries from './classRoom';
import DepartmentQueries from './departments';

export default {
    ...UserQueries,
    ...SchoolQueries,
    ...CountryQueries,
    ...ClassRoomQueries,
    ...DepartmentQueries,
};
