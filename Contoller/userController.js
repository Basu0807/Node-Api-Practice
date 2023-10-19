const signinController =(req,res)=>{
    res.send("This is signup page")
    }

const signoutController =(req,res)=>{
        res.send("This is signout page")
        }

const resetController =(req,res)=>{
            res.send("This is Reset page")
        }

module.exports={signinController,signoutController,resetController}