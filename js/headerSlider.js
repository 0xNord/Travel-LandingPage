let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("header-slider-slide");
  let dots = document.getElementsByClassName("dot");
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

showSlides(slideIndex);
console.log(slideIndex);

// Next/previous controls
function plusSlides(n) {
  console.log(n);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  console.log(n);
  showSlides(slideIndex = n);
}

