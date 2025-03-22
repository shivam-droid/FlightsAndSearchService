const { City } = require('../models');

class CityRepository {

    async createCity({name})
    {
        try {

            const city = await City.create({name});
            return city;
            
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async deleteCity(id){
        try {

            await City.destroy({
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

    async getCity(id){
        try {

            const city = await City.findByPk(id);
            return city;
            
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async updateCity(id,data){
        try {

            const response = await City.update(data,{
                where: {
                    id:id,
                }
            })
            return response;
            
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = CityRepository;