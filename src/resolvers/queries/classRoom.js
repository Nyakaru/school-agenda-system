//@ts-check
import { utils } from '../../utils';

/**
 * Retrieve a single classroom in a school
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const getSingleClassRoom = async (_, { input }, context, _info) => {
    try {
        const data = await context.prisma.classroom({ id: input['id'] }).$fragment(utils.classRoomFragment);
        const response = { ...data, totalStudents: data?.students?.length };
        return response;
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
        const classLevels = await context.prisma.school({ id: context.user.school }).classLevels().$fragment(utils.classLevelFragment);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const mappedLevels = classLevels.map(async level => {
            const totalStudentsPromise = level['classRooms'].map(async classRoom => {
                const classStudents = await context.prisma.classroom({ id: classRoom.id }).students();
                return classStudents.length;
            });

            const studentsCounts = await Promise.all(totalStudentsPromise);
            const totalStudents = studentsCounts.reduce(reducer, 0);
            const currentLevel = { ...level, totalClassRooms: level['classRooms'].length, totalStudents };
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

/**
 * Retrieve all classrooms in a school
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const getSchoolClassrooms = async (_, { input }, context, _info) => {
    const school = context.user.school;
    try {
        if (input && input['id']) {
            const details = await context.prisma
                .school({ id: school })
                .classes({
                    where: {
                        level: {
                            id: input['id'],
                        },
                    },
                })
                .$fragment(utils.classRoomFragment);
            return details;
        }
        const classes = await context.prisma.school({ id: school }).classes().$fragment(utils.classRoomFragment);
        return classes;
    } catch (error) {
        console.log(error);
    }
};

export default {
    getSingleClassRoom,
    getClassLevels,
    getSchoolClassrooms,
};
