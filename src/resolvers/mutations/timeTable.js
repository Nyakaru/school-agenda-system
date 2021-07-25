//@ts-check
import { utils } from '../../utils';

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const addClassTimetable = async (_, { input }, context, _info) => {
    let timeTableList = [];
    const user = context.user.school;

    for (const item of input) {
        try {
            const error = await utils.checkPayload(utils.acceptableTimetablePayload, item);
            if (error) {
                const { path: field, message } = error;

                return {
                    error: {
                        field,
                        message,
                    },
                };
            }
            const classroom = item?.['class']?.['connect']?.['id'];
            const teacher = item?.['teacher']?.['connect']?.['id'];
            const subject = item?.['subject']?.['connect']?.['id'];

            if (classroom) {
                const message = 'Class does not exist';
                const field = 'class';
                const classExists = await context.prisma.classroom({
                    id: classroom,
                });
                if (!classExists) {
                    return utils.sendErrorResponse(field, message);
                }
            }

            if (teacher) {
                const message = 'Teacher does not exist';
                const field = 'teacher';
                const teacherExists = await context.prisma.user({
                    id: teacher,
                });
                if (!teacherExists) {
                    return utils.sendErrorResponse(field, message);
                }
            }

            if (subject) {
                const message = 'Subject does not exist';
                const field = 'subject';
                const subjectExists = await context.prisma.classSubject({
                    id: subject,
                });
                if (!subjectExists) {
                    return utils.sendErrorResponse(field, message);
                }
            }
            const school = { connect: { id: user } };
            const request = { ...item, school: school };

            const timeTable = await context.prisma.createTimeTable(request).$fragment(utils.timetableFragment);
            timeTableList.push(timeTable);
        } catch (error) {
            console.log({ error });
            utils.sendErrorResponse('General', error.message);
        }
    }
    return {
        payload: timeTableList,
    };
};

export default {
    addClassTimetable,
};
