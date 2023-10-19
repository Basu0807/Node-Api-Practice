// const http =require("http") //core module provide a inbuilt set of funtions and methods
const dummyData =require("./dummyData")

const details = JSON.stringify(dummyData)

const port =4000

// const app = http.createServer((req,res)=>{
// if(req.url==="/" && req.method==="GET"){
//    res.write("<h1>This is our table</h1>")
//    res.write("<table><tr><td>Name</td><td>Class</td><td>Age</td></tr></table>")
//    res.end()
// }
// else if(req.url ==="/comment" && req.method==="POST"){
//    res.write(details)
//    res.end()
// }
// else{
//    res.write("404 error found")
//    res.end()
// }
// })

// app.listen(port,()=>{
//   try {
//    console.log(`my server is running on port no. ${port}`);
   
//   } catch (error) {
//    console.log(`Error occured`);
//   }
// })

const express =require('express')
const blogrouter =require('./Router/blogrouter')
const userRoute = require("./Router/user")
const middleware = require("./Middleware/middleware")

const app =express();
app.use(middleware)
app.use('/category',blogrouter)
app.use('/user',userRoute)

app.get('/',(req,res)=>{
res.send("This is our HomePage")
console.log("Home page");
})

// app.post('/comment',(req,res)=>{
//    res.send(dummyData)
//    })

app.listen(port,()=>{
  try {
   console.log(`my server is running on port no. ${port}`);
   
  } catch (error) {
   console.log(`Error occured`);
  }
})

