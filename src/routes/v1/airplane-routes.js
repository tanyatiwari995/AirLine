const express = require('express');
const {AirplaneController} = require('../../controller/index.js');

const router  = express.Router();

//api/v1/airplane=POST
router.post('/',AirplaneController.createAirplane);
module.exports = router;