const mongoose= require('mongoose');
const colors =require('colors');
const connectDB = async () =>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to MongoDb Database ${conn.connection.host}`.bgCyan.white);
    }catch(error)
    {
        console.log(`Error in MongoDB ${error}`.bgRed.white);
    }
};

module.exports = connectDB;