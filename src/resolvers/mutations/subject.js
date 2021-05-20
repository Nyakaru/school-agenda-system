//@ts-check
import { utils } from '../../utils';

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const addClassSubject = async (_, { input }, context, _info) => {
    try {
        const error = await utils.checkPayload(utils.acceptableClassSubjectPayload, input);
        if (error) {
            const { path: field, message } = error;

            return { error: { field, message } };
        }

        const user = context.user.school;
        const classroom = input['class']['connect']['id'];
        const userId = input['assignee']['connect']['id'];
        const subject = input['subject']['connect']['id'];

        let message = 'Classroom does not exist';
        let field = 'class';
        const classExists = await context.prisma.classroom({ id: classroom });
        if (!classExists) {
            return utils.sendErrorResponse(field, message);
        }

        message = 'Subject does not exist';
        field = 'subject';
        const subjectExists = await context.prisma.school({ id: user }).subjects({ where: { id: subject } });
        if (!subjectExists.length) {
            return utils.sendErrorResponse(field, message);
        }

        message = 'User does not exist';
        field = 'assignee';
        const userExists = await context.prisma.user({ id: userId });
        if (!userExists) {
            return utils.sendErrorResponse(field, message);
        }

        const schoolSubject = await context.prisma.createClassSubject(input).$fragment(utils.subjectFragment);
        return {
            payload: schoolSubject,
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
const addSubject = async (_, { input }, context, _info) => {
    try {
        const error = await utils.checkPayload(utils.acceptableSubjectPayload, input);
        if (error) {
            const { path: field, message } = error;

            return { error: { field, message } };
        }
        const school = input['school']['connect']['id'];
        const name = input['name'];

        let message = 'School does not exist';
        let field = 'school';
        const schoolExists = await context.prisma.school({ id: school });
        if (!schoolExists) {
            return utils.sendErrorResponse(field, message);
        }

        message = 'Subject already exists in this school';
        field = 'name';
        const subjectExists = await context.prisma.school({ id: school }).subjects({ where: { name: name } });
        if (subjectExists.length) {
            return utils.sendErrorResponse(field, message);
        }

        const subject = await context.prisma.createSubject(input).$fragment(utils.schoolSubjectFragment);
        return {
            payload: subject,
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
const updateSubject = async (_, input, context, _info) => {
    try {
        const subject = await context.prisma.updateSubject({ where: input['where'], data: input['data'] }).$fragment(utils.schoolSubjectFragment);
        return {
            payload: subject,
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
const updateClassSubject = async (_, input, context, _info) => {
    try {
        const subject = await context.prisma.updateClassSubject({ where: input['where'], data: input['data'] }).$fragment(utils.subjectFragment);
        return {
            payload: subject,
        };
    } catch (error) {
        utils.sendErrorResponse('General', error.message);
    }
};

export default {
    addSubject,
    addClassSubject,
    updateSubject,
    updateClassSubject,
};
