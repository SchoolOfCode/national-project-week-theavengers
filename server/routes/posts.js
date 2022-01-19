import express from "express";
//Import models..
const router = express.Router();

/* GET posts listing. */
router.get("/", function (req, res) {
  //Get all Posts...
});

router.get("/:id", function(req,res){
  //Get Post by ID
})

router.post("/", function(req,res){
  //Create new post..
})

router.delete("/:id", function(req,res){
  //Delete post by Id
})


export default router;
