require('dotenv').config();

export const configs = {
    appSecret: process.env.APP_SECRET,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpEmail: process.env.SMTP_EMAIL,
    smtpPass: process.env.SMTP_PASS,
};
