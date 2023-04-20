const{Router}=require('express');
const userRouter2=Router();
const userController2 =require('../controllers/transacation')



userRouter2.get('/:visaNumberfrom',userController2.getTransacationByVisaNumber);

userRouter2.get('/amount/:amount',userController2.getAlltransactionEqualthatAmount);

userRouter2.get('/',userController2.getAlltranscation);


userRouter2.post('/',userController2.transacationOperation);//take information from req.body




module.exports={userRouter2};
