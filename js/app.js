const API_KEY =`113019b44b38e49641e9a43136744ea2`;
const searchTemperature =()=>{
    const city=document.getElementById("city-name").value ;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displaySearch(data))
}
const setInnerText =(id,text) =>{
    document.getElementById(id).innerText = text
}
const displaySearch =temperature =>{
    setInnerText("city",temperature.name);
    setInnerText("temperature",temperature.main.temp);
    setInnerText("condition",temperature.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("img-icon");
    imgIcon.setAttribute("src",url);
}