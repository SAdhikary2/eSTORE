const express = require('express');
const {registerController,loginController, testController} = require('../controllers/authControllers');
const requireSignIn = require('../middlewares/authMiddleware');


//router object
const router = express.Router()

//routing

//for registration
router.post('/register',registerController);
router.post("/login",loginController);






module.exports=router;