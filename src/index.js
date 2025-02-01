const express = require('express')
const app = express()
const path = require('path')
const datas = require('./mongodb')
app.use(express.json())
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
  res.render('login')
})

app.get('/signup',(req,res)=>{
  res.render('signup')
})

app.post('/signup',async(req,res)=>{
  const data = {
    name:req.body.name,
    password:req.body.password
  }
  await  datas.insertMany([data])
  console.log(data)
  res.render('home')
})

app.post('/login',async(req,res)=>{
  try{
   const dataa = await datas.findOne({name:req.body.name})
   if(dataa.password === req.body.password){
    console.log(dataa.password)
    console.log(req.body.password)
    res.render('home')
   }else{
    res.render('wrong')
   }
  }
  catch{
    res.render('wrong')
  }
})

const port = process.env.PORT || 3000

app.listen(port,()=>{
  console.log("server connected")  
})