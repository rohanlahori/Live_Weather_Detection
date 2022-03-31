const express=require('express')
const hbs=require('hbs')
const { result } = require('lodash')
const path=require('path')
const app=express()
const static_files=path.join(__dirname,'./public')
const partials_path=path.join(__dirname,'./templates/partials')
const views_path=path.join(__dirname,'./templates/views')
const weather_data=require('./utils/weather_data')
app.use(express.static("static_files"))
app.set('viewengine','hbs')
app.set('views',views_path)
hbs.registerPartials(partials_path)
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
app.listen(5004,()=>{
    console.log('User Hit')
})