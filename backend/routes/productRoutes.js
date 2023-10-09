const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Opération Create
router.post('/product/create', productController.createProduct);
router.get('/product/all', productController.getAllProducts);
router.get('/product/:id', productController.getProductById);
router.put('/product/upd/:id', productController.updateProduct);
router.delete('/product/del/:id', productController.deleteProduct);

module.exports = router;
