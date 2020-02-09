
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

document.querySelector('#current-temp').innerHTML = '50&deg;'; // 
document.querySelector('#wind-speed').innerHTML = '10mph';
document.querySelector('#humidity').innerHTML = '10&percnt;';


const hambutton = document.querySelector(".ham");// menu display
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}