let updateYear = document.querySelector(".copyright span");
const d = new Date();
const year = d.getFullYear(); 
updateYear.innerText = year;