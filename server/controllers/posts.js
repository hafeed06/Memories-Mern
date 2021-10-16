import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find(); 
        console.log(postMessages);
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
        res.send("Failure")
    }
}
export const createPosts = async (req, res) => { 
    const post = req.body

    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}  

export const updatePosts = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Post with similar ID found")


    const updatePost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id}, {new: true})

    res.json(updatePost);

}

export const deletePosts = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post with similar ID found")
    await PostMessage.findByIdAndRemove(id)
    console.log("DELETE TRIGGERED");
    res.json("Post successfully Deleted");
}

export const likePost = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post with similar ID found")

    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true})

    res.json(updatedPost)
}