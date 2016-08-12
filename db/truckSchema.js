const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
  name: String,
  handle: String,
  description: String,
  message: String,
  timeStamp: String,
  imageUrl: String,
  yelpId: String,
  location: { lat: Number, lng: Number },
  schedule: [
    /* sunday:*/ { lat: Number, lng: Number, closed: Boolean },
    /* monday:*/ { lat: Number, lng: Number, closed: Boolean },
    /* tuesday:*/ { lat: Number, lng: Number, closed: Boolean },
    /* wednesday:*/ { lat: Number, lng: Number, closed: Boolean },
    /* thursday:*/ { lat: Number, lng: Number, closed: Boolean },
    /* friday:*/ { lat: Number, lng: Number, closed: Boolean },
    /* saturday:*/ { lat: Number, lng: Number, closed: Boolean },
  ],
});

const Truck = mongoose.model('Truck', truckSchema);

module.exports = Truck;
