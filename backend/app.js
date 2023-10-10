const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 5000;

app.use(cors);
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/db_ReactNode', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.use('/product/create', productRoutes);
app.use('/product/all', productRoutes);
app.use('/product/:id', productRoutes);
app.use('/product/upd/:id', productRoutes);
app.use('/product/del/:id', productRoutes);

app.get('/api/test', (req, res, next)=> {
  res.send('test api on server react and node');
  next();
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
