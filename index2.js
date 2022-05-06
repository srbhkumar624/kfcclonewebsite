
let loader = document.getElementById("preloader")
window.addEventListener("load", ()=>{
    loader.style.display = "none";
})
 




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("kfc-posters");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
   
  slides[slideIndex-1].style.display = "block";  
   
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

 