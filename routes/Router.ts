import express  from "express";
import { createProductController, deleteProduct, editProduct } from "../controllers/ProductController";
import { HomePage } from "../controllers/HomeController";

export const router = express.Router()
//Home Page
router.get('/',HomePage)

//Add Product
router.post('/addProduct',createProductController)

//Delete Product
router.delete('/deleteProduct/:id',deleteProduct)

//Edit Product
router.patch('/editProduct/:id',editProduct)


