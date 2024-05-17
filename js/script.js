/*for the moving img*/
let slideIndex = 0;

showSlides();
var tempo = setInterval(showSlides, 2000); // Change image every 2 seconds

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function changeImage(texto) {
  slideIndex = texto - 1;
  showSlides();
  clearInterval(tempo);
}

const popup = document.querySelector(".popup");
const popupImage = document.getElementById("popupImage");
const popupDescription = document.getElementById("popupDescription");
const popupClose = document.querySelector(".popup-close");

function openPopup(element) {
  const src = element.src;
  const alt = element.alt;
  const description = element.dataset.description;

  popupImage.src = src;
  popupImage.alt = alt;
  popupDescription.textContent = description;

  popup.classList.add("active");
}

function closePopup() {
  popup.classList.remove("active");
}

popupClose.addEventListener("click", closePopup);
