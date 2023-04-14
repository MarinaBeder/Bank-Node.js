const {User} = require('../models/users');
const deleteUserByNationalId= async(req,res)=>{
   
    try {
        const user= await User.findOneAndDelete({nationalId:req.params.nationalId});
    
        if(user==null){
            res.status(404).send('user not found');
    
          }
          else{res.status(200).send("user is deleted")};
    } catch (error) {
        res.status(400).send(error);
        
    }
   
    
};
module.exports={
       deleteUserByNationalId,
      };
