//@ts-check
import { utils } from '../../utils';

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const addStudent = async (_, { input }, context, _info) => {
    try {
        const error = await utils.checkPayload(utils.acceptableStudentPayload, input);
        if (error) {
            const { path: field, message } = error;

            return { error: { field, message } };
        }
        const schoolId = context.user.school;
        const admNo = input['admNo'];

        let message = 'Your school is not registered';
        let field = 'school';
        const schoolExists = await context.prisma.school({ id: schoolId });
        console.log({ schoolExists });
        if (!schoolExists) {
            return utils.sendErrorResponse(field, message);
        }

        if (input['class']) {
            const classroom = input['class']['connect']['id'];
            const classExists = await context.prisma.school({ id: schoolId }).classes({ where: { id: classroom } });
            if (!classExists.length) {
                message = 'Classroom does not exist';
                field = 'class';
                return utils.sendErrorResponse(field, message);
            }
        }

        const studentExists = await context.prisma.school({ id: schoolId }).students({
            where: {
                admNo: admNo,
            },
        });
        if (studentExists.length) {
            message = 'Student with that admNo already exists in this school';
            field = 'admNo';
            return utils.sendErrorResponse(field, message);
        }

        const newInput = {
            school: { connect: { id: schoolId } },
            ...input,
        };
        const student = await context.prisma.createStudent(newInput).$fragment(utils.studentFragment);
        return {
            payload: student,
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
const updateStudent = async (_, input, context, _info) => {
    try {
        const student = await context.prisma.updateStudent({ where: input['where'], data: input['data'] }).$fragment(utils.studentFragment);
        return {
            payload: student,
        };
    } catch (error) {
        utils.sendErrorResponse('General', error.message);
    }
};

export default {
    addStudent,
    updateStudent,
};
