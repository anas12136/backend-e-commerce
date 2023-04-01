import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {router} from './routes/Router'
import cors from 'cors'
import passport from 'passport';


dotenv.config()
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(passport.initialize());



const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`SERVER IS LISTENING ON PORT: ${port}`);
    
})

app.use("/api", router )
const MONGODB = process.env.MONGODB_URI
mongoose.connect(MONGODB!).then(
    ()=>{
        console.log("MONGODB IS CONNECTED");
        
    }
).catch((e)=>{
    console.log(e.message);
    
})