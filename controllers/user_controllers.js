const {users} = require('../models/users');
const Joi =require('joi');//to make vaildation more easier


const getAllUsers = (req,res)=>{
    res.send(users);
};
const addUser=(req,res)=>{
const user={
         id:users.length+1,
         nationalId:req.body.nationalId,
         visaNumber:req.body.visaNumber,
         visaPassword:req.body.visaPassword,
         endVisa:req.body.endVisa,
         balance:req.body.balance,
         address:req.body.address,
        job:req.body.job,
        phone:req.body.phone
     };
     users.push(user);
     res.send("this acoount is signup");
 };

 module.exports={
    getAllUsers,
    addUser,
       };