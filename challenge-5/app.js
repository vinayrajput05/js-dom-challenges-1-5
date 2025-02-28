/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carousel = document.getElementById('carousel');
const carouselTrack = document.getElementById('carouselTrack');
const caption = document.getElementById('caption');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carouselNav = document.getElementById('carouselNav');
const autoPlayButton = document.getElementById('autoPlayButton');
const timerDisplay = document.getElementById('timerDisplay');

const delay = 5000;
let activeIndex = 0;
let timeIntervalId = null;
let displayTimeIntervalId = null;
let remainingTime = delay / 1000


// Render initial carousel image
images.forEach((image, index) => {
  const img = document.createElement('img');
  img.setAttribute('src', image.url)
  img.className = 'carousel-slide'
  carouselTrack.appendChild(img)

  const indicator = document.createElement('div')
  indicator.className = 'carousel-indicator';
  indicator.setAttribute('onclick', `goToItem(${index})`)
  carouselNav.appendChild(indicator)
})
updateSlider();

function updateSlider() {
  carouselTrack.style.transform = `translateX(-${activeIndex * 100}%)`;

  caption.textContent = images[activeIndex].caption;

  const indicators = document.querySelectorAll('.carousel-indicator')
  indicators.forEach((item, index) => {
    item.classList.toggle('active', index === activeIndex)
  })
}

function nextItem() {
  activeIndex++
  activeIndex = activeIndex % images.length;
  updateSlider()
}
function prevItem() {
  activeIndex--
  activeIndex = (activeIndex + images.length) % images.length;
  updateSlider()
}

function goToItem(index) {
  activeIndex = index;
  updateSlider()
}
function updateCountdown() {
  timerDisplay.textContent = `Next slider in ${remainingTime}`
  remainingTime--;
  if (remainingTime < 0) {
    remainingTime = (delay - 1000) / 1000
  }
}

function toggleAutoPlay() {
  if (timeIntervalId === null) {
    timeIntervalId = setInterval(nextItem, delay)
    remainingTime = delay / 1000;
    updateCountdown();
    displayTimeIntervalId = setInterval(updateCountdown, 1000)
    autoPlayButton.textContent = 'Stop Auto Play'
  } else {
    clearInterval(timeIntervalId)
    clearInterval(displayTimeIntervalId)
    timeIntervalId = null
    displayTimeIntervalId = null
    timerDisplay.textContent = ''
    autoPlayButton.textContent = 'Start Auto Play'
  }
}

nextButton.addEventListener('click', nextItem)
prevButton.addEventListener('click', prevItem)
autoPlayButton.addEventListener('click', toggleAutoPlay)
