# E-commerce System API

This is a Restful API for E-commerce system that achieves create, update, delete and retrieve products and thier variants.

## Getting Started

To run this project locally, follow the instructions below:

## Prerequisites:
- Node.js (Version 12+)
- NPM (Node Package Manager)

## Installation:
- Clone the respository
  
git clone https://github.com/nagendra7/e-commerce-node.git

- Navigate to the project
  
cd e-commerce-node

- Install the dependencies
  
npm install

## Starting the server
- To start the server, run the following command:
npm start

The server will start running on : 'http://localhost:4000'

## API Endpoints

The following endpoints are available for interacting with the API:
### Get All Products
```
    URL: GET /products
    Description: Retrieves all products.
    Response Body:

json

[
  {
    "id": "product-1",
    "name": "Product 1",
    "description": "This is product 1",
    "price": 499,
    "variants": [
      {
        "name": "Variant 1",
        "sku": "variant-1",
        "additionalCost": 0,
        "stockCount": 100
      },
    ]
  },
]
```
### Get a Product
```
    URL: GET /products/:productId
    Description: Retrieves a specific product by ID.
    Parameters:
        :productId - The ID of the product.
    Response Body:

json

{
  "id": "product-1",
  "name": "Product 1",
  "description": "This is product 1",
  "price": 499,
  "variants": [
    {
      "name": "Variant 1",
      "sku": "variant-1",
      "additionalCost": 0,
      "stockCount": 100
    },
  ]
}
```

### Create a Product
```
    URL: POST /products
    Description: Creates a new product.
    Request Body:

json

{
  "name": "Product Name",
  "description": "Product Description",
  "price": 499,
  "variants": [
    {
      "name": "Variant 1",
      "sku": "variant-1",
      "additionalCost": 0,
      "stockCount": 100
    },
  ]
}
```

### Update a Product
```
    URL: PUT /products/:productId
    Description: Updates an existing product.
    Parameters:
        :productId - The ID of the product.
    Request Body:

json

{
  "name": "Product Name Updated",
  "description": "Product Description",
  "price": 499,
  "variants": [
    {
      "name": "Variant 1",
      "sku": "variant-1",
      "additionalCost": 0,
      "stockCount": 100
    },
  ]
}
```

### Delete a Product

    URL: DELETE /products/:productId
    Description: Deletes an existing product.
    Parameters:
        :productId - The ID of the product.


### Assumptions

    The SKU for each variant is unique.
    The API only supports JSON as the request/response format.

### Architecture

This project is built with Node.js and Express, a fast and minimalist web framework for Node.js. The application follows a simple MVC (Model-View-Controller) architecture.





