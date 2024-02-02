const express = require('express');
const {registerController,loginController, forgotPasswordController} = require('../controllers/authControllers');
const {requireSignIn, isAdmin} = require('../middlewares/authMiddleware');


//router object
const router = express.Router()

//routing

//for registration
router.post('/register',registerController);
//for login
router.post("/login",loginController);

//for forgot password
router.post('/forgot-password',forgotPasswordController);


//protected routes for acceessing the dashboard
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

//protected admin route 
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});





module.exports=router;