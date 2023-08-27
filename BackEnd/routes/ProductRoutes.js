const express = require("express");
const router = express.Router();
const Product = require('../Models/ProductModel');
const {getProduct, getProductById, UpdateProductById, DeleteProductById, CreateProduct} = require("../Controllers/ProductController")
//get all products
router.get('/product',getProduct);
  
router.get('/product/:id',getProductById);
  
  router.put('/product/:id',UpdateProductById);
  
  router.delete('/product/:id',DeleteProductById);
  
  router.post('/product',CreateProduct);

  module.exports = router;