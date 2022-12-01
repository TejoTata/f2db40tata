const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
vehicle_name: {
    type: String, 
    required: true
},
vehicle_type: {
    type: String, 
    required: true
},
vehicle_price: {
    type: Number, 
    min:0,max:400,
    required: true
},
})
module.exports = mongoose.model("vehicle",vehicleSchema)