import {City} from '../models/city.js';

class CityRepository {

    async createCity({name})
    {
        try {

            const city = await City.create({name});
            return city;
            
        } catch (error) {
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
            throw {error};
        }
    }

}