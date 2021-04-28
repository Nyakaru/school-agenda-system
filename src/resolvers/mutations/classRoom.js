//@ts-check
import { utils } from '../../utils';

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */

const classRoom = async (_, { input }, context, _info) => {
    try {
        const error = await utils.checkPayload(utils.acceptableClassRoomPayload, input);
        if (error) {
            const { path: field, message } = error;

            return { error: { field, message } };
        }

        const schoolId = context.user.school;
        let message = 'School with that name does not exist';
        let field = 'school';
        const schoolExists = await context.prisma.school({ schoolCode: schoolId });
        if (!schoolExists) {
            return utils.sendErrorResponse(field, message);
        }
        message = 'Class with this name already exists';
        field = 'name';
        const classNameExist = await context.prisma.classroom({ name: input['name'] });
        if (classNameExist) {
            console.log('exist');
            return utils.sendErrorResponse(field, message);
        }

        const newInput = {
            school: { connect: { schoolCode: schoolId } },
            ...input,
        };
        const classRoom = await context.prisma.createClassroom(newInput).$fragment(utils.classRoomFragment);
        return {
            payload: classRoom,
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
const updateClassRoom = async (_, input, context, _info) => {
    try {
        const classRoom = await context.prisma.updateClassroom({ where: input['where'], data: input['data'] }).$fragment(utils.classRoomFragment);
        return {
            payload: classRoom,
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

const addClassLevel = async (_, { input }, context, _info) => {
    try {
        const error = await utils.checkPayload(utils.acceptableClassLevelPayload, input);
        if (error) {
            const { path: field, message } = error;

            return { error: { field, message } };
        }

        const schoolId = context.user.school;
        let message = 'School with that name does not exist';
        let field = 'school';
        const schoolExists = await context.prisma.school({ schoolCode: schoolId });
        if (!schoolExists) {
            return utils.sendErrorResponse(field, message);
        }
        message = 'Class level already exists';
        field = 'levelName';
        const classLevel = input['levelName'];
        const classLevelExists = await context.prisma.school({ schoolCode: schoolId }).classLevels({ where: { levelName: classLevel } });
        if (classLevelExists.length) {
            return utils.sendErrorResponse(field, message);
        }

        const newInput = {
            school: { connect: { schoolCode: schoolId } },
            ...input,
        };
        const newClassLevel = await context.prisma.createClassLevel(newInput).$fragment(utils.classLevelFragment);
        return {
            payload: newClassLevel,
        };
    } catch (error) {
        console.log('twende kazi', error);

        utils.sendErrorResponse('General', error.message);
    }
};

export default {
    classRoom,
    updateClassRoom,
    addClassLevel,
};
