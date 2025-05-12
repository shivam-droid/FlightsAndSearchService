const {Flight} = require('../models/index.js');
const {Op} = require('sequelize');

class FlightRepository {
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }

    }

    async getFlight(id) {
        try {
            const flight = await Flight.findByPk(id);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async deleteFlight(id) {
        try {
            await Flight.destroy({
                where: {
                    id: id,
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = FlightRepository;