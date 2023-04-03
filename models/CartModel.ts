import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    price:{
        type: Number,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    total: {
        type:String
    },
    giftNote:{
        type:String
    },
    giftWrap:{
        type: Boolean,
        default: false
    },
    sessionId:{
        type:String,
        required: true
    }

})

export const CartModel = mongoose.model('CartModel',CartSchema)