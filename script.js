
        // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll Animation
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });

        // Form Submission
        function handleSubmit(event) {
            event.preventDefault();
            alert('Thank you for your application! We will contact you soon.');
            event.target.reset();
        }

        // Lightbox Functions
        function openLightbox(content) {
            const lightbox = document.getElementById('lightbox');
            const lightboxContent = document.getElementById('lightbox-content');
            lightboxContent.innerHTML = `<div style="font-size: 10rem; text-align: center;">${content}</div>`;
            lightbox.classList.add('active');
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
        }

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // Close lightbox with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });

        // Add loading animation for images
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img');
            
            images.forEach(img => {
                img.addEventListener('load', function() {
                    this.style.opacity = 1;
                });
                
                // Set initial opacity for fade-in effect
                img.style.opacity = 0;
                img.style.transition = 'opacity 0.5s ease';
            });
            
            // Add animation delays to team members
            const teamMembers = document.querySelectorAll('.team-member');
            teamMembers.forEach((member, index) => {
                member.style.animationDelay = `${index * 0.2}s`;
            });
        });

        // Console welcome message
        console.log('%c🎬 NEESORGO - JTEC Cine Photography Society 📸', 
            'font-size: 20px; font-weight: bold; color: #FF6B35;');
        console.log('%cWhere Frames Speak Louder Than Words', 
            'font-size: 14px; color: #FFD166;');
    
