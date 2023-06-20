const Tour = require("../models/tourModel");

//middleware check for the creating tour
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price || !req.body.rating) {
    return res.status(400).json({
      status: "faild",
      message: "Missing name or price or rating",
    });
  }
  next();
};

//create a Tour
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "Success, new tour added successfully",
      data: {
        newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      data: {
        err,
      },
    });
  }
};

//get Tour
exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      data: {
        err,
      },
    });
  }
};


// update the Tour
exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      data: {
        err,
      },
    });
  }
};

// delete the tours
exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({
      status: "Success, tour deleted successfully",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      data: {
        err,
      },
    });
  }
};

// get all tours

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      data: {
        err,
      },
    });
  }
};
