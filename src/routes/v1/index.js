const express = require("express");
const router = express.Router();
const { InfoController } = require("../../controller/index.js");
const airplaneRoutes = require("./airplane-routes.js");


router.use("/airplane", airplaneRoutes);
// Define the routes for version 1 of the API

router.get("/info", InfoController.info);
module.exports = router;
