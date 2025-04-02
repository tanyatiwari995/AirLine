// const CrudRepository = require("./CrudRepository"); // Import CrudRepository
// const { Airplane } = require("../models"); // Import Airplane model

// class AirplaneRepository extends CrudRepository {
//   constructor() {
//     super(Airplane); // Pass Airplane model to CrudRepository
//   }
// }

// module.exports = new AirplaneRepository();


const CrudRepository = require("./crud-repositry.js");
const { AirPlane } = require("../models");

class AirplaneRepoistry extends CrudRepository {
  constructor() {
    super(AirPlane);
  }
}


module.exports = AirplaneRepoistry;

