document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Tab Switching Logic for Interactive Showcase ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const deviceContents = document.querySelectorAll('.device-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const deviceName = button.getAttribute('data-device');

            // Deactivate all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            deviceContents.forEach(content => content.classList.remove('active'));

            // Activate the clicked button
            button.classList.add('active');

            // Activate the corresponding content
            const targetContent = document.getElementById(`${deviceName}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // --- 2. Mobile Navigation Toggle ---
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Hide mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- 3. Form Submission (Client-Side Only) ---
    const signupForm = document.getElementById('signup-form');
    const formMessage = document.getElementById('form-message');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the default form submission

        // Basic validation
        const nameInput = signupForm.querySelector('input[type="text"]').value.trim();
        const emailInput = signupForm.querySelector('input[type="email"]').value.trim();

        if (nameInput === '' || emailInput === '') {
            alert('Please fill out all fields.');
            return;
        }

        // In a real application, you would send this data to a server here.
        console.log(`Submitting form: Name=${nameInput}, Email=${emailInput}`);

        // Display success message and hide the form
        signupForm.classList.add('hidden');
        formMessage.classList.remove('hidden');

        // Optional: Reset the form after a delay
        setTimeout(() => {
             signupForm.reset();
             signupForm.classList.remove('hidden');
             formMessage.classList.add('hidden');
        }, 5000);
    });

    // --- 4. Simple Testimonial Carousel ---
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    function updateCarousel() {
        testimonialItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonialItems.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
        updateCarousel();
    });

    // Initialize the carousel
    updateCarousel(); 
});