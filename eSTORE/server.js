const express=require("express");
const colors =require('colors');
const dotenv=require('dotenv')
const app = express();
const morgan = require('morgan');
const connectDB  = require("./config/db");
const authRoutes=require('./routes/authRoutes')
const categoryRoute= require('./routes/categoryRoute'); 
const cors=require('cors');

//configure env 
dotenv.config();

//database config 
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/v1/auth',authRoutes);
app.use("/api/v1/category",categoryRoute)

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to my ecommerce website  </h1>")
});

const PORT =process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server lisening on ${process.env.DEV_MODE} mode at ${PORT}`.bgMagenta.white);
});

