// Example: Smooth Scroll to Section on Button Click
document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButton = document.querySelector('a[href="#features"]');
    const signUpButton = document.querySelector('a[href="#signup"]');

    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }

    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll('#features');
        });
    }

    if (signUpButton) {
        signUpButton.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll('#signup');
        });
    }
});

// Example: Simple Hover Effect on Features (using vanilla JS, CSS transitions are preferred)
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');

    features.forEach(feature => {
        feature.addEventListener('mouseover', () => {
            feature.style.transform = 'translateY(-5px)';
        });

        feature.addEventListener('mouseout', () => {
            feature.style.transform = 'translateY(0)';
        });
    });
});

// AOS Initialization (if you're using AOS)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

// Example: Form Validation (if you have a form)
// (Add form elements to your HTML to use this)
/*
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const nameInput = form.querySelector('#name');
            const emailInput = form.querySelector('#email');

            if (!nameInput.value) {
                alert('Please enter your name.');
                e.preventDefault();
            }

            if (!emailInput.value || !emailInput.value.includes('@')) {
                alert('Please enter a valid email address.');
                e.preventDefault();
            }
        });
    }
});
*/

// Example: Change button text after click
document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.querySelector('a[href="#signup"]');
    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            signUpButton.textContent = 'Signing Up...';
            // Disable button to prevent multiple clicks
            signUpButton.style.pointerEvents = 'none';

            // Simulate a delay (replace with actual signup logic)
            setTimeout(function() {
                signUpButton.textContent = 'Signup Successful!';
                // Re-enable button
                signUpButton.style.pointerEvents = 'auto';
            }, 2000);
        });
    }
});