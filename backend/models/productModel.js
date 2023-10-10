const mongoose = require('mongoose');

// Schéma de modèle pour le produit
const productSchema = new mongoose.Schema({
  barreCode: String,
  price: Number,
  qnt: Number,
  category: String,
});

// Modèle de produit basé sur le schéma
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
