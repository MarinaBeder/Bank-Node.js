const {User} = require('../models/users');
const {Transacation} = require('../models/transacation');

const getAlltranscation = async (req,res)=>{
    try {
      const alltransacation= await Transacation.find({});
    res.status(200).send(alltransacation);
        
    } catch (error) {
        res.status(400).send(error);
    }
    
};

module.exports={
  getAlltranscation,
       
};
