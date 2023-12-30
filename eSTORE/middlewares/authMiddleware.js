const jwt = require('jsonwebtoken');

//protecting routes according to the token
const requireSignIn=async (req,res,next)=>{
    try{
        const decode = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        next();


    }catch(error){
        console.log(error);
    }
}

//for accessing the admin 




module.exports=requireSignIn;