import express from 'express';
import User from '../models/user.js';

const router = express.Router();


export default router.post('/',async (req,res)=>{
 
  const { username , password , company }  = req.body;

  if(!(username,password)){
    return res.status(401).send('please put the username , password');
  }
   try{
   const newUser = new User({ username , password , company });
   await newUser.save();
       if(newUser){
             return res.status(200).send(`user ${username} created `);
       }else{
             return res.status(401).send(`user not creted`);
       }
   }catch(err){
         console.log(err)
    }
    
  
})
