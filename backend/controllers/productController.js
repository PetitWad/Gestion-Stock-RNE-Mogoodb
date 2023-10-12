const Product = require('../models/productModel');

// Données factices pour simuler une base de données
const products = [];

// Opération Create (Insérer un nouveau produit)
async function createProduct(req, res) {
  try {
    const { barreCode, price, qnt, category } = req.body;

    const newProduct = new Product({ barreCode, price, qnt, category });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
}

// Opération Read (lire tous les produits)
async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
}

// Opération Read (lire un produit par ID)
async function getProductById(req, res) {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product...' });
  }
}

// Opération Update
async function updateProduct(req, res) {
  try {
    const id = req.params.id;
    const { barreCode, price, qnt, category } = req.body;

    // Recherchez le produit par ID et mettez à jour les champs
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { barreCode, price, qnt, category },
      { new: true }
    );

    if (!updatedProduct) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(updatedProduct);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' });
  }
}

// Opération Delete
async function deleteProduct(req, res) {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json({ message: 'Product deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' });
  }
}

async function testApi(req,res){
  res.send('Test 1, 2, 3 ....');
}
//test api route 

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  testApi,
};
