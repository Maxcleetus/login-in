const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://maxcleetus:UswKIaMQTEog5RCS@datas.vei9u.mongodb.net/datas?retryWrites=true&w=majority&appName=datas")
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

const datal = new mongoose.model("list",LogInSchema)
module.exports=datal