//@ts-check
import { utils } from '../../utils';

/**
 * Retrieve all countries
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const countries = async (_, _args, context, _info) => {
    try {
        return await context.prisma.countries().$fragment(utils.countryFragment);
    } catch (error) {
        console.log(error);
    }
};

/**
 * Retrieve all regions in a country
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const regions = async (_, { input }, context, _info) => {
    try {
        return await context.prisma.regions({ where: { country: { id: input['id'] } } });
    } catch (error) {
        console.log(error);
    }
};

export default {
    countries,
    regions,
};
