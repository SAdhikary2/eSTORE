const bcrypt = require('bcryptjs');

exports.hashedPassword= async(password)=>{
    try{
        const saltRounds=10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }catch(error){
        console.log(error);
    }
};

exports.comparePassword=async (password,hashedPassword) =>{
    return bcrypt.compare(password,hashedPassword);
}
