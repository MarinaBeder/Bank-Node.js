const express =require("express");
const app =express();
app.use(express.json());
const {userRouter}=require('./routes/user_router');
const {userRouter2}=require('./routes/transacation');
app.use('/api/user/',userRouter); 
app.use('/api/transaction/',userRouter2); 
module.exports={app}
