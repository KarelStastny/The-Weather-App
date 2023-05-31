// const apiKey = "024489430bce7ca9795a31a111671049"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

// Hlídač stisknutí vyhledávacího tlačítka
searchBtn.addEventListener("click", () =>{
    // zavolání funkce a vypsání hodnot po stisknutí tlačítka
    checkWeather(searchBox.value)
})

// Natažení dat z api
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=024489430bce7ca9795a31a111671049`)
    var data = await response.json()

    // Hláka pokud se nenajde město
    if (response.status == 404){
        document.querySelector(".error").style.display = "block"
    } else 

    //Vypsání všech dat:
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
    document.querySelector(".max-temp").innerHTML = (data.main.temp_max)  + "°c" 
    document.querySelector(".min-temp").innerHTML = (data.main.temp_min)  + "°c" 
    document.querySelector(".feels-like").innerHTML = (data.main.feels_like)  + "°c" 
    document.querySelector(".pressure").innerHTML = (data.main.pressure) + "hPa"

    // Změna obrázku podle počasí
     if(data.weather[0].main == "Clouds"){
         weatherIcon.src = "images/clouds.png"
     }else if (data.weather[0].main == "Clear"){
         weatherIcon.src = "images/clear.png"
     }else if (data.weather[0].main == "Rain"){
         weatherIcon.src = "images/rain.png"
     }else if (data.weather[0].main == "Drizzle"){
         weatherIcon.src = "images/drizzle.png"
     }else if (data.weather[0].main == "Mist"){
         weatherIcon.src = "images/mist.png"
     }
 
    //  Zobrazení detailů a vymazání error hlášky
     document.querySelector(".weather").style.display = "block"
     document.querySelector(".error").style.display = "none"
}
