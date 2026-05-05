//Setting variables
const news = document.getElementById("info")
const update = document.getElementById("curent");
const reset = document.getElementById("reset");
const log = document.getElementById("textInfo");
//Random number generator
let X = Math.floor(Math.random() * 100);
let Y = '';
if (X <= 10) { Y = 'Number is low'} 
else if (X > 10 && X <= 80) 
{ Y = 'Number is Good interval'} 
else { Y = 'Number is high'}
let Z = ["Quad",1,"Car",1,"Bike",2];
Z.join(" - ");

//Functions with variables
function Add() {
update.innerHTML= "Car_Suzuki Kizashi, Quad_ Honda Recon, Bike_ Cannondale Trail";
update.style.fontSize = "1.3rem";
update.style.color = "blue";
document.getElementById("textA").innerHTML = "Text was displayed for vehicles";
document.getElementById("textA").style.fontSize = "1.3rem";
document.getElementById("textA").style.color = "white";
}
function Plus() {
news.innerHTML= "All new information is below";
update.style.fontSize = "1.3rem";
update.style.color = "red";
document.getElementById("textB").innerHTML = "Text was displayed for information." + " " + "Random number: " + " " 
+ X + " " + Y;
document.getElementById("textInfo").style.fontSize = "1.3rem";
document.getElementById("textInfo").style.color = "white";
}
function Reset() { 
update.innerHTML= "Click to get information";
news.innerHTML= "Click for current vehicles";
}
function Log() {
log.innerHTML= "Vehicle Log" + " " + Z;
log.style.fontSize = "1.3rem";
log.style.color = "white";
}

//Event Listeners
update.addEventListener("mousedown", Add);
news.addEventListener("mousedown", Plus);
log.addEventListener("mousedown", Log);

//RESET button
reset.addEventListener("mousedown", Reset);