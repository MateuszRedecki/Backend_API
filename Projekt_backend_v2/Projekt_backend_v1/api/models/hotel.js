const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
  name: String,
  country: String,
  city: String,
  price: Number,
});

module.exports = mongoose.model('Hotel', hotelSchema);
