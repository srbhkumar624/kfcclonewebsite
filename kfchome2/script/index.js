
import { navbar,footer } from "../components/main.js";
let navbar1 = document.getElementById("navbar");
navbar1.innerHTML = navbar();



let footer1 = document.getElementById("footer");
footer1.innerHTML = footer();


let checker = JSON.parse(localStorage.getItem("location")) || []
let picknik = JSON.parse(localStorage.getItem("pic")) || []






let check = document.getElementById("far")
let check1 =document.createElement("div")
check1.setAttribute("id", "for")
let div = document.createElement("img")
let  loc = document.createElement("p")
let  img = document.createElement("img");
let time = document.createElement("p");
let button = document.createElement("button")
button.innerText = "Change"

div.src = "https://online.kfc.co.in/static/media/GoogleMapLocation.c86d640b.svg";
loc.innerText = `${picknik} from: ${checker}`
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/OOjs_UI_icon_clock-destructive.svg/1200px-OOjs_UI_icon_clock-destructive.svg.png"
time.innerText = "Asap"
check1.append(div,loc,img,time,button);
button.addEventListener("click", ()=>{
    modal_container.classList.add("show")
})
check.append(check1);



const modal_container = document.getElementById("modal_container")
const close1 = document.getElementById("cross");

close1.addEventListener("click", ()=> {
    modal_container.classList.remove("show")
    // modal_containerr.classList.remove("show1")
})


let loader = document.getElementById("preloader")
window.addEventListener("load", ()=>{
    loader.style.display = "none";
})

let backd = document.getElementById("backd");
const cross1 = document.getElementById("cross1");
backd.addEventListener("click", ()=>{
    modal_containerr.classList.add("show1");
    // modal_container.classList.remove("show");
})


cross1.addEventListener("click", ()=>{
    modal_containerr.classList.remove("show1")
    modal_container.classList.remove("show")
})



// let modal_containerrr = document.getElementById("modal_containerrr")

// nip.addEventListener("click", ()=>{
//     modal_containerrr.classList.remove("show11")
// })




// const  modal_containerr = document.getElementById("modal_container1")

// let backd = document.getElementById("backd");
// backd.addEventListener("click", ()=>{
//     modal_containerr.classList.add("show1");
//     // modal_container.classList.remove("show");
// })

let tol = document.getElementById("nepw")
let modal_containerrr= document.getElementById("modal_containerrr")
tol.addEventListener("click", ()=>{
    modal_containerrr.classList.add("showw")
})

let cross11 = document.getElementById("cross11");
cross11.addEventListener("click", ()=>{
    modal_containerrr.classList.remove("showw");
    modal_containerr.classList.remove("show1")
    modal_container.classList.remove("show")

})



let slide = [{imgPro : "https://images.ctfassets.net/wtodlh47qxpt/5477Y6AToWWjDUgchkqn5l/644a80e35a990d1bee592811b278fddd/Wedmesday_banner_1440x396px.jpg?w=1360&fit=fill&fm=webp"},
          {imgPro : "https://images.ctfassets.net/wtodlh47qxpt/bwwtSv4zmZZm42c5wSg8Z/bd28ca73bbefa15b45f14c994e72ed03/Matchday_Banner_1440x396px.jpg?w=1360&fit=fill&fm=webp"},
          { imgPro : "https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/996c91ae970f53a25b6bba8036f97aff/Biryani_Banner_1440x396px.jpg?w=1360&fit=fill&fm=webp"},
          { imgPro : "https://images.ctfassets.net/wtodlh47qxpt/4w2NU51eNqAlF0S4k3YLTB/0872e046c202005f49e6c94489c8ce40/4Value_Burger_1440x396px.png?w=1360&fit=fill&fm=webp"},
          { imgPro : "https://images.ctfassets.net/wtodlh47qxpt/jxsYEVgrAX6liDnW8gxdW/17c8a5387706c5b3af41df18ab39361d/Express_pick_up_app_banner_1440x396.jpg?w=1360&fit=fill&fm=webp"},
] 

