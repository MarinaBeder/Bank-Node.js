const {User} = require('../models/users');

const addUser=async (req,res)=>{
    try {      
        const user =await User.create(req.body);

  res.status(200).send(user);
      
  } catch (error) {
      res.status(400).send(error);
  }
  

 };

module.exports={
   addUser,
      };
