const express=require('express')
const jwt=require('jsonwebtoken')
const app=express()
app.listen(2000)
const key='Jeenie'
app.get('/',(req,res)=>{
  res.send("Hii..I am Jarvis Enter your name to get JWT token after enter token in url to verify your JWT token and redirect ")

})

app.get('/:name',(req,res)=>{
  const name=req.params.name;
  const token=jwt.sign({name},key);
  res.send(token);
})

app.get('/:token',(req,res)=>{
  const token=req.params.token;
  jwt.verify(token,key,(err,decode)=>{
    if(err){
      res.status(404).send("Invalid token")
    }
    else{
      res.send("User authenticated")
    }
  })
})