import AfricasTalking from 'africastalking';

import { configs } from '../../configs';

// Initialize Africa's Talking
const africastalking = AfricasTalking({
    apiKey: configs.apiKey,
    username: configs.smsUsername,
});

/**
 *
 * @param {string[]} recipients
 * @param {string} message
 */
export const sendMessage = async (recipients, message) => {
    // Send message
    try {
        const result = await africastalking.SMS.send({
            to: recipients,
            message: message,
        });
        console.log(result);
    } catch (ex) {
        console.error(ex);
    }
};
