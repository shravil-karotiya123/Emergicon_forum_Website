/**
 * EMERGICON — Animations & Interaction Engine (Human-Designed Editorial Edition)
 * Department of Computer Science & Engineering (Data Science)
 * GSAP 3 & ScrollTrigger Controllers, Magnetic Buttons & Smooth Section Reveals
 */

(function () {
  'use strict';

  function initScrollAnimations() {
    if (typeof gsap === 'undefined') return;

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Navbar state on scroll
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }

    // Staggered Editorial Section Reveals
    if (typeof ScrollTrigger !== 'undefined') {
      const sections = document.querySelectorAll('section');
      sections.forEach((sec) => {
        const header = sec.querySelector('.section-header-editorial');
        if (header) {
          gsap.from(header, {
            y: 25,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          });
        }

        const cards = sec.querySelectorAll(
          '.about-narrative, .about-visual-card, .pillar-card-refined, .team-exec-card, .committee-card, .club-bento-card, .event-feature-card, .event-compact-card, .gallery-section-wrap, .faculty-card-refined, .contact-info-panel, .contact-form-card'
        );
        if (cards.length > 0) {
          gsap.from(cards, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.07,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          });
        }
      });
    }

    // Magnetic Buttons
    initMagneticButtons();
  }

  // Magnetic Hover Physics
  function initMagneticButtons() {
    const btns = document.querySelectorAll('.btn-primary, .btn-outline');
    btns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  window.EmergiconAnimations = {
    initScrollAnimations: initScrollAnimations
  };
})();
