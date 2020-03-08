fetch('https://byui-cit230.github.io/weather/data/towndata.json')
.then( result => {
        return result.json();

    })

    .then(resultJSON =>{
        let towns = resultJSON.towns;
        console.log(towns);

        towns.forEach(
            town => {
                if (town.name === 'Fish Haven') {
                    document.querySelector('#fishHavenName').textContent = town.name;
                    document.querySelector('#fishHavenMotto').textContent = town.motto;
                    document.querySelector('#fishHavenYearFounded').textContent = `Year Founded: ${town.yearFounded}`;
                    document.querySelector('#fishHavenPopulation').textContent = `Population: ${town.currentPopulation}`;
                    document.querySelector('#fishHavenAnnualRainFall').textContent = `Annual Rainfall: ${town.averageRainfall}`;
                    document.querySelector('#fishHavenImage').setAttribute('src', `images/${town.photo}`);
                    document.querySelector('#fishHavenImage').setAttribute('alt', town.name);
                } else if (town.name === 'Preston') {
                    document.querySelector('#prestonName').textContent = town.name;
                    document.querySelector('#prestonMotto').textContent = town.motto;
                    document.querySelector('#prestonYearFounded').textContent = `Year Founded: ${town.yearFounded}`;
                    document.querySelector('#prestonPopulation').textContent = `Population: ${town.currentPopulation}`;
                    document.querySelector('#prestonAnnualRainFall').textContent = `Annual Rainfall: ${town.averageRainfall}`;
                    document.querySelector('#prestonImage').setAttribute('src', `images/${town.photo}`);
                    document.querySelector('#prestonImage').setAttribute('alt', town.name);
                } else if (town.name === 'Soda Springs') {
                    document.querySelector('#sodaSpringsName').textContent = town.name;
                    document.querySelector('#sodaSpringsMotto').textContent = town.motto;
                    document.querySelector('#sodaSpringsYearFounded').textContent = `Year Founded: ${town.yearFounded}`;
                    document.querySelector('#sodaSpringsPopulation').textContent = `Population: ${town.currentPopulation}`;
                    document.querySelector('#sodaSpringsAnnualRainFall').textContent = `Annual Rainfall: ${town.averageRainfall}`;
                    document.querySelector('#sodaSpringsImage').setAttribute('src', `images/${town.photo}`);
                    document.querySelector('#sodaSpringsImage').setAttribute('alt', town.name);
                }
            }
        );
    })
    

    function doInputOutput() {
        var date = new Date();
        var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
        var weekDay = weekDays[date.getDay()];
        var dayNum = date.getDate();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = months[date.getMonth()];
        var year = date.getUTCFullYear();
        var today = weekDay;
        var today_1 = weekDays[date.getDay()+1];
        var today_2  = weekDays[date.getDay()+2];
        var today_3 = weekDays[date.getDay()+3]; 
        var today_4 = weekDays[date.getDay()+4];
      
      
       
      
        let pday = new Date();
            let aside = document.querySelector('aside');
       if (pday.getDay() === 5) {
          aside.style.display ="block";
       }
       else {
         aside.style.display = "none";
       }
      
      
      
        var random = parseInt(Math.random() * 100);    
        
        var display = weekDay + ", " + dayNum + " " + month + " " + year;
      
        document.getElementById("curdate").innerHTML = display;
        document.getElementById("year").innerHTML = year;
        document.getElementById("day1").innerHTML = today;
        document.getElementById("day2").innerHTML = today_1;
        document.getElementById("day3").innerHTML = today_2;
        document.getElementById("day4").innerHTML = today_3;
        document.getElementById("day5").innerHTML = today_4;
        document.getElementById("tempH1").innerHTML = random;
        document.getElementById("tempH2").innerHTML = parseInt(Math.random() * 100);
        document.getElementById("tempH3").innerHTML = parseInt(Math.random() * 100);
        document.getElementById("tempH4").innerHTML = parseInt(Math.random() * 100);
        document.getElementById("tempH5").innerHTML = parseInt(Math.random() * 100);
        document.getElementById("tempL1").innerHTML = parseInt(Math.random() * 10);
        document.getElementById("tempL2").innerHTML = parseInt(Math.random() * 10);
        document.getElementById("tempL3").innerHTML = parseInt(Math.random() * 10);
        document.getElementById("tempL4").innerHTML = parseInt(Math.random() * 10);
        document.getElementById("tempL5").innerHTML = parseInt(Math.random() * 10);
      }
      var currentDate = new Date();
      var currentDateString;
      
      // get day of week
      var weekDayNumber = currentDate.getDay();
      
      var daysOfWeek = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
      ];
      
      var weekDay = daysOfWeek[weekDayNumber];
      
      currentDateString = weekDay + ', ';
      
      currentDateString += currentDate.getDate();
      
      var months = [
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
      
      var monthNumber = currentDate.getMonth();
      
      var month = months[monthNumber];
      
      currentDateString += ' ' + month;
      
      currentDateString += ' ' + currentDate.getFullYear();
      
      document.getElementById('currentDate').innerHTML = currentDateString; /*display date*/
    
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