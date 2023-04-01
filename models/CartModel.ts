import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    price:{
        type: Number,
    },
    quantity: {
        type: Number
    },
    total: {
        type:String
    },
    giftNote:{
        type:String
    },
    giftWrap:{
        type: Boolean
    }

})

export const CartModel = mongoose.model('CartModel',CartSchema)