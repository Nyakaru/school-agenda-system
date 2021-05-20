//@ts-check
import { utils } from '../../utils';

/**
 * Retrieve classm levels associated with a school
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const getClassLevels = async (_, _args, context, _info) => {
    try {
        const classLevels = await context.prisma.school({ id: context.user.school }).classLevels().$fragment(utils.classLevelFragment);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const mappedLevels = classLevels.map(async level => {
            const totalStudentsPromise = level['classRooms'].map(async classRoom => {
                const classStudents = await context.prisma.classroom({ id: classRoom.id }).students();
                return classStudents.length;
            });

            const studentsCounts = await Promise.all(totalStudentsPromise);
            const totalStudents = studentsCounts.reduce(reducer, 0);

            //calaculate total students in class
            const classRooms = level['classRooms'].map(classRoom => {
                classRoom.totalStudents = classRoom.students.length;
                return classRoom;
            });
            const currentLevel = { ...level, totalClassRooms: level['classRooms'].length, totalStudents, classRooms: classRooms };
            return currentLevel;
        });
        const result = await Promise.all(mappedLevels);
        return {
            payload: result,
        };
    } catch (error) {
        console.log({ error });
        utils.sendErrorResponse('General', error.message);
    }
};

export default {
    getClassLevels,
};
