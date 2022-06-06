 // When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("sticky_menu");
var line = document.getElementById("sticky_line");
var title = document.getElementById("sticky_title");
var body = document.getElementById("sticky_body");
var slider = document.getElementById("sticky_slideshow");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky_menu");
    line.classList.add("sticky_line");
    if(document.title != "MRI Together | Global workshop on open science and reproducible MR research") {
      title.classList.add("sticky_title");
      body.classList.add("sticky_body_other");
    }
    else {
    body.classList.add("sticky_body_main");
    slider.classList.add("sticky_slideshow");
    }

  } else {
    header.classList.remove("sticky_menu");
    line.classList.remove("sticky_line");
    if(document.title != "MRI Together | Global workshop on open science and reproducible MR research") {
      title.classList.remove("sticky_title");
      body.classList.remove("sticky_body_other");
    }
    else {
    body.classList.remove("sticky_body_main");
    slider.classList.remove("sticky_slideshow");
    }
  }
}