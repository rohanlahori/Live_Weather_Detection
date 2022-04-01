function submit()
{
    var city_name=document.getElementById('search').value;
    console.log(city_name);
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city_name+"&appid=5122ecc1ab7b13a5a41d8e7dcbfcd709";
    getapi(url);
    // console.log(url)
    // console.clear()
}
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data)
    var cur_temp=document.querySelector('#cur_temp')
    cur_temp.innerText=Math.round(data.main.temp-273.15)+"° C";
    var min_temp=document.querySelector('#min_temp')
    min_temp.innerText=Math.round(data.main.temp_min-273.15)+"° C";
    var max_temp=document.querySelector('#max_temp')
    max_temp.innerText=Math.round(data.main.temp_max-273.15)+"° C";
    var feels_like=document.querySelector('#feels_like')
    feels_like.innerText=Math.round(data.main.feels_like-273.15)+"° C";
    var city=document.querySelector('#city');
    city.innerText=data.name
    var description=document.querySelector('#description');
    description.innerText=data.weather[0].description
}

