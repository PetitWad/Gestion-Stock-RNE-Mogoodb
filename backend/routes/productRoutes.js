const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/create', productController.createProduct);
router.get('/all', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/upd/:id', productController.updateProduct);
router.delete('/del/:id', productController.deleteProduct);

router.get('/api/test', productController.testApi);



module.exports = router;
