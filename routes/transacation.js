const{Router}=require('express');
const userRouter2=Router();
const userController2 =require('../controllers/transacation')

userRouter2.get('/',userController2.getAlltranscation);

module.exports={userRouter2};
