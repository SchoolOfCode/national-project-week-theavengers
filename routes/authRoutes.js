import express from 'express'
import {createUser, getUsers, getUserById, deleteUserByID, getUserByEmail} from '../models/authentication.js'

const router = express.Router();

router.post("/", async function(req,res){

    const user = await getUserByEmail(req.body.email);
    
    if(user.length === 0) {
        const newUser = req.body
         let returnedUser = await createUser(newUser)
        res.json({ 'success': true, 'payload': returnedUser })
    } else {
        return res.json({'success': false, 'payload': 'Email in use. Please sign in.'})
    }
    
  })



router.get("/",  async function (req, res) {
    console.log(req)
    if( req.query) {
        const found = await getUserByEmail(req.query.email);
        console.log(found)
    if(found.password === req.query.password) {
        res.json({ 'success': true, 'payload': found });
    } else {
        res.status(422).json({message: "Invalid username or password"})
    }
    return
    }
  const allUsers = await getUsers();
  res.json({ 'success': true, 'payload': allUsers });
});

router.get("/:id", async function(req,res){
  //Get user by ID
  // get the id out of the url as a number
  const id = Number(req.params.id);
  // get a user with that id
  const found = await getUserById(id);
  res.json({ 'success': true, 'payload': found });
})


router.delete("/:id",async function(req,res){
  //Delete user by Id
  const id = Number(req.params.id);
  // delete the user with that id
  const deleteduser = await deleteUserByID(id);
  // respond with { success: Boolean, payload: deletedRecipe }
  res.json({ success: true, payload: deleteduser }); 
})


export default router;