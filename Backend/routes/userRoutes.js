import express from "express";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import z from "zod";

const userRouter = express.Router();

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(3),
});

userRouter.post("/signup", async (req, res) => {
  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Invalid input",
      error: result.error,
    });
  }

  const { name, email, password } = result.data;


  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  
  const hashedPassword = await bcrypt.hash(password, 10);


  await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  res.json({
    message: "Signup successful",
  });
});


userRouter.post("/signin",async(req,res)=>{
    const { email , password } = req.body;
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).json({
            message : "User with this email not found"
        })
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(401).json({
            message : "invalid password"
        })
    }
    const token = jwt.sign({
        id : user._id.toString(),
        
    },process.env.JWT_SecretKey);
    res.json({
        message : "Login Succesfully",
        token,
    })


})


export default userRouter;