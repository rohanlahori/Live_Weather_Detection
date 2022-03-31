function submit()
{
    var city=document.getElementById('search').value;
    console.log(city)
    var temprature=document.getElementById('temprature');
    temprature.innerText="14";
    console.log(temprature)
    var description=document.getElementById('description').value
    console.log(description)

    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=5122ecc1ab7b13a5a41d8e7dcbfcd709";
    console.log(url)

}
