let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}