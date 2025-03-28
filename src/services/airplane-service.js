
const AirplaneRepositry = require("../repositries/airplane-repositry"); 
const airplaneRepositry = new AirplaneRepositry(); // ✅ This will now work

async function createAirPlane(data) {
  try {
    const airplane = await airplaneRepositry.create(data);
    return airplane;
  } catch (error) {
    console.error("Error in createAirPlane:", error);
    throw error;
  }
}

module.exports = { createAirPlane };


