// import {z} from "zod";
const z = require("zod");

 const airplaneSchema  = z.object({
   capacity: z.number(),
   modelNumber:z.string(), 
})
module.exports = {airplaneSchema};