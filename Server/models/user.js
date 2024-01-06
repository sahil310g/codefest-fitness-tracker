const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  userInfo :[userInfoSchema],
  goals : [activitySchema],
  activities: [calanderSchenma], 
  password: String
});

const userInfoSchema = new mongoose.Schema({
  gender: String,
  age: Number,
  height: Number,
  weight: Number
});

const calanderSchenma = new mongoose.Schema({
  date: Date,
  dailyActivity: [activitySchema]
});

const activitySchema = new mongoose.Schema({
  running : String,
  walking : String,
  calorie: String,
  water : String
});

module.exports = mongoose.model('User', userSchema);
