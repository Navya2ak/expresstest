import express from "express"
//import usersrouting from "/home/navya/Desktop/starting/routes/users.js"
import mongoose from "mongoose"

import bodyParser from "body-parser"
const url='mongodb://localhost:5000/users'
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',()=>console.log("connected"))


// var Schema =mongoose.Schema
// var userdata=new Schema({
//     title:{type:String,required:true},
//     prize:Number,
//     author:String

// })

// const app=express()
// const port=5000
// app.use(bodyParser.json())
// app.use('/users',usersrouting)
// app.get('/',(req,res)=>res.send("HOME PAGE"))

// app.listen(port,()=>console.log(`server running on port:http://localhost:${port}`))


