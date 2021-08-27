//@ts-check
import UserQueries from './users';
import SchoolQueries from './schools';
import CountryQueries from './countries';
import ClassRoomQueries from './classRoom';
import DepartmentQueries from './departments';
import TimetableQueries from './timeTable';

export default {
    ...UserQueries,
    ...SchoolQueries,
    ...CountryQueries,
    ...ClassRoomQueries,
    ...DepartmentQueries,
    ...TimetableQueries,
};
