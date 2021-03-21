//@ts-check
import { utils } from '../../utils';

/**
 * Retrieve all users
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const users = async (_, _args, context, _info) => {
    try {
        return await context.prisma.users().$fragment(utils.userFragment);
    } catch (error) {
        console.log(error);
    }
};

/**
 * Retrieve all users associated with currently logged in admin
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const schoolUsers = async (_, _args, context, _info) => {
    try {
        const users = await context.prisma.users({ where: { school: { schoolCode: context.user.school } } }).$fragment(utils.userFragment);
        return users;
    } catch (error) {
        console.log(error);
    }
};

export default {
    users,
    schoolUsers,
};
