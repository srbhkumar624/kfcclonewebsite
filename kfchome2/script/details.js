import { navbar,footer } from "../components/main.js";
let navbar1 = document.getElementById("navbar");
navbar1.innerHTML = navbar();



let footer1 = document.getElementById("footer");
footer1.innerHTML = footer();

let chuk  = JSON.parse(localStorage.getItem("order")) || []





let details = JSON.parse(localStorage.getItem("details")) || []

let superman = "";
let email = "";
let mobilenum = ""
details.map(function(el)
{
  superman = el.name
  email = el.email;
  mobilenum = el.number;
})



let goodm = document.getElementById("goodm")
goodm.innerText = `Good Morning ${superman}`


let supermanname = document.getElementById("superman")
supermanname.innerText = superman;
let supermanemail = document.getElementById("supermanemail");
supermanemail.innerText = email;

let supermanmobile = document.getElementById("supermanmobile");
supermanmobile.innerText = mobilenum;



let tt = document.getElementById("tt");
let utkarsh = document.getElementById("utkarsh");
let oc = document.getElementById("oc")
let add1 = document.getElementById("address")
tt.addEventListener("click", ()=>{
    // utkarsh.classList.add("show")
})





let ttl1 = document.getElementById("tt1");
ttl1.addEventListener("click", ()=>{
    utkarsh.classList.add("show")
    oc.classList.add("show")
    add1.classList.remove("show")
    final.classList.remove("show")

})

let ttl2 = document.getElementById("tt2");
ttl2.addEventListener("click", ()=>{
    oc.classList.remove("show")
    add1.classList.add("show")
    utkarsh.classList.add("show")
    final.classList.remove("show")
})

let final = document.getElementById("final")
let tt3 = document.getElementById("tt3");
tt3.addEventListener("click", ()=>{
    utkarsh.classList.add("show");
    add1.classList.remove("show")
    final.classList.add("show")
    oc.classList.remove("show")
})



tt.addEventListener("click",()=>{
    window.location = ("details.html")
})







let loader = document.getElementById("preloader")
window.addEventListener("load", ()=>{
    loader.style.display = "none";
})


let ram = document.getElementById("ram")

ram.addEventListener("click", ()=>{
    window.location =("index1.html")
})

let swa=document.getElementById("buter");

swa.addEventListener("click", ()=>{
    window.location =("../index.html")
  localStorage.removeItem("details");
  localStorage.removeItem("order");

});

// bucket section
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