import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js"; 
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
// Routes
app.use('/users',userRouter);



app.get("/",(req,res)=>{
    res.json({
        msg : "Server ready"
    })
})








connectDB();

app.listen(3000,()=>{
    console.log("Server Running on Port 3000")
})