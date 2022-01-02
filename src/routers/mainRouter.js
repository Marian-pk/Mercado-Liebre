// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController')

// ************ FRONTEND ************
// ************ HOME ************
router.get('/', mainController.home);

// ************ LOGIN FORM ************
router.get('/login', mainController.login);

// ************ REGISTER FORM ************
router.get('/register', mainController.register);


module.exports = router;