const {CityRepository} = require("../repository/index.js");

class CityService {
    constructor() {
        this.cityRepository = new CityRepository(); // Fixed naming
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer:", error);
            throw error; // Fixed error handling
        }
    }

    async deleteCity(id) {
        try {
            const response = await this.cityRepository.deleteCity(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer:", error);
            throw error;
        }
    }

    async getCity(id) {
        try {
            const city = await this.cityRepository.getCity(id);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer:", error);
            throw error;
        }
    }

    async updateCity(id, data) {
        try {
            const city = await this.cityRepository.updateCity(id, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer:", error);
            throw error;
        }
    }
}

module.exports = CityService;
