const mongoose = require('mongoose');

const barangaySchema = new mongoose.Schema({
    brgy_code: { type: String, required: true },
    brgy_name: { type: String, required: true },
    city_code: { type: String, required: true }
});

const Barangay = mongoose.model('Barangay', barangaySchema);
module.exports = Barangay;
