import { acceptableUserPayload, checkUserPayload } from './validators';
import { sendEmail, compileEjs } from './mail';
import { sendMessage } from './smsModule';

export const utils = {
    acceptableUserPayload,
    checkUserPayload,
    sendEmail,
    compileEjs,
    sendMessage,
};
