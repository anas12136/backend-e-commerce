import express  from "express";
import { createProductController, deleteProduct, editProduct } from "../controllers/ProductController";
import { HomePage } from "../controllers/HomeController";
import multer from 'multer'
import passport from "passport";
import { facebookLogin, googleLogin, loginController, signupController } from "../controllers/AuthController";

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

//Edit Product
router.patch('/editProduct/:id',editProduct)

//Social login

// Facebook authentication route
router.get('/auth/facebook',
  passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }), facebookLogin)

// Google authentication route
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),googleLogin);

router.post('/signup',signupController);
router.get('/login', loginController)

