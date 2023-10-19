const { bollywoodData, hollywoodData, fitnessData, foodData, TecData } = require("../dummyData")

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
                const TecController =(req,res)=>{
                    res.send(TecData)
                    }

module.exports={bollywoodController,hollywoodController,fitnessController,foodController,TecController};