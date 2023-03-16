const express = require("express")
const app=express()
const port = process.env.PORT || 8001;
require("./db")
const User=require('./Schema');
const cors=require('cors');

app.use(express.json())
app.use(cors())



app.get("/",(req,res)=>{
    res.send("Hello Home")
})


app.post("/register",async(req,res)=>{
    const {name,email,organisation,password}=req.body;

    try {
        const result = User({
            name,email,organisation,password
        })
        const data = await result.save()
        res.status(200).json(data)
        res.send("done")
    } catch (error) {
        res.status(401).send(error)
    }
})
app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await User.findOne({email})
        if (password==user.password) {
            res.status(200).send("Hello")
        }else{
            res.status(400).send("Invalid Input")
        }
    } catch (error) {
        res.send(error)
    }
})


app.get("/users",async(req,res)=>{
    try {
        const userData= await User.find()
        res.send(userData)
    } catch (error) {
        res.status(404).send(error)
        
    }
})

app.get("/user/:id",async(req,res)=>{
    try {
        const {id} =req.params;
        const user = await User.findById({_id:id})
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send("something wrong")
    }
})

app.patch("/user/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const updateUser= await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send(updateUser)
    } catch (error) {
        res.status(400).send(error)
    }
})
app.delete("/deleteUser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteUser = await User.findByIdAndDelete({_id:id})
        res.status(200).send(deleteUser)
    } catch (error) {
        res.status(400).send(error)
    }
})
app.listen(port,()=>{
    console.log(`Server run on PORT ${port}`)
})