const { bollywoodController, hollywoodController, fitnessController, foodController, TecController } = require('../Contoller/categoryController')

const blogrouter =require('express').Router()

blogrouter.get('/bollywood',bollywoodController)

blogrouter.get('/hollywood',hollywoodController)

blogrouter.get('/fitness',fitnessController)
blogrouter.get('/food',foodController)
blogrouter.get('/technology',TecController)


module.exports=blogrouter;