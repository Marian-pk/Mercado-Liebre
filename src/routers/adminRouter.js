// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

// ************ BACKEND ************
// ************ List all products ************
router.get('/products', adminController.products);

// ************ Create product form ************
router.get('/products/create', adminController.createProduct);

// ************ Process de data from the 'create product form' ************
router.post('/products/newProduct', adminController.newProduct);

// ************ Edit product form' ************
router.get('/products/edit/:id', adminController.editProduct);

// ************ Process de data from the 'edit product form' ************
router.put('/products/edit/', adminController.edit);

// ************ Process de data from the 'edit product form' ************
router.delete('/products/:id', adminController.delete);





module.exports = router;



