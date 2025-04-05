// import { response } from "express";
// import { airplaneSchema } from "../utils/schema";
const {airplaneSchema} = require("../utils/schema")
const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { createAirPlane } = require("../services/airplane-service");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const {  validationResult } = require("express-validator");




async function createAirplane(req, res) {
  try {
    // const {
    //   modelNumber,
    //   capacity,
      // manufacturer,
      // range,
      // fuelType,
      // speed,
      // wingspan,
      // status,
      // yearManufactured,
      // engineType,
    // } = req.body;
    // console.log(
    //   modelNumber,
    //   capacity
      // manufacturer,
      // range,
      // fuelType,
      // speed,
      // wingspan,
      // status,
      // yearManufactured,
      // engineType
    // );

    const data = req.body;
    const validatedData = airplaneSchema.safeParse(data);
    
    
    if(validatedData.error){
       return res.status(400).json({...validatedData.error})
    }

    const airplane = await createAirPlane(validatedData.data);

    // SuccessResponse.data = airplane;
    // SuccessResponse.data = {capacity:Number(capacity),...airplane};
    return res.status(200).json({ airplane });
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
    // console.error("Error in createAirplane:", error);

    // return res.status(error.StatusCodes).json({
    //   success: false,
    //   message: "Failed to create airplane",
    //   data: {},
    //   error: error.message,
    // });
  }
}

module.exports = {
  createAirplane,
 
};






























// const { StatusCodes } = require("http-status-codes");
// const { createAirPlane } = require("../services/airplane-service");
// const { SuccessResponse, ErrorResponse } = require("../utils/common");
// // const { validateAirplane } = require("../validators/airplane-validator");

// async function createAirplane(req, res) {
//   try {
//     const { modelNumber, capacity } = req.body;
    
//     console.log("Creating Airplane with:", modelNumber, capacity);

//     // Call the service function to create airplane
//     const airplane = await createAirPlane(req.body);

//     // Send success response
//     SuccessResponse.data = airplane;
//     return res.status(StatusCodes.CREATED).json(SuccessResponse);
//   } catch (error) {
//     console.error("Error in createAirplane:", error);

//     ErrorResponse.error = error.message || "Internal Server Error";
//     return res
//       .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
//       .json(ErrorResponse);
//   }
// }

// module.exports = {
//   createAirplane,
//   // validateAirplane, // Make sure this is defined in `validators/airplane-validator.js`
// };
















// // const airplaneRepository = require("../repositries/airplane-repositry");

// // const createAirplane = async (req, res) => {
// //   try {
// //     const airplaneData = req.body;
// //     const newAirplane = await airplaneRepository.create(airplaneData);

// //     return res.status(201).json({
// //       success: true,
// //       message: "Airplane created successfully",
// //       data: newAirplane,
// //     });
// //   } catch (error) {
// //     return res.status(500).json({
// //       success: false,
// //       message: "Failed to create airplane",
// //       error: error.message,
// //     });
// //   }
// // };

// // module.exports = { createAirplane };
