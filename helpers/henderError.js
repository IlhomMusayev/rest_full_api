export default class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super();
        this.code = statusCode;
        this.message = message;
    }
}