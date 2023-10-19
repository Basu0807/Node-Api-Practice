const middleware=(req,res,next)=>{
console.log("All Clear")

next();
}

module.exports=middleware;