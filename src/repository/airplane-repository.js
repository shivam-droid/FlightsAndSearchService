const {Airplane} = require('../models/index.js');
const CrudRepository = require('./crud-repository.js');

class AirplaneRepository extends CrudRepository  {

    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;