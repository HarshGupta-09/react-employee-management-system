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

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

userRouter.post("/signup", async (req, res) => {
    try {
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

  res.status(201).json({
    message: "Signup successful",
  });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
      message: "Server error",
    });
        
    }
 
});



userRouter.post("/signin", async (req, res) => {
  try {
    const result = signinSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Invalid input",
      });
    }

    const { email, password } = result.data;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});


export default userRouter;