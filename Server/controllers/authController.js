
const User = require('../models/user');
  
  const protectedRoute = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user }); 
        if (!user) {
          return res.status(401).json({ message: 'Authentication failed' });
        }
        res.json({user : user });
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    };

  module.exports = {
     protectedRoute
  };