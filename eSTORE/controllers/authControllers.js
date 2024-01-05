const { hashedPassword, comparePassword } = require("../helpers/authHelpers");
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    //check user
    const existUser = await userModel.findOne({ email });

    // existing users
    if (existUser) {
      return res.status(200).send({
        success: false,
        message: "Already Registred Please Login ",
      });
    }

    //hashing password
    const hashedPass = await hashedPassword(password);

    //save
    const user =await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPass,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

//for login 
const loginController = async (req,res) =>{
 try{
  const {email,password}=req.body;
  //validation
  if(!email || !password){
    return res.status(404).send({
      success:true,
      message:"Invalid Email or Password !!"
    })
  }

  //checking user
  const user= await userModel.findOne({email});
  if(!user){
    return res.status(404).send({
      success:false,
      message:"Email Does't Exits !!"
    })
  }

  const match = await comparePassword(password,user.password);
  if(!match){
    return res.status(200).send({
      success:false,
      message:"Invalid Password"
    });
  }

   //creating token 
   const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET,{
    expiresIn: "7d"
   });
   res.status(200).send({
    success:true,
    message:"Login Successfully",
    user: {
      name:user.name,
      email:user.email,
      phone :user.phone,
      address: user.address,
    },
    token
   });

 }catch(error){
  console.log(error);
  res.status(500).send({
    success:false,
    message:'Error Occurring during login',
    error
  })

 }
};



module.exports = { registerController, loginController };
