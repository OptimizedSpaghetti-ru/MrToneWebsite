// Select the slider container, images, and dots
const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-image');
const sliderDots = document.querySelectorAll('.slider-dot');

// Set the initial active image and dot
let currentSlide = 0;
sliderImages[currentSlide].classList.add('active');
sliderDots[currentSlide].classList.add('active');

// Function to update the slider
function updateSlider() {
    // Remove the active class from all images and dots
    sliderImages.forEach((image) => {
        image.classList.remove('active');
    });
    sliderDots.forEach((dot) => {
        dot.classList.remove('active');
    });

    // Add the active class to the current image and dot
    sliderImages[currentSlide].classList.add('active');
    sliderDots[currentSlide].classList.add('active');
}

// Function to handle dot navigation
function handleDotNavigation(dotIndex) {
    currentSlide = dotIndex;
    updateSlider();
}

// Function to handle arrow navigation
function handleArrowNavigation(direction) {
    if (direction === 'next') {
        currentSlide++;
        if (currentSlide >= sliderImages.length) {
            currentSlide = 0;
        }
    } else if (direction === 'prev') {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = sliderImages.length - 1;
        }
    }
    updateSlider();
}

// Add event listeners to the dots
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        handleDotNavigation(index);
    });
});

// Add event listeners to the arrow navigation buttons
// Note: You'll need to add the arrow navigation buttons to your HTML
// const arrowNext = document.querySelector('.slider-arrow-next');
// const arrowPrev = document.querySelector('.slider-arrow-prev');

// arrowNext.addEventListener('click', () => {
//     handleArrowNavigation('next');
// });

// arrowPrev.addEventListener('click', () => {
//     handleArrowNavigation('prev');
// });

// Set up the slider to automatically change every 5 seconds
setInterval(() => {
    handleArrowNavigation('next');
}, 5000);