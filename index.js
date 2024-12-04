const express = require('express')
const connectDb = require("./config/db");
const cors = require("cors");

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors({origin:"*"}));



connectDb();


app.get("/" ,(req,res)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});
