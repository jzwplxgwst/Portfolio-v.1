// Check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add scroll event listener
window.addEventListener('scroll', function() {
    // Get all sections
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        // Add class 'visible' if the section is in the viewport
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
});