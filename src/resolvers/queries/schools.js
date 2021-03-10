//@ts-check
import { utils } from '../../utils';

/**
 * Retrieve all schools
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const schools = async (_, _args, context, _info) => {
    try {
        return await context.prisma.schools().$fragment(utils.schoolFragment);
    } catch (error) {
        console.log(error);
    }
};

export default {
    schools,
};
