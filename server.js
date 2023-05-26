const express=require("express");
const env=require("dotenv");
const routes=require("./routes/employeeRoute")
const connectWithDb = require("./db/config");
const cors = require('cors')

const app=express();
app.use(cors());
//middleware to understand response
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

//mount all routes 
app.use("/",routes)
 

env.config();
app.listen(process.env.PORT,()=>{
    console.log("this is ready to go")
})
connectWithDb();
app.get("/",(request,response)=>{
    response.send('this is homepage')
})
