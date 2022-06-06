  let slideIndex = 0;
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

var theInterval;

function startSlide() {
    // theInterval = setInterval(showSlides, 4000);
}

function stopSlide() {
    clearInterval(theInterval);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
    // let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
    // dots[slideIndex-1].className += " active";
  slides[slideIndex-1].style.display = "flex"; 
  theInterval = setTimeout(showSlides, 5000); // Change image every 4 seconds
}

document.addEventListener("DOMContentLoaded", function(event) {
  
    // showSlides();
    // $('#sticky_slideshow').hover(function () {
    //     stopSlide();
    // }, function () {
    //     startSlide();
    // })
    $(document).ready(function(){
      $('.slideshow-container').slick({
        setting-name: setting-value
      });
    });
}); 