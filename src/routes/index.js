const express = require("express");
const v1Routes = require("./v1/index.js");

// const v2Routes = require('./v2/index.js');
const router = express.Router();

router.use("/v1", v1Routes);
// router.use('/v2',v2Routes);

module.exports = router;
