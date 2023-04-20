const{Router}=require('express');
const userRouter2=Router();
const userController2 =require('../controllers/transacation')


userRouter2.get('/',userController2.getAlltranscation);


userRouter2.post('/',userController2.transacationOperation);//take information from req.body



module.exports={userRouter2};
