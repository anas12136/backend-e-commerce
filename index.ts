import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {router} from './routes/Router'
import cors from 'cors'
import passport from 'passport';
import session from 'express-session';
import connectMongoDBSession from 'connect-mongodb-session';

const MongoDBStore = connectMongoDBSession(session);

dotenv.config()
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(passport.initialize());

const MONGODB = process.env.MONGODB_URI
mongoose.connect(MONGODB!).then(
    ()=>{
        console.log("MONGODB IS CONNECTED");
        
    }
).catch((e)=>{
    console.log(e.message);
    
})

const store = new MongoDBStore({
    uri: process.env.MONGO_URI!,
    collection: 'sessions'
  });
  
  // Catch errors
  store.on('error', (error) => {
    console.log(error);
  });

app.set('trust proxy', 1) 
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: { secure: false }
}))



const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`SERVER IS LISTENING ON PORT: ${port}`);
    
})

app.use("/api", router )
