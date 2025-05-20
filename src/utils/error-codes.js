const ClientErrorCodes = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404
});

const ServerErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503
});

const SuccessCodes = Object.freeze({
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
});

module.exports = {
    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes
}