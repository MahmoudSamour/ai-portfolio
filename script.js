document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal Elements on Scroll
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);
    // Trigger once on load
    reveal();

    // Glitch Effect logic for Hero Title (Optional Subtle enhancement)
    const glitchText = document.querySelector('.glitch');
    if(glitchText) {
        setInterval(() => {
            glitchText.style.textShadow = `
                ${Math.random() * 5 - 2.5}px ${Math.random() * 5 - 2.5}px 0 rgba(0, 240, 255, 0.7),
                ${Math.random() * -5 + 2.5}px ${Math.random() * -5 + 2.5}px 0 rgba(112, 0, 255, 0.7)
            `;
            setTimeout(() => {
                glitchText.style.textShadow = 'none';
            }, 50);
        }, 3000); // Glitch every 3 seconds
    }
});
