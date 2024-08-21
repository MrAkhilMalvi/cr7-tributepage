// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Animation duration in ms
    once: true, // Whether animation should happen only once - while scrolling down
});

// Initialize Smooth Scroll
var scroll = new SmoothScroll('a.smooth-scroll', {
    speed: 800,
    offset: 0,
});
