const { bollywoodController, hollywoodController, fitnessController, foodController } = require('../Contoller/categoryController')

const blogrouter =require('express').Router()

blogrouter.get('/bollywood',bollywoodController)

blogrouter.get('/hollywood',hollywoodController)

blogrouter.get('/fitness',fitnessController)
blogrouter.get('/food',foodController)

module.exports=blogrouter;