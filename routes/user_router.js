const{Router}=require('express');
const userRouter=Router();
const userController =require('../controllers/user_controllers')

userRouter.get('/',userController.getAllUsers);

userRouter.get('/:nationalId',userController.getUserByNationalId);

userRouter.post('/',userController.addUser);
userRouter2.get('/:visaNumberfrom',userController2.getTransacationByVisaNumber);

userRouter.put('/:nationalId',userController.updateInformationByNationalId);

userRouter.delete('/:nationalId',userController.deleteUserByNationalId);


module.exports={userRouter};
