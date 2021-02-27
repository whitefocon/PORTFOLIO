//code bibi
var img = document.querySelector(".left_ph");
var img2 = document.querySelector(".right_ph");

function carouselEnable() {
  document.querySelector(".carousel-wrapper").classList.toggle("hidden");
  img.classList.add("hidden");
  img2.classList.add("hidden");
}
img.addEventListener("click", carouselEnable);
img2.addEventListener("click", carouselEnable);
