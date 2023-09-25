let form = document.querySelector("form")
let input = document.querySelector("input");
let name = document.querySelector("#name")
let temp = document.querySelector("#weather-temp");
let weatherdescription = document.querySelector("#weather-description");
let pressuretemp = document.querySelector("#pressure-temp");
let visibilitytemp = document.querySelector("#visibility-temp");
let Humiditytemp = document.querySelector("#Humidity-temp");
let airquality = document.querySelector("#air-quality");
let airdirection = document.querySelector("#air-direction");
let image = document.querySelector("#temp-icon")
let username = document.querySelector(".user-name")
let time = document.querySelector("#local-time");
let date = document.querySelector("#Date")
let feel = document.querySelector("#Feels-like")

const getweather = async(e)=>{
    e.preventDefault();
   try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5bc2c13f3e51477eb64172301232108&q=${input.value}&aqi=no`)
    const data = await response.json()
    name.innerText = data.location.name;
    temp.innerText = data.current.temp_c + "°C";
    weatherdescription.innerText = data.current.condition.text;
  pressuretemp.innerText = data.current.pressure_mb;
  visibilitytemp.innerText = data.current.vis_km + "Km";
  Humiditytemp.innerText = data.current.humidity +"%";
 airquality.innerText = data.current.wind_degree + "D";
 airdirection.innerText = data.current.wind_dir;
 image.setAttribute("src", data.current.condition.icon);
 time.innerText = data.location.localtime;
 username.innerText = input.value;
 feel.innerText = data.current.feelslike_c;
   } catch (error) {
    window.alert("Please Enter correct location")
   }
console.log(data)
form.reset();
 }

addEventListener("submit" , getweather)



let d=new Date();  
let day=d.getDate();  
let month=d.getMonth()+1;  
let year=d.getFullYear(); 
date.innerText = day+"-"+month+"-"+year;


