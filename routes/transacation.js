const{Router}=require('express');
const userRouter2=Router();
const userController2 =require('../controllers/transacation')


userRouter2.get('/amount/:amount',userController2.getAlltransactionEqualthatAmount);
module.exports={userRouter2};
