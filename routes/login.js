import express from 'express';
import user from '../models/user.js';

const router = express.Router();

export default router.post('/',async (req,res)=>{
 
  const { username , password }  = req.body;

  if(!(username,password)){
    return res.status(401).send('please put the correct username , password');
  }

  const checkuser = await user.findOne({username,password});
  
      if(checkuser){
           return res.status(200).send(`welcome ${username}`);
      }else{
           return res.status(401).send(`user not found`);
      }
  
})
