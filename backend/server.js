const express=require("express");
const colors=require("colors");
const dotenv=require("dotenv").config();
const morgan=require("morgan");
const rootroutes=require("./routes/rootroutes");
const movieroute=require("./routes/moviesroutes");
const connectDB=require("./config/db")
const PORT=process.env.PORT || 6000 || 8080;
const app=express();
// app.get("/",(req,res)=>{
//     res.send("api is working");
// });
app.use("/",rootroutes);

app.use('/movieslist',movieroute);
connectDB();
app.listen(PORT,()=>{
    console.log(`Server is running on https://localhost:${PORT}`.bgBlue.white);
});