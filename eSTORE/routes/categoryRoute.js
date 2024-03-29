const express= require('express');
const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware');
const createCategoryController = require('../controllers/CategoryController');

const router = express.Router();


//routes
router.post('/create-category',requireSignIn,isAdmin,createCategoryController);



module.exports=router;