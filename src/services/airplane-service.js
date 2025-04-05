const {StatusCodes} = require('http-status-codes')
const AirplaneRepositry = require("../repositries/airplane-repositry"); 
const airplaneRepositry = new AirplaneRepositry(); // ✅ This will now work

async function createAirPlane(data) {
  try {
    const airplane = await airplaneRepositry.create(data);
    return airplane;
  } catch (error) {
    if(error.name === 'TypeError'){}
    console.error("Error in createAirPlane:", error);

    throw new Error('can not create object', StatusCodes.INTERNAL_SERVER_ERROR)
  }
  throw error;
}

module.exports = { createAirPlane };


