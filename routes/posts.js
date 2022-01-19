import express from "express";
//Import models..
const router = express.Router();
import {createPost,getPostById, getPosts, deletePostById } from '../models/posts.js'

/* GET posts listing. */
router.get("/", async function (req, res) {
  //Get all Posts...
  const allPosts = await getPosts();
  res.json({ 'success': true, 'payload': allPosts });
});

router.get("/:id",async function(req,res){
  //Get Post by ID
  // get the id out of the url as a number
  const id = Number(req.params.id);
  // get a post with that id
  const found = await getPostById(id);
  res.json({ 'success': true, 'payload': found });
})

router.post("/",async function(req,res){
  //Create new post..
  const data = {
    text: req.body.text,
    timestamp: new Date().toLocaleString()
  }
  // add the new post to the posts
  createPost(data);
  // respond with { success: Boolean, payload: data }
  res.json({ success: true, payload: data});
})

router.delete("/:id",async function(req,res){
  //Delete post by Id
  const id = Number(req.params.id);
  // delete the post with that id
  const deletedPost = await deletePostById(id);
  // respond with { success: Boolean, payload: deletedRecipe }
  res.json({ success: true, payload: deletedPost }); 
})


export default router;
