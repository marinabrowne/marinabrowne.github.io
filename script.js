// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function nextImage() {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].style.display = 'block';
}

setInterval(nextImage, 3000); // Change image every 3 seconds