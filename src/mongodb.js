const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/datas")
.then(()=>{
    console.log("mongodb-connected")
})
.catch(()=>{
    console.log("failed-to-connected")
})

const LogInSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const datal = new mongoose.model("dataaas",LogInSchema)
module.exports=datal