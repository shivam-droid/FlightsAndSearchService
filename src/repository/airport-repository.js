const {Airport} = require('../models/index.js');
const CrudRepository = require('./crud-repository.js');

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRepository;