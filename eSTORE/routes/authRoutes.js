const express = require('express');
const {registerController,loginController, testController} = require('../controllers/authControllers');
const requireSignIn = require('../middlewares/authMiddleware');


//router object
const router = express.Router()

//routing

//for registration
router.post('/register',registerController);
router.post("/login",loginController);

//protected routes for acceessing the dashboard
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});





module.exports=router;