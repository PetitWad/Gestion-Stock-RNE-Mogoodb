const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/productRoutes');

// Utilisez les routes définies dans le fichier productRoutes.js
app.use('/product/create', productRoutes);
app.use('/product/all', productRoutes);
app.use('/product/:id', productRoutes);
app.use('/product/upd/:id', productRoutes);
app.use('/product/del/:id', productRoutes);

app.listen(port, () => {
  console.log("Server is running on port "+ port);
});
