const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema({
    region_code: { type: String, required: true },
    region_name: { type: String, required: true }
});

const Region = mongoose.model('Region', regionSchema);
module.exports = Region;
