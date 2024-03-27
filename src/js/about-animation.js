function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    var element = document.querySelector('.fade-in-animation');
    if (isInViewport(element)) {
        element.style.opacity = '1'; // Start the animation when element enters the viewport
        window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener once animation starts
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);