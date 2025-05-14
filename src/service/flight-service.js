const {FlightRepository} = require('../repository/index.js');
const {Airplane} = require('../models/index.js')
const {compareTime} = require('../utils/helper.js');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {

            const airplane = await Airplane.findByPk(data.airplaneId);
            if (!airplane) {
                throw new Error('Airplane not found');
            }
            if(!compareTime(data.arrivalTime, data.departureTime))
            {
                throw new Error('Arrival time should be greater than departure time');
            }
            const flight = await this.flightRepository.createFlight({...data,totalSeats: airplane.capacity});
            return flight;
            
        } catch (error) {
            console.log("Something went wrong in service layer:", error);
            throw error;
        }
    }

    async getFlight(id) {
        try {
            const flight = await this.flightRepository.getFlight(id);
            return flight;
        } catch (error) {
            console.log("Something went wrong in service layer:", error);
            throw error;
        }
    }

    async getAllFlights(filter) {
        try {
            const flights = await this.flightRepository.getAllFlights(filter);
            return flights;
        } catch (error) {
            console.log("Something went wrong in service layer:", error);
            throw error;
        }
    }

}

module.exports = FlightService;