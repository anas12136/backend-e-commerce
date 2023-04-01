import { UserModel } from "../models/UserModel"
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'

export const facebookLogin = (req:any,res:any)=>{
    
        // Successful authentication, redirect to home page or send JWT token
    

}

export const googleLogin = (req:any,res:any)=>{
    // Successful authentication, redirect to home page or send JWT token
    
}

export const signupController = async(req:any, res:any)=>{
   try {
    const findUser = await UserModel.findOne({email: req.body.email})

    if(findUser){
    res.status(404).send("User Already Exists!");
    }
    const salt = await bcrypt.genSalt(10);
    const {firstName, lastName, email} = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const createUser = await UserModel.create({
        firstName,
        lastName,
        email,
        password : hashedPassword
    })

    res.send(createUser)
   } catch (error:any) {
    console.log(error)
    res.send(error)
   }

}

export const loginController = async(req:any, res:any)=>{
    try {
        const {email}= req.body
        const findUser = await UserModel.findOne({
            email
            
        })
        if(!findUser){
            return res.status(404).json({ message: 'User not found' });
            
        }
        
        const comparedPassword = bcrypt.compareSync(req.body.password, findUser.password)
        console.log(comparedPassword)
        if (!comparedPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const jwtToken = process.env.JWT_SECRET
          const token = jwt.sign({ email }, jwtToken!, { expiresIn: '1h' });
        return res.status(200).json({message: findUser, token})
    } catch (error) {
        res.send(error)
    }
}