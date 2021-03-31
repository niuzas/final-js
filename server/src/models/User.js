const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defined Animal Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  
  }, { timestamps: true });


module.exports = mongoose.model('user', UserSchema);