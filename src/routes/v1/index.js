//importing package
const express = require('express');

//importing file
const CityController = require('../../controllers/city-controller.js');
const FlightController = require('../../controllers/flight-controller.js');

const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);

router.post('/flight',FlightController.create);
router.get('/flight/:id',FlightController.get);
router.get('/flight',FlightController.getAll);

module.exports = router;