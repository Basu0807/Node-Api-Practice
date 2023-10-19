const { signinController, signoutController, resetController } = require('../Contoller/userController')

const userRoute = require('express').Router()

userRoute.get('/signin',signinController)
userRoute.get('/signout',signoutController)
userRoute.get('/reset',resetController)


        module.exports=userRoute;