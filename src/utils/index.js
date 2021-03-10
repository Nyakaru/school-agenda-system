import Validators from './validators';
import Helpers from './helpers';
import { sendEmail, compileEjs } from './mail';
import { sendMessage } from './smsModule';
import { sendErrorResponse } from './response';

export const utils = {
    ...Validators,
    ...Helpers,
    sendEmail,
    compileEjs,
    sendMessage,
    sendErrorResponse,
};
