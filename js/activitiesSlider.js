let a_slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("activities-slider-slide");
  if (n > slides.length) {a_slideIndex = 1}
  if (n < 1) {a_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
showSlides(a_slideIndex);

// Next/previous controls
function aplusSlides(n) {
  showSlides(a_slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(a_slideIndex = n);
}

