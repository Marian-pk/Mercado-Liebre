const express = require('express');
const router = express.Router();
const formulariosController = require('../controllers/formulariosController')

router.get('/login', formulariosController.login);
router.get('/register', formulariosController.register);

module.exports = router;