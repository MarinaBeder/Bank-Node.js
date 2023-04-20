
const mongoose = require('mongoose');
 
const transacationSchema=new mongoose.Schema({
  
   
    visaNumberto: {
        type:Number,
        required:true,
    },
    visaNumberfrom: {
        type:Number,
        required:true,
    },
  
    amount:{
        type:Number,
        required:true,
    },
  
    
});

const Transacation =mongoose.model('Transacation',transacationSchema);

module.exports={ Transacation, };


