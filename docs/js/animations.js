// ========================================
// MODERN PORTFOLIO - ANIMATIONS & INTERACTIONS
// ========================================

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initHeaderScroll();
    initMobileMenu();
    initReadMore();
    initParallax();
    initProjectCards();
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section, #proyectos-web, #infografias, #locucion-comercial, #contactame');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });

    // Observe project cards with stagger effect
    const cards = document.querySelectorAll('.main-container-proyects');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe infographic cards
    const infographics = document.querySelectorAll('.min-infografia');
    infographics.forEach((infographic, index) => {
        infographic.style.opacity = '0';
        infographic.style.transform = 'scale(0.9)';
        infographic.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(infographic);
    });

    // Observe contact items
    const contacts = document.querySelectorAll('.contacto');
    contacts.forEach((contact, index) => {
        contact.style.opacity = '0';
        contact.style.transform = 'translateX(-30px)';
        contact.style.transition = `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`;
        observer.observe(contact);
    });
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================

function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for background effect
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// MOBILE MENU
// ========================================

function initMobileMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('active');
            navbar.classList.toggle('active');
            document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('active');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// ========================================
// READ MORE BUTTON
// ========================================

function initReadMore() {
    const readMoreBtn = document.getElementById('leer-mas');
    const masSection = document.getElementById('mas');

    if (readMoreBtn && masSection) {
        readMoreBtn.addEventListener('click', () => {
            if (masSection.classList.contains('active')) {
                masSection.classList.remove('active');
                readMoreBtn.textContent = 'Leer más';

                // Smooth scroll to biografia
                setTimeout(() => {
                    document.querySelector('.biografia').scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 100);
            } else {
                masSection.classList.add('active');
                readMoreBtn.textContent = 'Leer menos';

                // Smooth scroll to expanded content
                setTimeout(() => {
                    masSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 100);
            }
        });
    }
}

// ========================================
// PARALLAX EFFECT
// ========================================

function initParallax() {
    const computerImage = document.querySelector('.computer-image img');

    if (computerImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            computerImage.style.transform = `translateY(${rate}px)`;
        });
    }
}

// ========================================
// PROJECT CARDS INTERACTIONS
// ========================================

function initProjectCards() {
    const cards = document.querySelectorAll('.main-container-proyects');

    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// CURSOR GLOW EFFECT (Optional - Desktop only)
// ========================================

if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-glow');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add cursor glow styles
    const style = document.createElement('style');
    style.textContent = `
        .cursor-glow {
            position: fixed;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
            transition: opacity 0.3s ease;
        }

        .cursor-glow.hidden {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);

    // Hide cursor glow when hovering over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .contacto, .main-container-proyects');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hidden'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hidden'));
    });
}

// ========================================
// PERFORMANCE: Reduce animations on low-end devices
// ========================================

if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.documentElement.classList.add('reduce-motion');
}

// ========================================
// PAGE LOAD ANIMATION
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// CONSOLE EASTER EGG
// ========================================

console.log('%c👋 ¡Hola Developer!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cSi estás viendo esto, eres de los míos 😎', 'font-size: 14px; color: #a1a1a6;');
console.log('%c🚀 Portafolio construido con pasión por el código limpio', 'font-size: 12px; color: #667eea;');
console.log('%c📧 ¿Quieres colaborar? Contáctame!', 'font-size: 12px; color: #5e5ce6;');
