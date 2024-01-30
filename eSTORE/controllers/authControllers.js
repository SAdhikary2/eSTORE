const { hashedPassword, comparePassword } = require("../helpers/authHelpers");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address,answer } = req.body;
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
    if (!answer) {
      return res.send({ message: "Answer is Required" });
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
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPass,
      answer
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
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: true,
        message: "Invalid Email or Password !!",
      });
    }

    //checking user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email Does't Exits !!",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    //creating token
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error Occurring during login",
      error,
    });
  }
};




//for got password controller
const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newpassword } = req.body;
    if (!email) {
       res.status(400).send({ message: "Email is required " });
    }
    
    if (!answer) {
       res.status(400).send({ message: "answer is required " });
    }
    
    if (!newpassword) {
       res.status(400).send({ message: "newPassword is required " });
    }
    

    // checking user email
    const user = await userModel.findOne({ email, answer });

    //if user email not found in the database
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email or Answer ",
      });
    }

    //hashing password
    const hashed = await hashedPassword(newpassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Updated Successfully",
    });
  }catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong while updating the password",
      error,
    });
};
}
module.exports = {
  registerController,
  loginController,
  forgotPasswordController,
};
