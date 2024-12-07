import express from 'express'
import connectDb  from "./config/db.js"
import cors from "cors"
import login from './routes/login.js';
import signin from './routes/signin.js';
import addEmployee from './routes/addEmpolyee.js';

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

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});
