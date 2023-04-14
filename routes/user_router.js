const{Router}=require('express');
const userRouter=Router();
const userController =require('../controllers/user_controllers')

//userRouter.get('/',userController.getAllUsers);

userRouter.post('/',userController.addUser);

//userRouter.get('/:nationalId',userController.getUserByNationalId);

userRouter.put('/:nationalId',userController.updateInformationByNationalId);

//userRouter.delete('/:nationalId',userController.deleteUserByNationalId);

module.exports={userRouter};
