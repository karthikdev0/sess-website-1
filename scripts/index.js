var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



function myToggle(){
   var checkBox = document.getElementById("checkbox_toggle");
  var element = document.getElementById("my-slider");
  var serviceElement = document.getElementById("my-services");
  if (checkBox.checked == false){
    element.classList.remove("slideshow-container");
    element.classList.add("home-slider");
    serviceElement.classList.remove("my-services-section");

 } else {
     element.classList.add("slideshow-container");
     serviceElement.classList.add("my-services-section");

 }

}
