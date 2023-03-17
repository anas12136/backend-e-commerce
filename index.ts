import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {router} from './routes/Router'
import cors from 'cors'


dotenv.config()
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const port = 3333;
app.listen(port,()=>{
    console.log(`SERVER IS LISTENING ON PORT: ${port}`);
    
})

app.use("/api", router )

mongoose.connect("mongodb://localhost:27017/backend-e-commerce").then(
    ()=>{
        console.log("MONGODB IS CONNECTED");
        
    }
).catch((e)=>{
    console.log(e.message);
    
})