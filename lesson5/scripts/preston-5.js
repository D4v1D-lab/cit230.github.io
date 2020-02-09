document.querySelector('#current-temp').innerHTML = '50&deg;'; // 
document.querySelector('#wind-speed').innerHTML = '10mph';
document.querySelector('#humidity').innerHTML = '10&percnt;';


const hambutton = document.querySelector(".ham");// menu display
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}