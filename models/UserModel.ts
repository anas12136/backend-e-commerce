import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

export const UserModel = mongoose.model('UserModel',UserSchema)