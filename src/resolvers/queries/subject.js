//@ts-check
import { utils } from '../../utils';

/**
 * Retrieve subjects associated with a class
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const getSubjects = async (/** @type {any} */ _, { input }, context, /** @type {any} */ _info) => {
    try {
        return await context.prisma.classroom({ id: input['id'] }).subjects().$fragment(utils.subjectFragment);
    } catch (error) {
        console.log(error);
    }
};

export default {
    getSubjects,
};
