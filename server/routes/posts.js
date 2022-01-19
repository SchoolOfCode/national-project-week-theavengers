import express from "express";
//Import models..
const router = express.Router();

/* GET posts listing. */
router.get("/", function (req, res) {
  //Get all Posts...
  const allPosts = getPosts();
  res.json({ 'success': true, 'payload': allPosts });
});

router.get("/:id", function(req,res){
  //Get Post by ID
  // get the id out of the url as a number
  const id = Number(req.params.id);
  // get a post with that id
  const found = getPostById(id);
  res.json({ 'success': true, 'payload': found });
})

router.post("/", function(req,res){
  //Create new post..
  const data = req.body;
  // add the new post to the posts
  createPost(data);
  // respond with { success: Boolean, payload: data }
  res.json({ success: true, payload: data });
})

router.delete("/:id", function(req,res){
  //Delete post by Id
  const id = Number(req.params.id);
  // delete the post with that id
  const deletedPost = deletePost(id);
  // respond with { success: Boolean, payload: deletedRecipe }
  res.json({ success: true, payload: deletedPost }); 
})


export default router;
