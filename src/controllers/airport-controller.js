const {AirportService} = require('../service/index.js');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airplane,
            status: true,
            message: "Successfully created an airport",
            error: {},

        })
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to create an airport",
            error: error.message,

        })
    }
}

const getAll = async (req, res) => {
    try {
        const airports = await airportService.getAll();
        return res.status(200).json({
            data: airports,
            status: true,
            message: "Successfully retrieved all airports",
            error: {},

        })
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to get all airports",
            error: error.message,

        })
    }
}

const get = async (req, res) => {
    try {
        const airport = await airportService.get(req.params.id);
        if (!airport) {
            return res.status(404).json({message: 'Airport not found'});
        }
        return res.status(200).json({
            data: airport,
            status: true,
            message: "Successfully retrieved an airport",
            error: {},

        })
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to get an airport",
            error: error.message,

        })
    }
}

module.exports = {
    create,
    getAll,
    get
}