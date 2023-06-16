const { Product, Variant } = require('../models/productModel');

let products = [];

// Get all products
const getAllProducts = (req, res) => {
  res.status(200).json({ message: 'Products fetched successfully', products });
};

const createProduct = (req, res) => {
  const { name, description, price, variants } = req.body;
  const productId = products.length + 1;
  const product = new Product(productId, name, description, price, variants);
  products.push(product);
  res.status(200).json({ message: 'Product created successfully', product });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, price, variants } = req.body;

  const index = products.findIndex((product) => product.id === parseInt(id));
  if (index !== -1) {
    const updatedProduct = new Product(
      id,
      name,
      description,
      price,
      variants
    );
    products[index] = updatedProduct;
    res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  const index = products.findIndex((product) => product.id === id || product.id === parseInt(id));

  if (index !== -1) {
    const deletedProduct = products[index];
    products.splice(index, 1);
    res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

const searchProducts = (req, res) => {
  const { query } = req.query;
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.variants.some((variant) =>
        variant.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  });
   if (filteredProducts.length > 0) {
    res.status(200).json({ message: 'Products found', filteredProducts });
  } else {
    res.status(404).json({ message: 'No products found' });
  }
};


module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct, searchProducts };