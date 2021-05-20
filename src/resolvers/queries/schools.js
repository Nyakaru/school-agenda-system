//@ts-check
import { utils } from '../../utils';

/**
 * Retrieve all schools
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const schools = async (_, _args, context, _info) => {
    try {
        return await context.prisma.schools().$fragment(utils.schoolFragment);
    } catch (error) {
        console.log(error);
    }
};

/**
 * Retrieve details of a specific school
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const schoolDetails = async (_, _args, context, _info) => {
    try {
        const school = context.user.school;
        const details = context.prisma.school({ id: school });
        return {
            school: await details.$fragment(utils.schoolFragment),
            totalStudents: details.students.length,
        };
    } catch (error) {
        console.log(error);
    }
};

export default {
    schools,
    schoolDetails,
};
