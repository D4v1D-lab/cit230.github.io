const currentDate = new Date();
console.log(currentDate);

const currentYear = currentDate.getFullYear();
console.log(currentYear);

document.getElementById("currentYear").innerHTML = currentYear;

const string = document.lastModified;

console.log(string);
document.getElementById("lastModification").innerHTML = string;