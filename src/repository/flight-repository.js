const {Flight} = require('../models/index.js');
const {Op} = require('sequelize');

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        let priceFilter = [];
        if(data.minPrice) {
            priceFilter.push({price: { [Op.gte]: data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }    
        Object.assign(filter,{[Op.and]: priceFilter});
        return filter;
    }

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

    async getAllFlights(filter) {
        try {
            const filterObj = this.#createFilter(filter);
            const flights = await Flight.findAll({
                where : filterObj
            });
            return flights;
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