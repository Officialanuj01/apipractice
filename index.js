const search = document.getElementById("searchbox");
search.addEventListener("change",()=>{
    currentWeather(search.value)
})

function currentWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1342f8dd595eda677ca40143519800de`



fetch(url
).then((data) => data.json()).then((weather) => {
console.log(weather)
const locationName = document.getElementById("locationName")
locationName.innerHTML = weather.name

const temp = document.getElementById("temp")
const currentTemp = Math.floor(weather.main.temp-273)
temp.innerText = currentTemp + "\u00B0" + "c"

const weatherState = document.getElementById("weatherstate")
weatherState.innerText = weather.weather[0].main


const minTemp = document.getElementById("mintemp")
const valueMinTemp = Math.floor(weather.main.temp_min - 273)
minTemp.innerText = valueMinTemp + "\u00B0" + "c"

const maxTemp = document.getElementById("maxtemp")
const valueMaxTemp = Math.floor(weather.main.temp_max - 273)
maxTemp.innerText = valueMaxTemp + "\u00B0" + "c"

const days = ["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]
const months = ["January","February","March","April","May","June","July","Auguest","September","October","November","December"]

const dateData = new Date(weather.dt * 1000);
const date = dateData.getDate()


const day = dateData.getDay()

let dayName;
switch(day){
    case 1:
        dayName = "Monday"
    break;

    case 2:
        dayName = "Tuesday"
    break;

    case 3:
        dayName = "Wednesday"
    break;

    case 4:
        dayName = "Thrusday"
    break;

    case 5:
        dayName = "Friday"
    break;

    case 6:
        dayName = "Saturday"
    break;

    case 7:
        dayName = "Sunday"
    break;

    
}

const month = dateData.getMonth()

let monthName;
switch(month){
    case 1:
        dayName = "Monday"
    break;

    case 2:
        dayName = "February"
    break;

    case 3:
        dayName = "March"
    break;

    case 4:
        dayName = "April"
    break;

    case 5:
        dayName = "May"
    break;

    case 6:
        dayName = "June"
    break;

    case 7:
        dayName = "July"
    break;

    case 8:
        monthName = "Auguest"
    break

    case 9:
        monthName = "September"
    break;

    case 10:
        monthName = "October"
    break;

    case 11:
        monthName = "November"
    break;

    case 12:
        monthName = "December"

    
}








const year = dateData.getFullYear()

const DateAndTime = document.getElementById("dateandtime")
DateAndTime.innerHTML = `${dayName} ${date} ${monthName} ${year}`


})

}
