import express  from "express";
import { createProductController, deleteProduct, editProduct } from "../controllers/ProductController";
import { HomePage } from "../controllers/HomeController";
import multer from 'multer'
import passport from "passport";
import { facebookLogin, googleLogin, loginController, signupController } from "../controllers/AuthController";
import { cartController, cartGetController } from "../controllers/cartController";
import { createBlog, deleteBlog, getBlog, updateBlog } from "../controllers/BlogController";

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
router.put('/editProduct/:id',upload.single('image.data'),editProduct)

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

//cart
router.post('/cart/:id',cartController)
router.get('/cart', cartGetController)


//Blog
router.get('/blog',getBlog)
router.post('/blog',upload.single('image.data'), createBlog)
router.put('/blog/:id',upload.single('image.data'),updateBlog)
router.delete('/blog/:id',deleteBlog)