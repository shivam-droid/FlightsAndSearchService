import { CityRepository } from "../repository/index";

class CityService {

    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async deleteCity(id){
        try {

            await this.CityRepository.deleteCity(id);
            
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getCity(id){
        try {
            const city = await this.CityRepository.getCity(id);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async updateCity(id,data){
        try {

            const city = await this.CityRepository.updateCity(id,data);
            return city;
            
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
}

export default CityService;