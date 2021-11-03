var express = require('express');
const { verifyAccessToken } = require('../utilities/jwt_helper')
const AuthController = require('../controllers/authController')

// Using Router of express
var router = express.Router();

// Route 1 Registration Route
router.post('/register', AuthController.register)

// Route 2 Login Route
router.post('/login', AuthController.login)

// Route 3 Creating new refresh token
router.post('/refreshToken', AuthController.refreshToken)

// Route 4 Deleting refresh token
router.put('/logout', AuthController.logout)

// ROUTE 5: Get user using logged in details
router.get("/getuser", verifyAccessToken, AuthController.getuser);

module.exports = router;