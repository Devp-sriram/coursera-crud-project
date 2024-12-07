import express from 'express';
import checkUser from '../controllers/checkuser.js'

const router = express.Router();

export default router.post('/',async (req,res)=>{
 
  const { email , password }  = req.body;

  if(!(email , password)){
    return res.status(401).send('please put the correct email , password');
  }

  const user = await checkUser(email);
  let pw = user.password;
  let employeeData = user.data
  console.log(pw)

      if(password === pw){
           return res.status(200).send(employeeData);
      }else{
           return res.status(401).send(`user not found`);
      }
  
})
