export const sendErrorResponse = (field, message) => {
    return {
        error: {
            field: field,
            message: message,
        },
    };
};
