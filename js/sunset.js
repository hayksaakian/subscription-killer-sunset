// Sunset Site JavaScript - Show modal for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal instance
    const sunsetModal = new bootstrap.Modal(document.getElementById('sunsetModal'));
    
    // Add click event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('.interactive-element');
    
    interactiveElements.forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default action
            sunsetModal.show(); // Show the sunset modal
        });
    });
    
    // Also intercept any form submissions (if there were any)
    const forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            sunsetModal.show();
        });
    });
    
    // Intercept any other links that might navigate away (except external links)
    const internalLinks = document.querySelectorAll('a[href]:not([href^="http"]):not([href^="tel:"]):not([href^="mailto:"])');
    internalLinks.forEach(function(link) {
        if (!link.classList.contains('interactive-element')) {
            link.addEventListener('click', function(e) {
                // Only intercept if it's trying to go to another page
                if (link.getAttribute('href').startsWith('/') || link.getAttribute('href').startsWith('#')) {
                    if (link.getAttribute('href') !== '#' && link.getAttribute('href') !== '/') {
                        e.preventDefault();
                        sunsetModal.show();
                    }
                }
            });
        }
    });
});