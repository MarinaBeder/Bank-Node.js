const {User} = require('../models/users');
const {Transacation} = require('../models/transacation');

const getAlltransactionEqualthatAmount = async(req,res)=>{
 
    try {
        const alltransacation= await Transacation.find({amount:req.params.amount});
        if(alltransacation==null){
            res.status(404).send('no amount will be transaction like that');
    
          }
          else{res.status(200).send(alltransacation)};
    
        
    } catch (error) {
        res.status(400).send(error);
    }


}

module.exports={

  getAlltransactionEqualthatAmount,
       
};

