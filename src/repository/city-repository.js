const { City } = require('../models/index.js');
const {Op} = require('sequelize');

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

    async getAllCities(filter)
    {
        try {
            if(filter.name)
            {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
            
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
            
        }
    }

    async updateCity(id,data){
        try {
            const city = await City.findByPk(id);
            city.name = data.name;
            await city.save();
            return city;
            
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = CityRepository;