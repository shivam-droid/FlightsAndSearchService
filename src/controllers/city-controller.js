// Importing file
const {CityService} = require("../service/index.js");

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            status: true,
            message: "Successfully created a city",
            error: {},
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to create a city",
            error: error,
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            status: true,
            message: "Successfully deleted a city",
            error: {},
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to delete a city",
            error: error,
        });
    }
};

const getAll = async (req,res)=>{
    try {

        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            status: true,
            message: "Successfully retrieved all cities",
            error: {},
        });
        
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to get all cities",
            error: error,
        });
        
    }
}

const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            status: true,
            message: "Successfully updated a city",
            error: {},
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to update a city",
            error: error,
        });
    }
};

const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            status: true,
            message: "Successfully retrieved a city",
            error: {},
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to get a city",
            error: error,
        });
    }
};

// Exporting all functions in CommonJS format
module.exports = { create, destroy, update, get, getAll };
