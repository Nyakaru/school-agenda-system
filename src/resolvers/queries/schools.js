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
            totalStudents: details?.students.length,
        };
    } catch (error) {
        console.log(error);
    }
};

/**
 * Retrieve all students in a school
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const schoolStudents = async (_, _args, context, _info) => {
    try {
        const school = context.user.school;
        const details = await context.prisma.school({ id: school }).students().$fragment(utils.studentFragment);
        return details;
    } catch (error) {
        console.log(error);
    }
};

/**
 * Retrieve all subjects in a school
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const schoolSubjects = async (_, _args, context, _info) => {
    try {
        const school = context.user.school;
        return await context.prisma.school({ id: school }).subjects();
    } catch (error) {
        console.log(error);
    }
};
export default {
    schools,
    schoolDetails,
    schoolStudents,
    schoolSubjects,
};
