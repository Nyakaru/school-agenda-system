//@ts-check
import UserQueries from './users';
import SchoolQueries from './schools';
import CountryQueries from './countries';
import ClassRoomQueries from './classRoom';
import Subjectqueries from './subject';

export default {
    ...UserQueries,
    ...SchoolQueries,
    ...CountryQueries,
    ...ClassRoomQueries,
    ...Subjectqueries,
};
