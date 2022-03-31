const request=require('request')
const constants=require('../config')

const weather_data=(address,callback)=>{
    const url=constants.openweathermap.Base_Url + encodeURIComponent(address) + '&appid=' + constants.openweathermap.Secret_key
    console.log(url)
    request({url,json:true},(error,{body})=>
    {
        console.log(body)
        if(error)
        {
            callback('cant fetch data')
        }
        else{
            // console.log(body)
            callback(undefined,{
                temprature:body.main.temp-273.15,
                city_name:body.name,
                description:body.weather[0].description

            })
        }
    })
}
module.exports=weather_data