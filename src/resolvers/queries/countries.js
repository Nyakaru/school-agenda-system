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

export default {
    countries,
};
