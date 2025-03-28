const CrudRepository = require("./crud-repositry.js");
const { AirPlane } = require("../models");

class AirplaneRepoistry extends CrudRepository {
  constructor() {
    super(AirPlane);
  }
}



module.exports = AirplaneRepoistry;