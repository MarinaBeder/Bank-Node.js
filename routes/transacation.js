const{Router}=require('express');
const userRouter2=Router();
const userController2 =require('../controllers/transacation')
userRouter2.get('/:visaNumberfrom',userController2.getTransacationByVisaNumber);


module.exports={userRouter2};