let imges = document.getElementById("images")
let i = 0;
let id ;
    let img1 = document.createElement("img");
    img1.setAttribute("class", "img1")
    let divv = document.createElement("div")
    let h1 = document.createElement("h1")
    h1.innerText = "WELCOME BACK, UTKARSH!";
    let h3 = document.createElement("p");
    h3.innerText = "My Acoount ------>"
    let img2 = document.createElement("img");
    divv.append(img2,h1,h3)
    divv.setAttribute("class", "care")
    img2.src = "https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png"
    id = setInterval(function()
    {
        if(i ===slide.length)
        {
            i =0
        }
        // imges.innerHTMl = null;
        img1.src = slide[i].imgPro;
        
        imges.append(img1,divv)

    i++

    }, 2000)



    let product = [{img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT181.jpg?ver=14.67",
                    title:"Match Of the Day",
                   
                   },

                   {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT115.jpg?ver=14.67",
                   title:"Match Of the Day",
                  
                  },
                  {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT116.jpg?ver=14.67",
                    title:"Match Of the Day",
                   
                   },
                   {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT84.jpg?ver=14.67",
                    title:"Match Of the Day",
                   
                   },
                   {img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=14.67",
                    title:"Match Of the Day",
                   
                   },
                   {img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT189.jpg?ver=14.67",
                    title:"Match Of the Day",
                   
                   },
                   {img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT175.jpg?ver=14.67",
                    title:"Match Of the Day",
                   
                   },
                   {img: "https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg",
                    title:"Match Of the Day",
                   
                   },



]


product.map(function(el){

let check = document.getElementById("grid")
let divy = document.createElement("div");
divy.setAttribute("class", "avvv")
let match = document.createElement("img")
let title = document.createElement("h4")
match.src = el.img;
title.innerText = el.title;
divy.append(match,title)
check.append(divy)




})

















// Weather just checking only
function getdata(e){
    e.preventDefault();
let form = document.getElementById("form1");
let city = form.city.value;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${form.city.value}&appid=b575f5026abe2051e67ce2e7f2c9090a`;

fetch(url).then(function(res)
{
    return res.json()
}) .then(function(res)
{
	console.log(res);
    append(res)
})
.catch(function(err)
{
    console.log(err)
})


}

function append(dat1)
{
    let divw = document.getElementById("container")
    let gmap = document.getElementById("gmap_canvas")
    let name1 = document.createElement("p")
    name1.innerText = `City ${dat1.name}`
    let buttu = document.createElement("button")
    buttu.innerText = `Add ${dat1.name} For Kfc`
    // let temp = document.createElement("p")
    // temp.innerText = `Min Temperature ${dat1.main.temp_min}`


    // let max = document.createElement("p")
    // max.innerText = `Max Temperature ${dat1.main.temp_max}`

    // let chek = document.createElement("p")
    // chek.innerText = `Temperature ${dat1.main.temp}`

    // let yup = document.createElement("p")
    // yup.innerText = `Humidity of the city ${dat1.main.humidity}`
   buttu.addEventListener("click",()=>{
       addtodata(dat1.name)
   })

    divw.append(name1,buttu)
   gmap.src = `https://maps.google.com/maps?q=${dat1.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

navigator.geolocation.getCurrentPosition(succes)


function succes(postion)
{
    let  crd = postion.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}




function addtodata(data1)
{
    localStorage.setItem("location", JSON.stringify(data1));
    window.location = ("index1.html");
}


let de = document.getElementById("de");
let di = document.getElementById("di");
let pi = document.getElementById("pi");



let pickin = document.getElementById("pickin")
let pickin1 = document.getElementById("pickin1");
let pickin2 = document.getElementById("pickin2");

let modal_containerr = document.getElementById("modal_containerr")
pickin.addEventListener("click", ()=>{
    modal_containerrr.classList.remove("showw");
    pi.classList.add("show")
    di.classList.remove("show");
    de.classList.remove("show")
    boloblue("Pick Up")
})

pickin1.addEventListener("click", ()=>{
    modal_containerrr.classList.remove("showw");
    di.classList.add("show");
    pi.classList.remove("show");
    de.classList.remove("show")
    boloblue("Dive In")
})

pickin2.addEventListener("click", ()=>{
    modal_containerrr.classList.remove("showw");
    de.classList.add("show");
    pi.classList.remove("show");
    di.classList.remove("show")
    boloblue("Delivery")
})


function boloblue(pickin)
{
  localStorage.setItem("pic", JSON.stringify(pickin))
}

let cot = document.getElementById("cot")
cot.innerText = `${picknik}`

let cot1 = document.getElementById("cot1");
cot1.innerText = `KFC ${checker}`


let edit1 = document.getElementById("edit1");
let edit2 = document.getElementById("edit2");


edit1.addEventListener("click", ()=>{
    modal_containerrr.classList.add("showw");
})

edit2.addEventListener("click", ()=>{
    modal_containerr.classList.add("show1");
})


de.addEventListener("click",()=>{
    modal_container.classList.add("show")
})


di.addEventListener("click", ()=>{
    modal_container.classList.add("show")
})


pi.addEventListener("click", ()=>{
    modal_container.classList.add("show")
})



let ram = document.getElementById("ram")

ram.addEventListener("click", ()=>{
    window.location =("index1.html")
})