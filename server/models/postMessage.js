import mongoose from 'mongoose'

const postschema = mongoose.Schema(
    {
        title: String, 
        message: String, 
        creator: String, 
        tags: [String], 
        selectedFile: String, 
        likeCount: {
            type: Number, 
        },
        createdAt: {
            type:Date, 
            default: new Date(), 
        }

    });

    const PostMessage = mongoose.model("PostMessage", postschema) 
    export default PostMessage; 
