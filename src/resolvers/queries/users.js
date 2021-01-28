//@ts-check
/**
 * Retrieve all users
 *
 * @param {import('../../..').IRequestContext} context
 * @returns
 */
const users = async (_, _args, context, _info) => {
    try {
        return await context.prisma.users()
    } catch (error) {
        console.log(error)
    }
}

export default {
    users
}
