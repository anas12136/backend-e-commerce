import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
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
    description:{
        type: String,
        required: true
    },
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export const BlogModel = mongoose.model('BlogModel',BlogSchema)