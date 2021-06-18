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
        const subject = input['subject']['connect']['id'];

        let message = 'Classroom does not exist';
        let field = 'class';
        const classExists = await context.prisma.classroom({ id: classroom });
        if (!classExists) {
            return utils.sendErrorResponse(field, message);
        }

        message = 'Subject exists in this class';
        field = 'classSubject';
        const classSubjectExists = await context.prisma.classroom({ id: classroom }).subjects({
            where: {
                id: subject,
            },
        });
        if (classSubjectExists.length) {
            return utils.sendErrorResponse(field, message);
        }

        if (input['assignee']) {
            message = 'User does not exist';
            field = 'assignee';
            const userExists = await context.prisma.user({ id: input['assignee']['connect']['id'] });
            if (!userExists) {
                return utils.sendErrorResponse(field, message);
            }
        }

        message = 'Subject does not exist in this school';
        field = 'subject';
        const subjectExists = await context.prisma.school({ id: user }).subjects({ where: { id: subject } });
        if (!subjectExists.length) {
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
        const subjectCode = input['subjectCode'];
        const subjectAbv = input['subjectAbv'];

        let message = 'School does not exist';
        let field = 'school';
        const schoolExists = await context.prisma.school({ id: school });
        if (!schoolExists) {
            return utils.sendErrorResponse(field, message);
        }

        if (input['department']) {
            message = 'Department does not exist';
            field = 'department';
            const departments = await context.prisma.school({ id: school }).department();

            const depExists = departments.filter(item => item?.id == input['department']['connect']['id']);
            if (!depExists.length) {
                return utils.sendErrorResponse(field, message);
            }
        }

        message = 'Subject name already exists';
        field = 'name';
        const subjectExists = await context.prisma.school({ id: school }).subjects({ where: { name: name } });
        if (subjectExists.length) {
            return utils.sendErrorResponse(field, message);
        }

        message = 'Subject code already exists';
        field = 'subjectCode';
        const codeExists = await context.prisma.school({ id: school }).subjects({ where: { subjectCode: subjectCode } });
        if (codeExists.length) {
            return utils.sendErrorResponse(field, message);
        }

        message = 'Subject abv already exists';
        field = 'abv';
        const abvExists = await context.prisma.school({ id: school }).subjects({ where: { subjectAbv: subjectAbv } });
        if (abvExists.length) {
            return utils.sendErrorResponse(field, message);
        }

        const subject = await context.prisma.createSubject(input).$fragment(utils.schoolSubjectFragment);
        return {
            payload: subject,
        };
    } catch (error) {
        console.log({ error });
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
