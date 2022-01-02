// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productController = require('../controllers/productController');

// ************ FRONTEND ************
// ************ Product Detail ************
router.get('/products/:id', productController.productDetail); 

module.exports = router;