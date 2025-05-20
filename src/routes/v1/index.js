//importing package
const express = require("express");

//importing file
const CityController = require("../../controllers/city-controller.js");
const FlightController = require("../../controllers/flight-controller.js");
const AirplaneController = require("../../controllers/airplane-controller.js");
const AirportController = require("../../controllers/airport-controller.js");

//importing middleware
const { FlightMiddleware } = require("../../middlewares/index.js");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

router.post(
  "/flight",
  FlightMiddleware.validateFightCreate,
  FlightController.create
);

router.get("/flight/:id", FlightController.get);
router.get("/flight", FlightController.getAll);

router.post("/airplane", AirplaneController.create);
router.get("/airplane/:id", AirplaneController.get);
router.get("/airplane", AirplaneController.getAll);

router.post("/airport", AirportController.create);
router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getAll);

module.exports = router;
