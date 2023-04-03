import { CartModel } from "../models/CartModel"
import { ProductModel } from "../models/ProductModel"

export const cartController = async(req: any ,res :any)=>{
    
    try {
        const product = await ProductModel.findById(req.params.id)

    if(product){
        const cart = await CartModel.create({
            productName: product.title,
            price: product.price,
            quantity: req.body.quantity,
            total: product.price * req.body.quantity,
            sessionId: req.session.id,
            giftWrap: req.body.giftWrap,
            giftNote: req.body.giftNote
        })
        return res.status(200).json({cartItem: cart})
    }
    } catch (error) {
     console.log(error)   
    }
    
}
export const cartGetController = async(req:any, res:any)=>{

    const cartItems = await CartModel.find({sessionId: req.session.id})
    if(cartItems){
        res.status(200).json(cartItems)
    }

}