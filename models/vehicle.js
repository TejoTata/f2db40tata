const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
vehicle_name: String,
vehicle_type: String,
vehicle_price: Number
})
module.exports = mongoose.model("vehicle",vehicleSchema)