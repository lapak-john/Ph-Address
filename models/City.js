const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    city_code: { type: String, required: true },
    city_name: { type: String, required: true },
    province_code: { type: String, required: true }
});

const City = mongoose.model('City', citySchema);
module.exports = City;
