import express  from "express";
import { createProductController, DeleteAll, deleteProduct, editProduct } from "../controllers/ProductController";
import { HomePage } from "../controllers/HomeController";
import multer from 'multer'

export const router = express.Router()
//Home Page
router.get('/',HomePage)


//Multer storage
const storage = multer.memoryStorage()
  const upload = multer({ storage: storage });

//Add Product
router.post('/addProduct',upload.single('image.data'),createProductController)

//Delete Product
router.delete('/deleteProduct/:id',deleteProduct)
router.delete('/deleteProducts',DeleteAll)

//Edit Product
router.patch('/editProduct/:id',editProduct)


