//@ts-check

/**
 * Retrieve all departments in a school
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const departments = async (_, _args, context, _info) => {
    try {
        const departments = await context.prisma.school({ id: context.user.school }).department();
        return departments;
    } catch (error) {
        console.log(error);
    }
};

export default {
    departments,
};
