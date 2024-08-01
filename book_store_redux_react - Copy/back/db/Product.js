const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
});

module.exports = mongoose.model("Product", ProductSchema);  // Corrected model name
