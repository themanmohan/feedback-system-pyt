const express=require("express")

const cors =require('cors')
const dbConnection=require("./config/db")
const feedBackRoute= require("./Route/FeedBack")
const app=express()

//connect dataBase
dbConnection()

//init midiileware

app.use(express.json({extended:false}))

//cross origin
 app.use(cors())

//Define Route 
app.use("/feedback",feedBackRoute)

app.listen(4000,(err,data)=>{
  console.log("working")
})