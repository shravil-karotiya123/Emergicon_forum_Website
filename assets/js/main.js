// ----------------------------------------------------------------------------
// MANDATORY SCROLL RESTORATION RESET (ALWAYS START FROM TOP ON RELOAD/REFRESH)
// ----------------------------------------------------------------------------
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
window.addEventListener('pagehide', () => {
  window.scrollTo(0, 0);
});
window.addEventListener('pageshow', (e) => {
  window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Force scroll reset
  window.scrollTo(0, 0);

  // ------------------------------------------------------------------------
  // 1. INITIALIZE LENIS SMOOTH SCROLL (60FPS Momentum)
  // ------------------------------------------------------------------------
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      smoothTouch: false,
      touchMultiplier: 2
    });

    lenis.scrollTo(0, { immediate: true });

    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
    }

    if (typeof gsap !== 'undefined') {
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }

  // ------------------------------------------------------------------------
  // 2. DOM ELEMENT REFS
  // ------------------------------------------------------------------------
  const introOverlay = document.getElementById('intro-overlay');
  const introTextStage = document.getElementById('intro-text-stage');
  const introVideoStage = document.getElementById('intro-video-stage');
  const introVideo = document.getElementById('intro-video');
  const appContent = document.getElementById('app-content');

  let introState = 'stage1_text';

  // ------------------------------------------------------------------------
  // 3. INTRO SEQUENCER (1. "EMERGICON" -> 2. Video -> 3. Main Website)
  // ------------------------------------------------------------------------

  // Step 1: Reveal "EMERGICON" Typography
  setTimeout(() => {
    if (introTextStage) {
      introTextStage.classList.add('visible');
    }
  }, 400);

  // Step 2: Transition from "EMERGICON" Text to Video
  setTimeout(() => {
    if (introState === 'stage1_text') {
      if (introTextStage) introTextStage.classList.remove('visible');

      setTimeout(() => {
        if (introVideoStage && introState !== 'stage3_website') {
          introState = 'stage2_video';
          introVideoStage.classList.add('visible');
          if (introVideo) {
            introVideo.currentTime = 0;
            introVideo.play().catch((e) => {
              console.log('Video autoplay handled:', e);
            });

            introVideo.addEventListener('loadedmetadata', () => {
              const dur = (introVideo.duration || 4.5) * 1000;
              setTimeout(() => {
                executeWebsiteReveal();
              }, dur + 100);
            });
          }

          // Automatic fallback to open website without any clicks
          setTimeout(() => {
            executeWebsiteReveal();
          }, 5500);
        }
      }, 500);
    }
  }, 1800);

  // Step 3: Transition from Video to Main Website
  function executeWebsiteReveal() {
    if (introState === 'stage3_website') return;
    introState = 'stage3_website';

    if (introVideoStage) {
      introVideoStage.classList.add('fading-out');
    }

    // Trigger Audio pulse & spark engine
    if (window.EmergiconSound) {
      window.EmergiconSound.explosion();
    }
    if (window.EmergiconExplosion) {
      window.EmergiconExplosion.trigger(window.innerWidth / 2, window.innerHeight / 2);
    }

    // Dismiss Intro Overlay & Reveal Website
    setTimeout(() => {
      if (introOverlay) {
        introOverlay.classList.add('dismissed');
      }
      if (appContent) {
        appContent.classList.add('active');
      }

      // Enforce scroll position top
      window.scrollTo(0, 0);
      if (lenis) lenis.scrollTo(0, { immediate: true });

      // Initialize GSAP ScrollTrigger & Animations
      if (window.EmergiconAnimations) {
        window.EmergiconAnimations.initScrollAnimations();
      }
    }, 450);
  }

  // When video naturally ends, transition automatically to main website
  if (introVideo) {
    introVideo.addEventListener('ended', () => {
      executeWebsiteReveal();
    });
  }

  // Allow scroll or key to reveal website early
  let hasTriggered = false;
  function onFirstInteraction(e) {
    if (hasTriggered) return;
    if (introState === 'stage2_video') {
      hasTriggered = true;
      window.removeEventListener('wheel', onFirstInteraction);
      window.removeEventListener('touchmove', onFirstInteraction);
      window.removeEventListener('keydown', onFirstKey);
      executeWebsiteReveal();
    }
  }

  function onFirstKey(e) {
    if (['ArrowDown', 'ArrowUp', 'Space', 'PageDown', 'Enter'].includes(e.code)) {
      onFirstInteraction(e);
    }
  }

  window.addEventListener('wheel', onFirstInteraction, { passive: true });
  window.addEventListener('touchmove', onFirstInteraction, { passive: true });
  window.addEventListener('keydown', onFirstKey);

  // ------------------------------------------------------------------------
  // 4. INTERACTIVE CLUB SHOWCASE TERMINAL
  // ------------------------------------------------------------------------
  const clubData = {
    aiml: {
      tag: '// CHAPTER 01 // INTELLIGENCE FOUNDRY',
      title: 'AI & Machine Learning Club',
      desc: 'Dedicated to mathematical rigor and empirical architectures in foundation models, transformer self-attention, generative diffusion pipelines, and reinforcement learning with human feedback.',
      chips: ['PyTorch 2.4', 'CUDA 12.2', 'HuggingFace', 'DeepSpeed', 'TensorRT', 'Weights & Biases'],
      lead: 'Lead: Kavya Iyer (Final Year)',
      capacity: '120 Active Researchers // 8 Working Labs'
    },
    datascience: {
      tag: '// CHAPTER 02 // BIG DATA ENGINEERING',
      title: 'Data Science Club',
      desc: 'Focuses on production ETL pipelines, streaming analytics over Apache Spark and Kafka, statistical inference over Petabyte-scale datasets, and econometric decision modeling.',
      chips: ['Apache Spark', 'Kafka Streams', 'Snowflake', 'dbt', 'Polars', 'DuckDB'],
      lead: 'Lead: Priya Nair (Final Year)',
      capacity: '95 Active Practitioners // 12 Datasets Deployed'
    },
    coding: {
      tag: '// CHAPTER 03 // ALGORITHMIC WAR ROOM',
      title: 'Coding & Algorithms Club',
      desc: 'Competitive programming accelerator training candidates in advanced graph theory, dynamic programming over tree subsets, numerical linear algebra, and ICPC world finals prep.',
      chips: ['C++20', 'Rust', 'Algorithmics', 'ICPC Track', 'Codeforces Div1'],
      lead: 'Lead: Aarav Sharma (President)',
      capacity: '180 Active Competitors // Weekly Sprints'
    },
    cybersec: {
      tag: '// CHAPTER 04 // DEFENSIVE & OFFENSIVE OPS',
      title: 'Cyber Security Club',
      desc: 'Hands-on vulnerability auditing, cryptographic protocol proofs, binary exploitation, automated fuzzing pipelines, and national Capture-The-Flag offensive cyber war rooms.',
      chips: ['Ghidra', 'Burp Suite Pro', 'Z3 SMT Solver', 'Wireshark', 'Rust Crypto'],
      lead: 'Lead: Rohan Verma (Secretary)',
      capacity: '65 Cyber Specialists // 24/7 War Room'
    },
    opensource: {
      tag: '// CHAPTER 05 // DISTRIBUTED OPEN SOURCE',
      title: 'Open Source Club',
      desc: 'Mentoring undergraduates through global open-source ecosystems, Apache Software Foundation contributions, Linux kernel modules, and Google Summer of Code cohort tracks.',
      chips: ['Git Internals', 'Linux Kernel', 'RustLang', 'Go 1.22', 'GitHub Actions'],
      lead: 'Lead: Siddharth Rao (Event Lead)',
      capacity: '50+ Global PRs Merged // 14 Maintainers'
    },
    robotics: {
      tag: '// CHAPTER 06 // SPATIAL & HARDWARE SYSTEMS',
      title: 'Robotics & Edge Club',
      desc: 'Deploying sub-10ms neural inferencing across custom embedded hardware, ROS2 middleware, LiDAR perception stacks, and autonomous multi-agent drone swarms.',
      chips: ['ROS2 Humble', 'Jetson Orin AGX', 'Gazebo Sim', 'C++ Edge', 'STM32'],
      lead: 'Lead: Devansh Mehta (Media Lead)',
      capacity: '4 Physical Rover Rigs // Hardware Cluster'
    },
    uiux: {
      tag: '// CHAPTER 07 // SPATIAL & DESIGN SYSTEMS',
      title: 'UI/UX & Spatial Design Club',
      desc: 'Engineering high-contrast dark design systems, WebGL canvas shaders, precision micro-interactions, and human-computer interfaces for complex scientific telemetry dashboards.',
      chips: ['Figma Tokens', 'Three.js', 'GLSL Shaders', 'Tailwind', 'Motion Canvas'],
      lead: 'Lead: Ananya Gupta (Design Lead)',
      capacity: '40 Product Designers // Design Studio'
    }
  };

  const clubTabBtns = document.querySelectorAll('.club-tab-btn');
  const clubDetailTag = document.getElementById('club-detail-tag');
  const clubDetailTitle = document.getElementById('club-detail-title');
  const clubDetailDesc = document.getElementById('club-detail-desc');
  const clubTechChips = document.getElementById('club-tech-chips');
  const clubLeadName = document.getElementById('club-lead-name');
  const clubCapacityVal = document.getElementById('club-capacity-val');

  clubTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const clubKey = btn.getAttribute('data-club');
      const data = clubData[clubKey];
      if (!data) return;

      clubTabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      if (clubDetailTag) clubDetailTag.textContent = data.tag;
      if (clubDetailTitle) clubDetailTitle.textContent = data.title;
      if (clubDetailDesc) clubDetailDesc.textContent = data.desc;
      if (clubLeadName) clubLeadName.textContent = data.lead;
      if (clubCapacityVal) clubCapacityVal.textContent = data.capacity;

      if (clubTechChips) {
        clubTechChips.innerHTML = data.chips
          .map((chip) => `<span class="tech-chip">${chip}</span>`)
          .join('');
      }
    });
  });

  // ------------------------------------------------------------------------
  // 5. LIVE ACADEMIC CLOCK & GPU TELEMETRY
  // ------------------------------------------------------------------------
  const liveClockEl = document.getElementById('live-academic-clock');
  function updateClock() {
    if (!liveClockEl) return;
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMins = String(now.getUTCMinutes()).padStart(2, '0');
    const utcSecs = String(now.getUTCSeconds()).padStart(2, '0');
    liveClockEl.textContent = `UTC ${utcHours}:${utcMins}:${utcSecs} // SEMESTER 06 // ACTIVE`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // ------------------------------------------------------------------------
  // 6. GALLERY & FULLSCREEN LIGHTBOX
  // ------------------------------------------------------------------------
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentGalleryIndex = 0;

  function getCarouselEvents() {
    if (window.EmergiconGalleryCarousel && typeof window.EmergiconGalleryCarousel.getData === 'function') {
      return window.EmergiconGalleryCarousel.getData();
    }
    return [];
  }

  function openLightbox(index) {
    const events = getCarouselEvents();
    if (!lightbox) return;

    if (events.length > 0) {
      currentGalleryIndex = ((index % events.length) + events.length) % events.length;
      const evt = events[currentGalleryIndex];
      if (lightboxImg) lightboxImg.src = evt.image;
      if (lightboxTitle) lightboxTitle.textContent = evt.title;
      if (lightboxCategory) lightboxCategory.textContent = `${evt.tag} // ${evt.date}`;
    }

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      const events = getCarouselEvents();
      if (events.length > 0) {
        currentGalleryIndex = (currentGalleryIndex - 1 + events.length) % events.length;
        openLightbox(currentGalleryIndex);
        if (window.EmergiconGalleryCarousel && typeof window.EmergiconGalleryCarousel.goTo === 'function') {
          window.EmergiconGalleryCarousel.goTo(currentGalleryIndex);
        }
      }
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      const events = getCarouselEvents();
      if (events.length > 0) {
        currentGalleryIndex = (currentGalleryIndex + 1) % events.length;
        openLightbox(currentGalleryIndex);
        if (window.EmergiconGalleryCarousel && typeof window.EmergiconGalleryCarousel.goTo === 'function') {
          window.EmergiconGalleryCarousel.goTo(currentGalleryIndex);
        }
      }
    });
  }

  // ------------------------------------------------------------------------
  // 7. EVENT RSVP MODAL
  // ------------------------------------------------------------------------
  const rsvpModal = document.getElementById('rsvp-modal');
  const rsvpClose = document.getElementById('rsvp-close');
  const rsvpTriggers = document.querySelectorAll('.rsvp-trigger');
  const rsvpEventSelect = document.getElementById('rsvp-event-select');
  const rsvpForm = document.getElementById('rsvp-form');

  rsvpTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const eventName = trigger.getAttribute('data-event-name');
      if (rsvpEventSelect && eventName) {
        rsvpEventSelect.value = eventName;
      }
      if (rsvpModal) {
        rsvpModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (rsvpClose) {
    rsvpClose.addEventListener('click', () => {
      rsvpModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (rsvpModal) {
    rsvpModal.addEventListener('click', (e) => {
      if (e.target === rsvpModal) {
        rsvpModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Event Registration Confirmed! Welcome to the CSE (Data Science) Forum.');
      rsvpModal.classList.remove('active');
      document.body.style.overflow = '';
      rsvpForm.reset();
    });
  }

  // ------------------------------------------------------------------------
  // 8. CONTACT FORM HANDLER
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting the Department of CSE (Data Science). Your dispatch has been received.');
      contactForm.reset();
    });
  }

  // Back to Top Button
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNavLinks = document.getElementById('nav-links');
  if (mobileToggle && mainNavLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = mainNavLinks.style.display === 'flex';
      mainNavLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        mainNavLinks.style.flexDirection = 'column';
        mainNavLinks.style.position = 'absolute';
        mainNavLinks.style.top = '100%';
        mainNavLinks.style.left = '0';
        mainNavLinks.style.width = '100%';
        mainNavLinks.style.background = 'rgba(0,0,0,0.95)';
        mainNavLinks.style.padding = '2rem';
        mainNavLinks.style.borderBottom = '1px solid var(--border-hairline)';
      }
    });
  }
});
