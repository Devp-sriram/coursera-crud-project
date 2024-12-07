import express from 'express';
import User from '../models/user.js';

const router = express.Router();


export default router.post('/',async (req,res)=>{
 
  const { email , password , company }  = req.body;

  if(!(email,password)){
    return res.status(401).send('please put the username , password');
  }
   try{
   const newUser = new User({ email , password , company });
   await newUser.save();
       if(newUser){
             return res.status(200).send(`user created `);
       }else{
             return res.status(401).send(`user not creted`);
       }
   }catch(err){
         console.log(err)
    }
    
  
})
