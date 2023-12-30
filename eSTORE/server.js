const express=require("express");
const colors =require('colors');
const dotenv=require('dotenv')
const app = express();
const morgan = require('morgan');
const connectDB  = require("./config/db");
const authRoutes=require('./routes/authRoutes')

//configure env 
dotenv.config();

//database config 
connectDB();

//middlewares
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/v1/auth',authRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to my ecommerce website  </h1>")
});

const PORT =process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server lisening on ${process.env.DEV_MODE} mode at ${PORT}`.bgMagenta.white);
});

