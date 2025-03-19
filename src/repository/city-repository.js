import {City} from '../models/city.js';

class CityRepository {

    async createCity({name})
    {
        try {

            const city = await City.create({name});
            return city;
            
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async deleteCity(id){
        try {

            City.destroy({
                where: {
                    id: id,
                }
            })
            
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getCity(id){
        try {

            const city = await City.findbyPk(id);
            return city;
            
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async updateCity(id,data){
        try {

            const response = await City.update(data,{
                where: {
                    id:id,
                }
            })
            
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

}

export default CityRepository;