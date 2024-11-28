const mongoose = require('mongoose');


const bidSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  initialPrice: {
    type: Number,
    required: true,
  },
  bidPrice: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  customerAddress: {
    type: String,
    required: true,
  },
  finalPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


const Bid = mongoose.model('Bid', bidSchema);

module.exports = Bid;
