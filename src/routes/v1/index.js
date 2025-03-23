const express = require('express');
const router = express.Router();    
const {InfoController} = require('../../controller/index.js');

// Define the routes for version 1 of the API

router.get('/info', InfoController.info);
module.exports = router;