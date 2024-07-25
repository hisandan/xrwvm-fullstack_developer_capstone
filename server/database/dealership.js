const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dealershipSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  lat: {
    type: Number,  // Consider changing to Number if you store coordinates
    required: true
  },
  long: {
    type: Number,  // Consider changing to Number if you store coordinates
    required: true
  },
  short_name: {
    type: String,
    required: false // If this field is optional, set `required` to false
  },
  full_name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Dealership', dealershipSchema);
