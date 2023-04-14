const {User} = require('../models/users');


const addUser=async (req,res)=>{
    try {      
        const user =await User.create(req.body);

  res.status(200).send(user);
      
  } catch (error) {
      res.status(400).send(error);
  }
  

 };


const getAllUsers = async (req,res)=>{
    try {const allUsers= await User.find({});
    res.status(200).send(allUsers);
        
    } catch (error) {
        res.status(400).send(error);
    }
    
};
      
const updateInformationByNationalId= async(req,res)=>{
 
    try {
        const user= await User.findOne({nationalId:req.params.nationalId});
          if(user==null){
            res.status(404).send('user not found');
    
          }
        
          if(req.body.address){
            user.address=req.body.address;
          }
          if(req.body.job){
            user.job=req.body.job;
          }
          if(req.body.phone){
            user.phone=req.body.phone;
          }
          await user.save();
          res.status(200).send(user)
        
    } catch (error) {
        res.status(400).send(error);
    
    }
 
 
};

module.exports={
  addUser,
  updateInformationByNationalId,
   getAllUsers,

       
};


