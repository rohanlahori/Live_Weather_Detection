const request=require('request')
const constants=require('../config')

const weather_data=(address,callback)=>{
    const url=constants.openweathermap.Base_Url + encodeURIComponent(address) + '&appid=' + constants.openweathermap.Secret_key
    console.log(url)
    request({url,json:true},(error,{body})=>
    {
        if(error)
        {
            callback('cant fetch data')
        }
        else{
            callback(undefined,{
                temprature:body.main.temp,
                city_name:body.name
            })
        }
    })
}
module.exports=weather_data