const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  goal : [activitySchema],
  activities: [calanderSchenma], 
  password: String
});

const calanderSchenma = new mongoose.Schema({
  date: Date,
  activity : [activitySchema]
});

const activitySchema = new mongoose.Schema({
  running : String,
  walking : String,
  calorie: String,
  water : String
});

module.exports = mongoose.model('User', userSchema);
