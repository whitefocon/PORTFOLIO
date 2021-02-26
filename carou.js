//code bibi
const img1 = document.getElementsByClassName("left_ph");
function carouselEnable() {
  const carou = document.getElementsByClassName("carousel-wrapper");
  console.log(carou);
  carou.classList.toggle("hidden");
}
img1.addEventListener("click", carouselEnable());
