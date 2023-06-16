const request = require('supertest');
const app = require('../server');

describe('Endpoints', () => {
    test('should get all products', async () => {
      const response = await request(app).get('/api/products');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({"message": "Products fetched successfully", "products": []});
    });
  
    test('should create a new product', async () => {
      const productData = {
        name: 'Marvel T-shirt',
        description: 'Marvel Avengers T-shirt',
        price: 499,
        variants: [],
      };
  
      const response = await request(app).post('/api/products').send(productData);
  
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Product created successfully');
      expect(response.body.product).toHaveProperty('id');
      expect(response.body.product.name).toBe(productData.name);
      expect(response.body.product.description).toBe(productData.description);
      expect(response.body.product.price).toBe(productData.price);
      expect(response.body.product.variants).toEqual(productData.variants);
    });
  
    test('should search products by name, description, or variant name', async () => {

      const searchQuery = 'test';
      const response = await request(app).get(`/api/products/search?query=${searchQuery}`);
    
      expect(response.status).toBe(404);
      expect(response.body.message).toBe('No products found');
    });
  });