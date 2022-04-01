function submit()
{
    var city_name=document.getElementById('search').value;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city_name+"&appid=5122ecc1ab7b13a5a41d8e7dcbfcd709";
    getapi(url);
    console.log(url)
    console.clear()
}
async function getapi(url) {
    console.log(url)
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
    var temprature=document.getElementById('temprature')
    temprature.innerText=Math.round(data.main.temp-273.15)+"° C"
    var city=document.getElementById('search').value;
    city.innerText=data.main.name
    console.log(city)
}

