const {ClientErrorCodes} = require('../utils/error-codes');
const validateFightCreate = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price 
    )
    {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            message : "Please provide all required fields",
            err : "missing required fields to create flight"
        })
    }

    next();
}

module.exports = {
    validateFightCreate
}