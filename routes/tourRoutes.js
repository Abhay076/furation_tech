const express = require("express");
const tourControllers = require("../controllers/tourController");
const router = express.Router();

router
  .route("/")
  .get(tourControllers.getAllTours)
  .post(tourControllers.checkBody, tourControllers.createTour);

router
  .route("/:id")
  .get(tourControllers.getTour)
  .put(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);

module.exports = router;
