const mongoose = require('mongoose');
 
const userSchema=new mongoose.Schema({
  
    nationalId:{
        type:Number,
        required:true,
    },
    visaNumber: {
        type:Number,
        required:true,
    },
    visaPassword: {
        type:Number,
        required:true,
    },
    endVisa: {
        type:Date,
        required:true,
    },
    balance:{
        type:Number,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    job:{
        type:String,
        required:true,
    },
    
  
   
});

const User =mongoose.model('User',userSchema);

module.exports={ User, };


