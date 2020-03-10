const apiURL = "htpss://api.openweathermap.org/data/2.5/weather?id=2172797"

fetch(apiURL)
.then(
    response => {
        return response.json()
    }
)
.then(
    jsObject => {
console.log(jsObject);
document.querySelector('#current-temp')
.textContent = jsObject.main.temp;

let image = 
'htpps'
jsObject.weather[0].icon +
'.png';

document.querySelector('#weather-icon')
    .setAttribute('src', image);

    let alt = jsObject.wether[0].description
document.querySelector('#weather-icon')
    .setAttribute('alt', alt);

    /*optimized*/


}
);