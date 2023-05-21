const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const images = slider.querySelectorAll('img');
let currentIndex = 0;

// Set the first image as active
images[currentIndex].classList.add('active');

// Show the next image
function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

// Show the previous image
function showPrevImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].classList.add('active');
}

// Add click event listeners to the buttons
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);