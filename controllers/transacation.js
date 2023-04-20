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


const getAlltranscation = async (req,res)=>{
    try {
      const alltransacation= await Transacation.find({});
    res.status(200).send(alltransacation);
        
    } catch (error) {
        res.status(400).send(error);
    }
    
};


const transacationOperation= async(req,res)=>{
 
    try {
        
        //check if that visa {from} and {to} already exist
        const user1= await User.findOne({visaNumber:req.body.visaNumberfrom});
        const user2= await User.findOne({visaNumber:req.body.visaNumberto});
 
          if(user1==null){
            res.status(404).send('from not found');
    
          }
          else if(user2==null){
            res.status(404).send('to not found');
    
          }
        else{


          //check money
          if(req.body.amount){
            x= req.body.amount;//5 pounds
           
            if(x>user1.balance){ res.status(404).send('your money doesnot enough') }
           
           
            else{
            
              user1.balance=user1.balance-req.body.amount;//minus money from user from
              user2.balance=user2.balance+req.body.amount;
           
              //update balance user from user to 
               await user1.save();
                await user2.save(); 
               
                const transacation =await Transacation.create(req.body);//create new transacation in db
                res.status(200).send(transacation);
          
              
         
            
        }
          }
         
        }
    } catch (error) {
        res.status(400).send(error);
    
    }
 
 
};


module.exports={
  transacationOperation,
   getAlltranscation,
     getAlltransactionEqualthatAmount,
       };

