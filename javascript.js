const currentDate = new Date();
console.log(currentDate);

const currentYear = currentDate.getFullYear();
console.log(currentYear);

document.getElementById("currentYear").innerHTML = currentYear;