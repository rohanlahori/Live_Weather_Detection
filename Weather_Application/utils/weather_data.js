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
            // console.log(body)
            callback(undefined,{
                temprature:body.main.temp-273.15,
                city_name:body.name,
                main:body.weather[0].main
            })
        }
    })
}
module.exports=weather_data