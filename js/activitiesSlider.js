let a_slideIndex = 1;

function a_showSlides(n) {
  let i;
  let a_slides = document.getElementsByClassName("activities-slider-slide");
  if (n > a_slides.length) {a_slideIndex = 1}
  if (n < 1) {a_slideIndex = a_slides.length}
  for (i = 0; i < a_slides.length; i++) {
    // slides[i].style.display = "none";
  }
  a_slides[slideIndex-1].style.display = "block";
}
showSlides(a_slideIndex);

// Next/previous controls
function aplusSlides(n) {
  a_showSlides(a_slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  a_showSlides(a_slideIndex = n);
}

