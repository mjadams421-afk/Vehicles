//Setting variables
const news = document.getElementById("info")
const update = document.getElementById("curent");
const reset = document.getElementById("reset");
//Functions with variables
function Add() {
update.innerHTML= "Car_Suzuki Kizashi, Quad_ Honda Recon, Bike_ Cannondale Trail";
update.style.fontSize = "1.3rem";
update.style.color = "blue";
}
function Plus() {
news.innerHTML= "All new information is below";
update.style.fontSize = "1.3rem";
update.style.color = "red";
}
function Reset() { 
update.removeEventListener("mousedown", Add);
news.removeEventListener("mousedown", Plus);
}
//Event Listeners

update.addEventListener("mousedown", Add);
news.addEventListener("mousedown", Plus);

//RESET button
reset.addEventListener("mousedown", Reset);