const news = document.getElementById("info")

const update = document.getElementById("curent");

function Add() {
update.innerHTML= "Car_Suzuki Kizashi, Quad_ Honda Recon, Bike_ Cannondale Trail";
}

function Plus() {
news.innerHTML= "All new information is below";
}


update.addEventListener("mousedown", Add);
news.addEventListener("mousedown", Plus);