import { BlogModel } from "../models/BlogModel"

export const createBlog =async(req:any, res:any)=>{

   try {
    const blogcreate = await BlogModel.create({
        title: req.body.title,
        description: req.body.description,
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        } 
    })
    const blogToShow={
        title: blogcreate.title,
        description: blogcreate.description,
        image : blogcreate.image?.contentType
    }
    res.status(200).json(blogToShow)

   } catch (error:any) {
    res.status(500).send(error.message)    
    console.log(error);
    
   }

}
export const updateBlog = async(req:any, res:any)=>{

    try {
        const updateBlog = await BlogModel.findByIdAndUpdate(req.params.id,{
            
            title: req.body.title,
            description: req.body.description,
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            } ,
            updated_at: Date.now(),
        },
        {new: true}
        )
        res.status(200).json(updateBlog)
    } catch (error:any) {
        res.status(400).send(error)
    }
    

}
export const getBlog = async(req:any, res:any)=>{

    try {
        const getBlog = await BlogModel.find()
        if(getBlog){
            res.status(200).json(getBlog)
        }
    } catch (error:any) {
        res.status(400).send(error)
    }
    

}
export const deleteBlog = async(req:any, res:any)=>{

    try {
        const deleteBlog = await BlogModel.findByIdAndDelete(req.params.id)
    if(deleteBlog){
        res.status(200).json(deleteBlog)
    }
    } catch (error:any) {
     res.status(400).send(error)   
    }

}