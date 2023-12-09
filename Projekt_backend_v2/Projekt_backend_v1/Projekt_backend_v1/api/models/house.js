const mongoose = require('mongoose');

const houseSchema = mongoose.Schema({
  name: String,
  country: String,
  city: String,
  price: Number,
  owner: String,
  telephone: Number,
});

module.exports = mongoose.model('House', houseSchema);
