const { bollywoodData, hollywoodData, fitnessData, foodData } = require("../dummyData")

const bollywoodController =(req,res)=>{
    res.send(bollywoodData)
    }

const hollywoodController =(req,res)=>{
        res.send(hollywoodData)
        }
        

const fitnessController =(req,res)=>{
            res.send(fitnessData)
            }
            const foodController =(req,res)=>{
                res.send(foodData)
                }

module.exports={bollywoodController,hollywoodController,fitnessController,foodController};