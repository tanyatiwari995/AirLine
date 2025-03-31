const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { createAirPlane } = require("../services/airplane-service");

async function createAirplane(req, res) {
  try {
    const { modelNumber, capacity,manufacturer , range, fuelType, speed ,wingspan, status,yearManufactured  ,engineType} = req.body;
    console.log(modelNumber, capacity,manufacturer,range, fuelType, speed ,wingspan, status ,yearManufactured ,engineType);
      const  airplane =  await createAirPlane(
        req.body
      )
    
    // const airplane = await createAirPlane({
    //   modelNumber: req.body.modelNumber,
    //   capacity: req.body.capacity,
    //   manufacturer: req.body. manufacturer,
    //   range: req.body.range,
    //   fuelType: req.body.fuelType,
    //   speed : req.body.speed ,
    //   wingspan: req.body.wingspan,
    //   status :req.body.status,
    //   yearManufactured :req.body.yearManufactured,
    //   engineType:req.body.engineType
    // });

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

// const airplaneRepository = require("../repositries/airplane-repositry");

// const createAirplane = async (req, res) => {
//   try {
//     const airplaneData = req.body;
//     const newAirplane = await airplaneRepository.create(airplaneData);
    
//     return res.status(201).json({
//       success: true,
//       message: "Airplane created successfully",
//       data: newAirplane,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Failed to create airplane",
//       error: error.message,
//     });
//   }
// };

// module.exports = { createAirplane };
