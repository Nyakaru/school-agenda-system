//@ts-check
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { configs } from '../../configs';
import { utils } from '../../utils/';

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
        const error = await utils.checkUserPayload(utils.acceptableUserPayload, input);
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

        if (user['email']) {
            const message = utils.compileEjs({ template: 'general-template' })({
                header: 'Access Granted',
                name: input['username'],
                body: `<br> Welcome to the School Agenda System where we help you manage eveything school.
                Your account was succesfully created. <br>
                Please click on the link below and use the following credentials to log in 
                <br>
                Email: ${user['email']}
                <br>
                Password: ${input['password']}
                <br><br>
                If you have other questions regarding the system, don't 
                hesitate to send us a mail @support.schoolagendasystem.com.
                <br><br>
                Best Regards`,
                ctaText: 'School Agenda System',
                ctaLink: `http://localhost:4000/graphql`,
            });
            utils.sendEmail({ html: message, subject: 'Notification from School Agenda System', to: user['email'], cc: [] });
        }

        if (user['phone']) {
            const message =
                'Welcome to the School Agenda System where we help you manage eveything school. Your account was succesfully created. Please click on the link below to sign in automatically.';
            utils.sendMessage([user['phone']], message);
        }

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
