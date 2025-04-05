const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require('../utils/common');

function validationCreateRequest(req, res, next) {
  if (!req.body.modelNumber ) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Model Number is required",
      error: "Model Number is missing",
    });
  }

  if (!req.body.capacity || typeof req.body.capacity==="number") {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Capacity is required and must be a number",
      error: "Invalid capacity value",
    });
  }

  next();
}
function validationCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.error = "Model Number is not found";
  return res
    .status(StatusCodes.BAD_REQUEST)
    .json(ErrorResponse);
  }
  next();
}

module.exports = {
  validationCreateRequest,
};
