//Setting variables
const news = document.getElementById("info")
const update = document.getElementById("curent");
const reset = document.getElementById("reset");
const log = document.getElementById("textInfo");
const Operation = document.getElementById("Operation");
const resetI= document.getElementById("RESETI");
//Vehicle information variables
const carInfo = document.getElementById("carInfo");
const quadInfo = document.getElementById("quadInfo");
const bikeInfo = document.getElementById("bikeInfo");

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
  const N =Math.floor(Math.random() * 100);
 const CarInfoButton = (car,spec,miles) =>  {
    
    return `The ${car} has the following specifications: ${spec} with ${miles} miles on it. Random number: ${N}`;
    
}
  const QuadInfoButton = (quad,spec) =>  {
    return `The ${quad} has the following specifications: ${spec}. Random number: ${N}`;
    
}

  const BikeInfoButton = (bike,spec) =>  {
    return `The ${bike} has the following specifications: ${spec}. Random number: ${N}`;
    
}

  const equation = (year,miles) => {
    const old = year - 2026;
    const length = miles;
    if (old > 15) { return "Vehicle is near retirement at " + old + " years old."} else if
    (old <=15 && old > 7) { return "Vehicle is aged and needs more frequent maintenance at " + old + " years old."} 
    else { return "Vehicle is in good condition at " + old + " years old."}
    if (length > 100000) { return "Vehicle has high mileage at " + miles + " miles."} else {
    return "Vehicle has low mileage at " + length + " miles."}
    }

  
const displayCar = CarInfoButton("Suzuki Kizashi", "2012 model S", "80,000 miles");
const displayQuad = QuadInfoButton("Honda Recon", "2021 model");
const displayBike = BikeInfoButton("Cannondale Trail", "Habit");
const displayEquation = equation(2012, 80000);
//Event Listeners for vehicle information
function displayCarInfo() { 
    carInfo.innerHTML = displayCar;
    carInfo.style.fontSize = "1.3rem";
}
carInfo.addEventListener("mousedown", displayCarInfo);
function displayQuadInfo() {
    quadInfo.innerHTML = displayQuad;
    quadInfo.style.fontSize = "1.3rem";
}
quadInfo.addEventListener("mousedown", displayQuadInfo);
function displayBikeInfo() {
    bikeInfo.innerHTML = displayBike;
    bikeInfo.style.fontSize = "1.3rem";
}
bikeInfo.addEventListener("mousedown", displayBikeInfo);

function addEquation() {
    Operation.innerHTML = displayEquation;
    Operation.style.fontSize = "1.3rem";
}

function resetInfo() {
    Operation.innerHTML = "Click for operator information for year 2012 at 80,000 miles";
}
//Event Listeners for buttons
update.addEventListener("mousedown", Add);
news.addEventListener("mousedown", Plus);
log.addEventListener("mousedown", Log);
Operation.addEventListener("mousedown", addEquation);
resetI.addEventListener("mousedown", resetInfo);

//RESET button
reset.addEventListener("mousedown", Reset);