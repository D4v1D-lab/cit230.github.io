function getWeatherData(cityId){
    const apiURLWeather= 'https://api.openweathermap.org/data/2.5/weather?id=' +
    cityId + '&appid=8651d910ecb3c494e290111362bfb700&units=imperial';
  
    fetch(apiURLWeather)
      .then(response => response.json())
      .then((jsObject) => {
          console.log(jsObject);
    
          let currentTemp = jsObject.main.temp;
          let windSpeed = jsObject.wind.speed;
          let windChill = 0;
    
          if (currentTemp < 50 && windSpeed > 3) {
            windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
          }
    
          document.getElementById("currentTemp").innerHTML = currentTemp.toFixed(0) + '&deg';
          document.getElementById("windSpeed").innerHTML = windSpeed.toFixed(0) + ' mph';
    
          if (windChill === 0) {
            document.getElementById("windChill").innerHTML = 'N/A';
          }
          else {
            document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg';
          }
    
          document.querySelector('#weatherDesc').textContent = jsObject.weather[0].main;
    
          let imageURL = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png';
    
          document.querySelector('#weatherImage').setAttribute('src', imageURL);
          document.querySelector('#weatherImage').setAttribute('alt', imageURL);
    
        });
    
    
      
        
    const apiURLForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=' +
    cityId + '&appid=8651d910ecb3c494e290111362bfb700&units=imperial';
    
  
    
    fetch(apiURLForecast)
        .then(response => response.json())
        .then((jsObject) => {
          let counter = 1;
          jsObject.list.forEach(
            forecast => {
              if (forecast.dt_txt.includes('18:00')) {
                let forecastDate = new Date(forecast.dt_txt.replace(' ', 'T'));
                let dayofweek = daysofweek[forecastDate.getDay()];
    
                document.getElementById(`day${counter}`).textContent = dayofweek;
    
                document.getElementById(`temp${counter}`).innerHTML = forecast.main.temp.toFixed(0) + '&deg';
                console.log(forecast);
                
                
                let imageURLForecast = 'https://openweathermap.org/img/wn/' + jsObject.list[counter].weather[0].icon + '.png';
    
                document.querySelector(`#weather${counter}`).setAttribute('src', imageURLForecast);
                
                console.log(imageURLForecast);
                counter++;
                
              }
            }
          );
          
        });
        
  }
  
  const daysofweek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  
  let currentDate = new Date();
  
  let year = currentDate.getFullYear();
  
  
  let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August', 
      'September',
      'October',
      'November',
      'December'
  ];
  
  let dayofweek = currentDate.getDay();
  
  
  let numberday = currentDate.getDate();
  
  let fullDate = daysofweek[dayofweek];
  
  console.log(fullDate); //Thursday
  
  fullDate += ", " + numberday + " " + months[currentDate.getMonth()] + " " + year;
  
  document.querySelector('#current-date').textContent = fullDate;
  
  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
  //document.getElementById("current-temp").innerHTML= "22&deg;F";
  //document.getElementById("wind-speed").innerHTML= "5 mph";
  //document.getElementById("humidity").innerHTML= "93%";
  
  
  
  
  
  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
  
  
  const hamButton = document.querySelector("#ham");
  
  hamButton.addEventListener("click", toggleMenu, false);
  
  function toggleMenu() {
      document.querySelector(".navigation").classList.toggle("responsive");
  }
  
  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
  
  let pday = new Date();
  let aside = document.querySelector('aside');
  if (pday.getDay() === 5) {
      aside.style.display = "block";
  }
  else {
      aside.style.display = "none";
  }