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
        const schoolExists = await context.prisma.school({ id: schoolId });
        if (!schoolExists) {
            return utils.sendErrorResponse(field, message);
        }

        message = 'Class with this name already exists';
        field = 'name';
        const classNameExist = await context.prisma.school({ id: schoolId }).classes({
            where: {
                name: input['name'],
            },
        });
        if (classNameExist.length) {
            return utils.sendErrorResponse(field, message);
        }

        const level = input['level']['connect']['id'];
        message = 'Class Level does not exist';
        field = 'level';
        const classLevelExists = await context.prisma.school({ id: schoolId }).classLevels({ where: { id: level } });
        if (!classLevelExists.length) {
            return utils.sendErrorResponse(field, message);
        }

        if (input['classTeacher']) {
            const classTeacher = input['classTeacher']['connect']['id'];
            message = 'Teacher does not exist';
            field = 'classTeacher';
            const classTeacherExists = await context.prisma.user({ id: classTeacher });
            if (!classTeacherExists) {
                return utils.sendErrorResponse(field, message);
            }
        }

        const newInput = {
            school: { connect: { id: schoolId } },
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
        return classRoom;
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
        const schoolExists = await context.prisma.school({ id: schoolId });
        if (!schoolExists) {
            return utils.sendErrorResponse(field, message);
        }
        message = 'Class level already exists';
        field = 'levelName';
        const classLevel = input['levelName'];
        const classLevelExists = await context.prisma.school({ id: schoolId }).classLevels({ where: { levelName: classLevel } });
        if (classLevelExists.length) {
            return utils.sendErrorResponse(field, message);
        }

        const newInput = {
            school: { connect: { id: schoolId } },
            ...input,
        };
        const newClassLevel = await context.prisma.createClassLevel(newInput);
        return {
            payload: newClassLevel,
        };
    } catch (error) {
        utils.sendErrorResponse('General', error.message);
    }
};

export default {
    classRoom,
    updateClassRoom,
    addClassLevel,
};
