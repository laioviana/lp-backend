function BadRequestError(message) {
    this.name = this.constructor.name;
    this.status = 400;
    this.message = message;
}

module.exports = BadRequestError;