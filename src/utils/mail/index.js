//@ts-check
import { compile } from 'ejs';
import { readFileSync, ReadStream } from 'fs';
import { minify } from 'html-minifier';
import { createTransport } from 'nodemailer';
import { join } from 'path';

import { configs } from '../../configs';

const rootPath = join(__dirname, '..', '..', '..', 'templates/');

const templates = {
    'general-template': 'general-template.ejs',
    'access-granted': 'access-granted.ejs',
};

const opts = {
    pool: true,
    host: configs.smtpHost,
    secure: false,
    port: configs.smtpPort,
    auth: {
        user: configs.smtpEmail,
        pass: configs.smtpPass,
    },
    tls: {
        rejectUnauthorized: false,
    },
};

//@ts-ignore
const transporter = createTransport(opts);

/**
 * Send email to given email(s)
 *
 * @param {{to: string | string[], cc: string | string[],subject: string, html: string, attachments?: [{filename: string, content: ReadStream}]}} options
 * @returns
 */
export const sendEmail = options => {
    const { to, cc = [], subject, html, attachments } = options;

    return new Promise((resolve, reject) => {
        transporter.sendMail(
            {
                from: `School Agenda System <${configs.smtpEmail}>`,
                to,
                cc,
                subject,
                html,
                ...(attachments && { attachments }),
            },
            (error, info) => {
                if (error) {
                    console.log('❌ ERROR SENDING EMAIL', error);
                    return reject(error);
                }
                resolve(info);
            },
        );
    });
};

/**
 * Compile ejs to plain html string. Pass template and data to use
 *
 * @param { {template: 'general-template' | 'access-granted'} } template
 * @returns
 */
export const compileEjs = template => {
    const text = readFileSync(rootPath + templates[template.template], 'utf-8');

    /**
     * Closure to pass data to ejs
     * @param {*} data
     */
    const fn = data => {
        const html = compile(text)(data);

        return minify(html, { collapseWhitespace: true });
    };

    return fn;
};
