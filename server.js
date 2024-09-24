require('dotenv').config();  // To load .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Region = require('./models/Region');
const Province = require('./models/Province');
const City = require('./models/City');
const Barangay = require('./models/Barangay');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Routes to fetch regions, provinces, cities, and barangays

app.get('/api/regions', async (req, res) => {
    try {
        const regions = await Region.find().sort({ createdAt: -1 });
        res.json(regions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/provinces', async (req, res) => {
    const { regionCode } = req.query;
    try {
        const provinces = await Province.find({ region_code: regionCode });
        res.json(provinces);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/cities', async (req, res) => {
    const { provinceCode } = req.query;
    try {
        const cities = await City.find({ province_code: provinceCode });
        res.json(cities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/barangays', async (req, res) => {
    const { cityCode } = req.query;
    try {
        const barangays = await Barangay.find({ city_code: cityCode });
        res.json(barangays);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
