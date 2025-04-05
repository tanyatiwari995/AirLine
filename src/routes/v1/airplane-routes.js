const express = require('express');
const {AirplaneController} = require('../../controller/index.js');
const {AirplaneMiddlewares} = require('../../middlewares')

const router  = express.Router();

//api/v1/airplane=POST
router.post('/',
    // AirplaneMiddlewares.validationCreateRequest,
    AirplaneController.createAirplane);
module.exports = router;