// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Navbar background on scroll
function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add scroll-animate class to elements that should animate
function addScrollAnimations() {
    const animateElements = [
        '.about-content',
        '.skill-category',
        '.project-card',
        '.contact-item',
        '.resume-preview'
    ];
    
    animateElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add('scroll-animate');
        });
    });
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Create mailto link (since this is a static site)
        const mailtoLink = `mailto:shivdayal.15aug@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form
        this.reset();
        
        // Show success message
        alert('Thank you for your message! Your email client should open with the pre-filled message.');
    });
}

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill tag hover effects
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Resume button click tracking
document.querySelectorAll('a[href="resume.pdf"]').forEach(button => {
    button.addEventListener('click', function() {
        // Track resume views/downloads (could be integrated with analytics)
        console.log('Resume accessed:', this.textContent.includes('Download') ? 'download' : 'view');
    });
});

// Typing animation for home title
function typeWriter() {
    const titleElement = document.querySelector('.home-title .highlight');
    if (!titleElement) return;
    
    const text = 'Shivdayal Singh';
    titleElement.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    // Start typing animation after a delay
    setTimeout(type, 1000);
}

// Parallax effect for home section
function parallaxEffect() {
    const homeSection = document.querySelector('.home');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (homeSection) {
        homeSection.style.transform = `translateY(${rate}px)`;
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll animations to elements
    addScrollAnimations();
    
    // Start typing animation
    typeWriter();
    
    // Initial calls
    updateActiveNav();
    updateNavbar();
    animateOnScroll();
});

// Event listeners
window.addEventListener('scroll', function() {
    updateActiveNav();
    updateNavbar();
    animateOnScroll();
    
    // Throttle parallax for performance
    if (window.innerWidth > 768) {
        requestAnimationFrame(parallaxEffect);
    }
});

// Resize event listener
window.addEventListener('resize', function() {
    // Close mobile menu on resize
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Fade in home section
    const homeContent = document.querySelector('.home-content');
    if (homeContent) {
        homeContent.classList.add('fade-in-up');
    }
});

// Intersection Observer for better scroll animations
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements after DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });
    });
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Add focus management for accessibility
document.querySelectorAll('.nav-link, .btn').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #007bff';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Smooth reveal animations for stats
function animateStats() {
    const stats = document.querySelectorAll('.stat h3');
    
    stats.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = finalValue / 30; // Animation duration
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = finalValue + (stat.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentValue) + (stat.textContent.includes('+') ? '+' : '');
            }
        }, 50);
    });
}

// Trigger stats animation when about section is visible
const aboutSection = document.querySelector('#about');
if (aboutSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(aboutSection);
}
