import { ProductModel } from "../models/ProductModel"

export const HomePage = (async (req:any,res:any)=>{

    const ListProducts = await ProductModel.find()
    
    res.send(ListProducts);

})