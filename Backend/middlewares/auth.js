import jwt from "jsonwebtoken"


const auth = async (req,res,next)=>{
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if(!token){
        return res.status(401).json({
            message : "No token Provided"
        })
      }
      const decoded = jwt.verify(token,process.env.JWT_SECRET);
     
      req.user = decoded; // contians id and email
      next();


        
    } catch (error) {
        return res.status(401).json({
            message : "invalid token"
        })
        
    }
}