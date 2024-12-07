import express from 'express';
import checkuser from '../controllers/checkuser.js';
import addEmployee from '../controllers/addEmployee.js'

const router = express.Router();

export default router.post('/',async (req,res)=>{
 
  const { email , firstname , lastname , dep }  = req.body;

  if(!(firstname , lastname)){
    return res.status(404).send('please put the username , password');
  }
  try{
    const user = await checkuser(email);
    await addEmployee(user._id,{firstname , lastname , dep})
    return res.status(201).json({
            message: `Employee ${firstname} ${lastname} added successfully`,
            employee: { firstname, lastname, dep }
        });
  }catch(err){
      console.log(err)
      return res.status(401).send(`employee not added`);
  } 
})
