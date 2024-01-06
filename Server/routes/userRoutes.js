
const express = require('express');
const userController = require('../controllers/userController');
const {authenticateUser} = require('../middleware/auth');

const router = express.Router();


router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/setgoals',authenticateUser, userController.setGoals);
router.post('setactivities',authenticateUser, userController.setActivities);
router.post('setuserinfo',authenticateUser, userController.setUserInfo);

module.exports = router;
