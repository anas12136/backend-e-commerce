import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    image:{
        data:{
            type: Buffer,
            required: true
        },
        contentType:{
            type:String,
            required: true
        }, 
    },
    

    title: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },

})

export const ProductModel = mongoose.model('ProductModel',ProductSchema)