const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = require('../config/secret').SECRET_KEY;


const registerUser = async (req, res) => {
    try {
        const {fullName, email, password } = req.body;
        const existingUser = await User.findOne({ email });
  
        if (existingUser) {
          res.status(400).json({ message: "Email exist already" });
        }else{
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = new User({
            fullName,
            email,
            password: hashedPassword
          });
          await newUser.save();
          res.status(201).json({ message: 'Account created successfully' });
      }
      } catch (error) {
        res.status(500).json({ message: 'Registration failed' });
      }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body; 
        const user = await User.findOne({ email }); 
    
        if (!user) {
          return res.status(401).json({ message: 'Email not exist'});
        }
    
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Password incorrect' });
        }
    
        const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '2h' });
        res.json({ token });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
};


const setGoals = async (req, res) => {
  try {
    const { email, goals } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Email not exist'});
    }
    user.goals = goals;
    await user.save();
    res.status(201).json({ message: 'Goals set successfully' });
  }
  catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const setActivities = async (req, res) => {
  try {
    const { date, email, activities } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Email not exist'});
    }
    const index = user.activities.findIndex((activity) => activity.date === date);
    if (index !== -1) {
      user.activities[index].activities = activities;
    } else {
      user.activities.push({ date, activities });
    }
    await user.save();
    res.status(201).json({ message: 'Activities set successfully' });
  }
  catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const setUserInfo = async (req, res) => {
  try {
    const { email, userInfo } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Email not exist'});
    }
    user.userInfo = userInfo;
    await user.save();
    res.status(201).json({ message: 'User info set successfully' });
  }
  catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser, loginUser };