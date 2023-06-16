const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes')

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;