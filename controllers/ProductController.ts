import { ProductModel } from "../models/ProductModel"

export const createProductController= async (req: any,res:any)=>{
   try {
    const AddProduct = await ProductModel.create({
        title: req.body.title,
        price: req.body.price,
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        } 
    })
    const protuctToShow={
        id: AddProduct.id,
        title: AddProduct.title,
        price: AddProduct.price,
        image: AddProduct.image?.contentType

    }
    res.send( protuctToShow)
   } catch (error:any) {
    res.status(500).send(error.message)
   }
}
export const deleteProduct = async (req:any, res:any)=>{
    const deleteProduct = await ProductModel.findByIdAndDelete({_id: req.params.id})
    res.send(deleteProduct)
}
export const editProduct = async (req:any, res:any)=>{
   try {
    const editProduct = await ProductModel.findByIdAndUpdate(req.params.id,req.body)
    if(!editProduct){
        
     return res.status(404).send('User not found');
    }
    res.send(editProduct)
   } catch (error: any) {
    res.status(500).send(error.message);
   }
    
} 