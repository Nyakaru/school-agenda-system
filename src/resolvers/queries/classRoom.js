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
            const currentLevel = { ...level, totalClassRooms: level['classRooms'].length, totalStudents, classRooms: level['classRooms'] };
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
