const mongoose=require("mongoose")
const URL = "mongodb://127.0.0.1:27017/website"

mongoose.connect(URL).then(()=>{
    console.log("DB Connect")
}).catch((e)=>{
    console.log(e.message)
})