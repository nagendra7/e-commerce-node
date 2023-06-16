const { Product, Variant } = require('../models/productModel');

describe('Product Model', () => {
  test('should create a new instance of Product', () => {
    const productId = 1;
    const name = 'Marvel T-shirt';
    const description = 'Marvel Avengers T-shirt';
    const price = 499;
    const variants = [];

    const product = new Product(productId, name, description, price, variants);

    expect(product.id).toBe(productId);
    expect(product.name).toBe(name);
    expect(product.description).toBe(description);
    expect(product.price).toBe(price);
    expect(product.variants).toEqual(variants);
  });
});