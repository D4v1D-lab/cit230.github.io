const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  // document.querySelector('#weather_summary').style.top = '700px';
  document.querySelector(".navigation").classList.toggle("responsive");
}
