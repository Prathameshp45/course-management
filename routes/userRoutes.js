const express = require('express');
const userController = require('../controller/userController')
const userRoutes = express.Router();

userRoutes.post('/registerUser',userController.registerUser);
userRoutes.post('/loginUser',userController.loginUser);

userRoutes.get('/getAllUsers',userController.getAllUsers)
userRoutes.put('/user/:id',userController.updateUser);
userRoutes.delete('/user/:id',userController.deleteUser);

userRoutes.patch('/:id/assignCourse',userController.assignCourse);
userRoutes.get('/:id/course',userController.getUserCourse)
userRoutes.delete('/:id/deleteUserCourse',userController.deleteUserCourse);
userRoutes.patch('/:id/updateUserCourse',userController.updateUserCourse);


module.exports = userRoutes;
