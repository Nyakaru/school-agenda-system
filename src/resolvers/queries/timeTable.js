//@ts-check
import { utils } from '../../utils';

/**
 * Retrieve timetable of a single class
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const getClasstimeTable = async (_, _input, context, _info) => {
    const user = context.user.school;

    try {
        const response = await context.prisma.timeTables({ where: { school: { id: user } } }).$fragment(utils.timetableFragment);
        const result = response.map(item => ({
            ...item,
            title: item?.['class']?.['name'] || item?.event,
            allDay: item?.type == 'ALLDAY' ? true : false,
            resourceId: item?.['class']?.['id'] || item?.event,
        }));

        return {
            payload: result,
        };
    } catch (error) {
        console.log(error);
        utils.sendErrorResponse('General', error.message);
    }
};

export default {
    getClasstimeTable,
};
