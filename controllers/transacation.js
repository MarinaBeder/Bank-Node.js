const {User} = require('../models/users');
const {Transacation} = require('../models/transacation');
const getTransacationByVisaNumber = async(req,res)=>{//
 
    try {
        const alltransacation= await Transacation.find({visaNumberfrom:req.params.visaNumberfrom});
        if(alltransacation==null){
            res.status(404).send('no operation of tranction');
    
          }
          else{res.status(200).send(alltransacation)};
    
        
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports={
  getTransacationByVisaNumber,
       
};
