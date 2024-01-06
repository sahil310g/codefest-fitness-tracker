const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  activities: [],
  password: String,
});


module.exports = mongoose.model('User', userSchema);
