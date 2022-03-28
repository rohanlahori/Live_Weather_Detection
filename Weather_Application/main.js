const express=require('express')
const app=express()

app.use(express.json())
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('Weather application')
})
app.listen(3000,()=>{
    console.log('User is listening on this port')
})