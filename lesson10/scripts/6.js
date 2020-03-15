
  function adaptiveMenu() {
    var links = document.getElementById("navigation"); // menu display
    if (links.className === "navigation") {
        links.className += ".responsive";
    } else {
        links.className = "navigation";
    }
    
}
  
  const hambutton = document.querySelector(".ham");
  hambutton.addEventListener("click", toggleMenu, false);
  
  function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
  }
  
  document.querySelector('#current-temp').innerHTML = '50&deg;'; // weather summary
  document.querySelector('#wind-speed').innerHTML = '10mph';
  document.querySelector('#humidity').innerHTML = '10&percnt;';

    var temp, wind, humid, windchill;

    temp =parseInt(Math.random()*100);
    wind = parseInt(Math.random()*10);
    tempdeg = temp + "&deg;";
    windspeed = wind + "mph";
    humid = "15" + "&percnt;";
    
    
    if(temp <= 50 && wind >= 3) {
        windchill = 35.74 +  0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
        windchilldisplay = windchill.toFixed(0) + '&deg;'
    } else {
        // document.querySelector("#winddiv").style.display="none";
        windchilldisplay = tempdeg;
    }
    
    document.querySelector('#current-temp').innerHTML = tempdeg;
    document.querySelector('#wind-speed').innerHTML = windspeed;
    document.querySelector('#wind-chill').innerHTML = windchilldisplay;
    document.querySelector('#humidity').innerHTML = humid;

    
   
  

  
  
  