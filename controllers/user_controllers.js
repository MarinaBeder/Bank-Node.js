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
const updateInformationById=(req,res)=>{
    const user = users.find(c=>c.nationalId === parseInt(req.params.nationalId));
    if(!user){
        res.status(404).send('This user doesnot exist ')
    }
     user.address=req.body.address,
        user.job=req.body.job,
        user.phone=req.body.phone

    res.send("information of this user is updated ");
};
const getUserByNationalId=(req,res)=>{
  const user = users.find(c=>c.nationalId === parseInt(req.params.nationalId));
console.log(req.params.nationalId);
  if(!user){
        res.status(404).send('This user doesnot exist ')
    }
    else{
        res.send(user);

    }

};
const deleteUserByNationalId=(req,res)=>{
    const user = users.find(c=>c.nationalId === parseInt(req.params.nationalId));
    if(!user){
          res.status(404).send('This user doesnot exist ')
      }
     const index =users.indexOf(user);
     users.splice(index,1);//delete one item
     res.send("user was deleted");
}

module.exports={
       getAllUsers,
       addUser,
       updateInformationByNationalId,
        getUserByNationalId,
        deleteUserByNationalId,

          };
