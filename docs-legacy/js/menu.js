// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuIcon.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Scroll reveal for sections
    const sections = document.querySelectorAll('section');
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealSection);
    revealSection(); // Initial check

    // "¿Quién soy?" button toggle
    const quienSoyBtn = document.getElementById('quien-soy-btn');
    const heroDescription = document.getElementById('hero-description');

    if (quienSoyBtn && heroDescription) {
        quienSoyBtn.addEventListener('click', () => {
            if (heroDescription.style.display === 'none') {
                heroDescription.style.display = 'block';
                quienSoyBtn.textContent = 'Ocultar';
                // Smooth animation
                heroDescription.style.opacity = '0';
                setTimeout(() => {
                    heroDescription.style.transition = 'opacity 0.5s ease';
                    heroDescription.style.opacity = '1';
                }, 10);
            } else {
                heroDescription.style.opacity = '0';
                setTimeout(() => {
                    heroDescription.style.display = 'none';
                    quienSoyBtn.textContent = '¿Quién soy?';
                }, 500);
            }
        });
    }
});