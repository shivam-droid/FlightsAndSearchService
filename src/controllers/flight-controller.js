const {FlightService} = require('../service/index.js')

const flightService = new FlightService();

const create = async (req, res) => {
    try {

        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            status: true,
            message: "Successfully created a flight",
            error: {},
        });
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            status: false,
            message: "Not able to create a flight",
            error: error,
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data: flight,
            status: true,
            message: "Successfully retrieved a flight",
            error: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            status: false,
            message: "Not able to get a flight",
            error: error,
        });
    }
}

module.exports = {
    create,
    get
};