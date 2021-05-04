//@ts-check
import { utils } from '../../utils';

/**
 * Retrieve classrooms associated with a school
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const getClassRooms = async (_, _args, context, _info) => {
    try {
        return await context.prisma.classrooms({ where: { school: { schoolCode: context.user.school } } }).$fragment(utils.classRoomFragment);
    } catch (error) {
        console.log(error);
    }
};

/**
 * Retrieve classm levels associated with a school
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const getClassLevels = async (_, _args, context, _info) => {
    try {
        const classLevels = await context.prisma.school({ schoolCode: context.user.school }).classLevels();
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const mappedLevels = classLevels.map(async level => {
            const classRooms = await context.prisma.classLevel({ id: level.id }).classRooms();
            const totalStudentsPromise = classRooms.map(async classRoom => {
                const classStudents = await context.prisma.classroom({ id: classRoom.id }).students();
                return classStudents.length;
            });

            const studentsCounts = await Promise.all(totalStudentsPromise);
            const totalStudents = studentsCounts.reduce(reducer, 0);
            const currentLevel = { ...level, totalClassRooms: classRooms.length, totalStudents };
            return currentLevel;
        });
        return await Promise.all(mappedLevels);
    } catch (error) {
        console.log(error);
    }
};

export default {
    getClassRooms,
    getClassLevels,
};
