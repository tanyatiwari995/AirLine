const { StatusCodes } = require("http-status-codes");

const {ErrorResponse} = require('../utils/common');


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
