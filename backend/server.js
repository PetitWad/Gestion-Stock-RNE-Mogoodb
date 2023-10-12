const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');


const app = express()
const port = 8000;

app.use(express.json());
app.use(cors());

// connection avec la base de donnees mongoose
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

  //Middleware de routage
app.use('/product', productRoutes);

app.get('/api', (req, res) => {
    res.send("je fonctionne parfaitement bien comme serveur...");
});

// port ecoute du serveur
app.listen(port, ()=> {
    console.log("The server is starting on port " +port);
});