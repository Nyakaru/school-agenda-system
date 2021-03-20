//@ts-check
import { utils } from '../../utils';

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const createCountry = async (_, { input }, context, _info) => {
    return await context.prisma.createCountry({ name: input['name'] });
};

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const updateCountry = async (_, input, context, _info) => {
    return await context.prisma.updateCountry({ where: input['where'], data: input['data'] });
};

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const createRegion = async (_, { input }, context, _info) => {
    return await context.prisma.createRegion({ name: input['name'], country: input['country'] }).$fragment(utils.regionFragment);
};

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const updateRegion = async (_, input, context, _info) => {
    return await context.prisma.updateRegion({ where: input['where'], data: input['data'] }).$fragment(utils.regionFragment);
};

export default {
    createCountry,
    updateCountry,
    createRegion,
    updateRegion,
};
