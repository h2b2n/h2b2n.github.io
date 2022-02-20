
const APIKEY ="bac146c28ee76dd8d6015d2d4403ca73" ;
const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");

function GeoOk(posistion){
    const lat= posistion.coords.latitude ;
    const lon= posistion.coords.longitude;
   
    const wurl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
    fetch(wurl).then(response  => response.json().then(data =>{ 
        city.innerText = `In ${data.name},`;  
        const celsius = data.main.temp-273.15;
        weather.innerText = `${data.weather[0].main} ${celsius.toFixed(2)}°C`; 
    }));
}

function Geoerr(){
    alert("Cannot Find your location.");
}
navigator.geolocation.getCurrentPosition(GeoOk, Geoerr);