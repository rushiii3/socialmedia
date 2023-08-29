const Product = require('../Models/ProductModel');
const asyncHandler = require('express-async-handler')
const getProduct = asyncHandler(async(req,res) => {
    try {
      const product = await Product.find({});
      res.status(200).json(product);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  })

  const getProductById = asyncHandler(async(req,res) => {
    try {
      const {id} = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  })

  const UpdateProductById = asyncHandler(async(req,res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id,req.body);
      if(!product){
        res.status(404).json({message:"ID not Found !"});
      }
      const productUpdate = await Product.findById(id);
      res.status(200).json(productUpdate);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  })
const DeleteProductById = asyncHandler(async(req,res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
      if(!product){
        res.status(404);
      throw new Error("ID not Found !");
        
      }else{
        res.status(200).json({message:"Deleted successfully"});
      }
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  })

  const CreateProduct = asyncHandler(async(req,res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  })

  module.exports = {
    getProduct,
    getProductById,
    UpdateProductById,
    DeleteProductById,
    CreateProduct
  }