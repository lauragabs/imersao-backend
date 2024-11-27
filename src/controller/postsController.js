import {getPosts, createPost, updatePost } from "../models/postModels.js";
import fs from "fs";
import generateDescriptionGemini from "../services/geminiServices.js";

export async function listPosts(req, res) {
    const posts = await getPosts();
    res.status(200).json(posts);
}

export async function createNewPosts(req, res){
    const newPost = req.body;
    try{
        const postCreated = await createPost(newPost);
        res.status(201).json(postCreated);
    }catch (error){
        console.error(error.message);
        res.status(500).json({'Error':'Request failure'});
    }
}

export async function uploadImage(req, res){
    const newPost = {
        descricao:"",
        imgUrl: req.file.originalname,
        alt: ""
    }

    try{
        const postCreated = await createPost(newPost);
        const updatedImage = `uploads/${postCreated.insertedId}.png`;
        fs.renameSync(req.file.path, updatedImage);
        res.status(201).json(postCreated);
    }catch (error){
        console.error(error.message);
        res.status(500).json({'Error':'Request failure'});
    }
}

export async function updateNewPost(req, res){
    const id = req.params.id;
    const urlImage = `https://localhost:3000/${id}.png`;

    
    try{
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await generateDescriptionGemini(imageBuffer)

        const postUpdated = {
            imgUrl: urlImage,
            descricao : descricao,
            alt: req.body.alt
        }
    

        const postCreated = await updatePost(id, postUpdated);
        
        res.status(201).json(postCreated);
    }catch (error){
        console.error(error.message);
        res.status(500).json({'Error':'Request failure'});
    }
}