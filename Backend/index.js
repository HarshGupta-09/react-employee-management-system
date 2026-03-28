import express from "express"
import cors from "cors"
import connectDB from "./config/db";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.get("/",(req,res)=>{
    res.json({
        msg : "Server ready"
    })
})








connectDB();

app.listen(3000,()=>{
    console.log("Server Running on Port 3000")
})