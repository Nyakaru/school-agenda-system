//@ts-check
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { configs } from '../../configs';
import { acceptableUserPayload, checkUserPayload } from '../../utils/validators';

const createToken = user => {
    return sign(
        {
            username: user['username'],
            school: user['school'],
            email: user['email'],
            phone: user['phone'],
            role: user['role'],
        },
        configs.appSecret,
    );
};

const generalError = () => {
    return {
        error: {
            field: 'User',
            message: 'No such user found',
        },
    };
};

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const signup = async (_, { input }, context, _info) => {
    if (input['email'] || input['phone']) {
        const error = await checkUserPayload(acceptableUserPayload, input);
        if (error) {
            const { path: field, message } = error;

            return { error: { field, message } };
        }

        let existingUser = {};

        if (input['email']) {
            const user1 = await context.prisma.user({ email: input['email'] });
            existingUser = user1;
        }

        if (input['phone']) {
            const user2 = await context.prisma.user({ email: input['email'] });
            existingUser = user2;
        }

        if (existingUser) {
            return {
                error: {
                    field: 'Email',
                    message: 'User with that email or phone already exists',
                },
            };
        }

        const password = await hash(input['password'], 10);
        const user = await context.prisma.createUser({ ...input, password });

        if (!user) {
            return {
                error: {
                    field: 'User',
                    message: 'An error occured, please try again later',
                },
            };
        }

        //Implement a way of sending an email or sms or both to the user created
        return {
            message: 'Account successfully created. User should check their email or phone',
        };
    } else {
        return {
            error: {
                field: 'User',
                message: 'Please provide either an email or phone number',
            },
        };
    }
};

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const login = async (_, { input }, context, _info) => {
    let user = {};

    if (input['email']) {
        const user1 = await context.prisma.user({ email: input['email'] });
        if (!user1) {
            return generalError();
        }
        user = user1;
    } else if (input['phone']) {
        const user2 = await context.prisma.user({ phone: input['phone'] });
        if (!user2) {
            return generalError();
        }
        user = user2;
    } else {
        return {
            error: {
                field: 'User',
                message: 'Please provide either a phone number or email',
            },
        };
    }

    const valid = await compare(input['password'], user.password);
    if (!valid) {
        return {
            error: {
                field: 'Password',
                message: 'Invalid password',
            },
        };
    }
    const token = createToken(user);

    return { payload: { token, user } };
};

export default {
    signup,
    login,
};
