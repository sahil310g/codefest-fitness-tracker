const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
  gender: String,
  age: Number,
  height: Number,
  weight: Number,
});

const activitySchema = new mongoose.Schema({
  running: Number,
  walking: Number,
  calorie: Number,
  water: Number,
  dancing: Number,
  swimming: Number,
});

const calanderSchenma = new mongoose.Schema({
  date: Date,
  dailyActivity: [activitySchema],
});

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  userInfo: [userInfoSchema],
  goals: [activitySchema],
  activities: [calanderSchenma],
  password: String,
});

module.exports = mongoose.model("User", userSchema);
