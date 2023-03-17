import { ProductModel } from "../models/ProductModel"

export const createProductController= async (req: any,res:any)=>{
    const AddProduct = await ProductModel.create({
        title: req.body.title,
        price: req.body.price,
    })
    res.send( AddProduct)
}
export const deleteProduct = async (req:any, res:any)=>{
    const deleteProduct = await ProductModel.findByIdAndDelete({_id: req.params.id})
    res.send(deleteProduct)
}
export const editProduct = async (req:any, res:any)=>{
    const editProduct = await ProductModel.findByIdAndUpdate({_id: req.params.id},{title: req.body.title, price:req.body.price})
    const final = editProduct;
    res.send(final)
}