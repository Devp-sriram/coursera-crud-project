// dev dependencies
import express from 'express'
import cors from "cors"
// db , config
import connectDb  from "./config/db.js"
// routes
import login from './routes/login.js';
import signin from './routes/signin.js';
import addEmployee from './routes/addEmpolyee.js';
import updateEmployee from './routes/updateEmployee.js'
import deleteEmployee from './routes/deleteEmployee.js';

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors({origin:"*"}));

await connectDb();

app.get("/" ,(req,res)=>{
    res.send("hello world");
});
app.use('/login',login);
app.use('/signin',signin);
app.use('/addEmployee',addEmployee);
app.use('/updateEmployee',updateEmployee);
app.use('/deleteEmployee',deleteEmployee);

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});
