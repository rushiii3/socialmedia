const Product = require('../Models/ProductModel');
const getProduct = async(req,res) => {
    try {
      const product = await Product.find({});
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message:error.message});
    }
  }

  const getProductById = async(req,res) => {
    try {
      const {id} = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message:error.message});
    }
  }

  const UpdateProductById = async(req,res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id,req.body);
      if(!product){
        res.status(404).json({message:"ID not Found !"});
      }
      const productUpdate = await Product.findById(id);
      res.status(200).json(productUpdate);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message:error.message});
    }
  }
const DeleteProductById = async(req,res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
      if(!product){
        res.status(404).json({message:"ID not Found !"});
      }else{
        res.status(200).json({message:"Deleted successfully"});
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message:error.message});
    }
  }

  const CreateProduct = async(req,res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message:error.message});
    }
  }

  module.exports = {
    getProduct,
    getProductById,
    UpdateProductById,
    DeleteProductById,
    CreateProduct
  }