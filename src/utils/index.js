import { acceptableUserPayload, checkUserPayload } from './validators';
import { sendEmail, compileEjs } from './mail';

export const utils = {
    acceptableUserPayload,
    checkUserPayload,
    sendEmail,
    compileEjs,
};
