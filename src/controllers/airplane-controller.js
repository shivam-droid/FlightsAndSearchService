const {AirplaneService} = require('../service/index.js');

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {

        const airplane = await airplaneService.create(req.body);
        return res.status(201).json({
            data: airplane,
            status: true,
            message: "Successfully created an airplane",
            error: {},

        })
        
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to create an airplane",
            error: error.message,

        })
    }
}

const get = async (req, res) => {
    try {
        const airplane = await airplaneService.get(req.params.id);
        return res.status(200).json({
            data: airplane,
            status: true,
            message: "Successfully retrieved an airplane",
            error: {},

        })
        
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to get an airplane",
            error: error.message,

        })
    }
}

const getAll = async (req, res) => {
    try {
        const airplanes = await airplaneService.getAll();
        return res.status(200).json({
            data: airplanes,
            status: true,
            message: "Successfully retrieved all airplanes",
            error: {},

        })
        
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to get all airplane",
            error: error.message,

        })
    }
}

const update = async (req, res) => {
    try {
        const airplane = await airplaneService.update(req.params.id, req.body);
        return res.status(200).json({
            data: airplane,
            status: true,
            message: "Successfully updated an airplane",
            error: {},

        })
        
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to update an airplane",
            error: error.message,

        })
    }
}

const destroy = async (req, res) => {
    try {
        const airplane = await airplaneService.destroy(req.params.id);
        return res.status(200).json({
            data: airplane,
            status: true,
            message: "Successfully deleted an airplane",
            error: {},

        })
        
    } catch (error) {
        res.status(500).json({
            data: {},
            status: false,
            message: "Not able to delete an airplane",
            error: error.message,

        })
    }
}

module.exports = {
    create,
    get,
    getAll,
    update,
    destroy
}