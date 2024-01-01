const jwt = require('jsonwebtoken');
const userModel=require('../models/userModel')

//protecting routes according to the token
const requireSignIn=async (req,res,next)=>{
    try{
        const decode = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user = decode ;
        next();


    }catch(error){
        console.log(error);
    }
}

//for accessing the admin 
const isAdmin=async (req,res,next) =>{
    try{
        const user= await userModel.findById(req.user._id) ;
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message: "Unauthorized Acess",
            });
        }else{
            next();
        }

    }catch(error){
        res.status(401).send({
            success:false,
            error,
            message:"Error in Admin Middleware",
        })
    }
}



module.exports={requireSignIn , isAdmin};