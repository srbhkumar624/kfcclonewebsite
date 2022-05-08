import { navbar,footer } from "../components/main.js";
document.getElementById("navbar1").innerHTML=navbar();
document.getElementById("footer1").innerHTML=footer();
document.getElementById("pop").addEventListener("click",openForm)

function openForm() {
    console.log("kundan")
    document.getElementById("popop").style.display = "block";
  }

  document.getElementById("btncancel").addEventListener("click",closeForm)
  function closeForm() {
    document.getElementById("popop").style.display = "none";
  }
//   go to map code
 document.getElementById("btnpop1").addEventListener("click",mymap)
 function mymap(){
     console.log("kundan")
     document.getElementById("popop").style.display = "none";
     document.getElementById("map").style.display ="block";
 }
 document.getElementById("btnpop2").addEventListener("click",mymap)
//  function mymap(){
//      console.log("kundan")
//      document.getElementById("popop").style.display = "none";
//      document.getElementById("map").style.display ="block";
//  }
 document.getElementById("btnpop3").addEventListener("click",mymap)
//  function mymap(){
//      console.log("kundan")
//      document.getElementById("popop").style.display = "none";
//      document.getElementById("map").style.display ="block";
//  }
 document.getElementById("btncancel1").addEventListener("click",closemap);
 function closemap(){
     console.log("kundan")
    document.getElementById("map").style.display ="none";
 }

//  go to previes page popop
document.getElementById("btnprevies").addEventListener("click",goprevies);
function goprevies(){
    console.log("kundan")
    document.getElementById("map").style.display ="none";
    document.getElementById("popop").style.display = "block";

}

//map
document.getElementById("input").addEventListener("click",wether);
function wether() {
    let city = document.getElementById("input").value;

   
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=c56983eed503562ad923043e4ac24f23`;
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            console.log("res", res)
            display(res)
        })
}
// location code
document.getElementById("btnlocation").addEventListener("click",getWeather)
function wetherlocation(lat,lon) {
         
           
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5881c4a70f1f474bc5289105d70aa1b5`;
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            console.log("res", res)
            display(res)
        })
}




function display(data) {

    let caintaner = document.getElementById("box");
    let map = document.getElementById("gmap_canvas");
    caintaner.innerHTML=null; 
    let city = document.createElement("p");
    city.innerText = `city:${data.name}`;
   
     caintaner.append(city);
     map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}
//  // ---------------------------code for gps-------------------------------
  function getWeather() {
    navigator.geolocation.getCurrentPosition(success);
  
    function success(position) {
      let crd = position.coords;
  
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
  
      wetherlocation(crd.latitude, crd.longitude);
    }
  }
//   bucket Section
let bucket=JSON.parse(localStorage.getItem("addToCart")) || [];
bucket.map(function(el){
    let x=el.price.split("₹");
    let currentPrice=+x[1];
    let z=document.getElementById("rupee").innerText.split("₹");
    let previousPrice=+z[1];
    let total=(previousPrice+currentPrice).toString();
    console.log(total);
    document.getElementById("noOfItem").innerText=bucket.length; 
    document.getElementById("rupee").innerText=`₹${total}`;
})
    
