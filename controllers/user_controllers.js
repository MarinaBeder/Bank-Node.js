const {User} = require('../models/users');



const getAllUsers = async (req,res)=>{
    try {const allUsers= await User.find({});
    res.status(200).send(allUsers);
        
    } catch (error) {
        res.status(400).send(error);
    }
    
};
module.exports={
       getAllUsers,
       };
