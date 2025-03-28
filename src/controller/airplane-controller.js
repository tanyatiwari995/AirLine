const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

async function createAirplane(req, res) {
  try {
    const { modelNumber, capacity } = req.body;
    console.log(modelNumber, capacity);

    const airplane = await AirplaneService.createAirPlane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created an airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    console.error("Error in createAirplane:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to create airplane",
      data: {},
      error: error.message,
    });
  }
}

module.exports = {
  createAirplane,
};
