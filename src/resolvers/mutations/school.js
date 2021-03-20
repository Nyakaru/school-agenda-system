//@ts-check
import { utils } from '../../utils';

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */

const school = async (_, { input }, context, _info) => {
    try {
        const error = await utils.checkPayload(utils.acceptableSchoolPayload, input);
        if (error) {
            const { path: field, message } = error;

            return { error: { field, message } };
        }
        let message = 'phone number already exists';
        let field = 'phone';
        const phoneNumber = input['phone'];
        const phonExists = await context.prisma.school({ phone: phoneNumber });
        if (phonExists) {
            return utils.sendErrorResponse(field, message);
        }

        const schoolCode = input['schoolCode'];
        message = 'school with this code exist';
        field = 'schoolCode';
        const schoolCodeExists = await context.prisma.school({ schoolCode: schoolCode });
        if (schoolCodeExists) {
            return utils.sendErrorResponse(field, message);
        }

        const schoolId = input['region']['connect']['id'];
        message = 'Region with that name does not exist';
        field = 'region';
        const regionExists = await context.prisma.region({ id: schoolId });
        if (!regionExists) {
            return utils.sendErrorResponse(field, message);
        }

        const school = await context.prisma.createSchool(input).$fragment(utils.schoolFragment);
        return {
            payload: school,
        };
    } catch (error) {
        utils.sendErrorResponse('General', error.message);
    }
};

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const updateSchool = async (_, input, context, _info) => {
    try {
        const school = await context.prisma.updateSchool({ where: input['where'], data: input['data'] }).$fragment(utils.schoolFragment);
        return {
            payload: school,
        };
    } catch (error) {
        utils.sendErrorResponse('General', error.message);
    }
};

export default {
    school,
    updateSchool,
};
