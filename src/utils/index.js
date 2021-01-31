import Validators from './validators';
import { sendEmail, compileEjs } from './mail';
import { sendMessage } from './smsModule';
import { sendErrorResponse } from './response';

export const utils = {
    ...Validators,
    sendEmail,
    compileEjs,
    sendMessage,
    sendErrorResponse,
};
