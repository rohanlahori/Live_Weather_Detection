const express=require('express')
const hbs=require('hbs')
const { result } = require('lodash')
const path=require('path')
const app=express()
const static_files=path.join(__dirname,'./public')
const weather_data=require('./utils/weather_data')
app.use(express.static("static_files"))
const axios=require('axios')
app.get('/',(req,res)=>{
    console.log("user_hitt")
    return res.sendFile(__dirname + "/static_files/test.html");
})
app.get('/weather',(req,res)=>{
    const address=req.query.address
    console.log(address)
    if(!address)
    {
        return res.send('provide valid address')
    }
    weather_data(address,(error,{temprature,city_name,description})=>{
        if(error)
        {
            return res.send(error)
        }
        else{
            console.log({temprature,city_name,description})
            return res.send({temprature,city_name,description})
        }
    })
})
app.listen(7000,()=>{
    console.log('User Hit')
})