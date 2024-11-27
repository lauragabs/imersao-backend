import 'dotenv/config';
import { ObjectId } from 'mongodb';
import connectToDatabase from '../config/dbConfig.js';

const connection = await connectToDatabase(process.env.STRING_CONNECTION);

export async function getPosts(){
    const db = connection.db('imersao-alura');
    const collection = db.collection('posts');
    return collection.find().toArray();
}

export async function createPost(newPost){
    const db = connection.db('imersao-alura');
    const collection = db.collection('posts');
    return collection.insertOne(newPost);
}

export async function updatePost(id, updatedPost){
    const db = connection.db('imersao-alura');
    const collection = db.collection('posts');
    const objectId = ObjectId.createFromHexString(id);
    return collection.updateOne({_id:new ObjectId(id)},{$set:updatedPost});
}