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

export default {
    getClassRooms,
};
