
const express = require('express');
const authController = require('../controllers/authController');
const {authenticateUser} = require('../middleware/auth');

const router = express.Router();

router.get('/getdata',authenticateUser, authController.protectedRoute);

module.exports = router;

