const { Product } = require('../models/productModel');

// Données factices pour simuler une base de données
const products = [];

// Opération Create
function createProduct(req, res) {
  const { barreCode, price, qnt, category } = req.body;
  const id = articles.length + 1;
  const newProduct = new Product(id, barreCode, price, qnt, category);
  products.push(newProduct);
  res.status(201).json(newProduct);
}

// Opération Read (lire tous les produits)
function getAllProducts(req, res) {
  res.json(products);
}

// Opération Read (lire un article par ID)
function getProductById(req, res) {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.json(product);
  }
}

// Opération Update
function updateProduct(req, res) {
  const id = parseInt(req.params.id);
  const { barreCode, price, qnt, category } = req.body;
  const product = products.find((p) => p.id === id);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    product.barreCode = barreCode;
    product.price = price;
    product.qnt = qnt;
    product.category = category;
    res.json(product);
  }
}

// Opération Delete
function deleteProduct(req, res) {
  const id = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    products.splice(index, 1);
    res.json({ message: 'Product deleted successfully' });
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
