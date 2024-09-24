const mongoose = require('mongoose');

const provinceSchema = new mongoose.Schema({
    province_code: { type: String, required: true },
    province_name: { type: String, required: true },
    region_code: { type: String, required: true }
});

const Province = mongoose.model('Province', provinceSchema);
module.exports = Province;

