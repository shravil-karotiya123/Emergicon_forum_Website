/**
 * EMERGICON — Advanced Interactive 3D Event Gallery & Showcase Engine
 * Department of Computer Science & Engineering (Data Science)
 * 
 * Capabilities:
 * - 1. Automatic Carousel Movement (Auto Showcase) with 4.0s interval & 6.0s interaction pause
 * - 2. GPU-Accelerated 3D Perspective Depth (Cover Flow physics with 1-Euro jitter elimination)
 * - 3. Interactive In-Page Event Showcase (Apple Photos-style shared-element transition)
 * - 4. Dedicated Multi-Photo Event Galleries for every conclave
 * - 5. Multi-Input Controls: Drag, Trackpad/Wheel, Touch, Keyboard Arrows, AI Hand Swipes, and Hand Gun Shoot
 * - 6. Complete Data-Driven Architecture (Add/Remove events easily)
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. EXTENSIBLE EVENT DATASET WITH DEDICATED MULTI-PHOTO GALLERIES
  // --------------------------------------------------------------------------
  const galleryEventsData = [
    {
      id: 'hackathon-arena',
      title: 'National Hackathon Arena',
      tag: 'HACKATHON SPRINT',
      date: 'OCTOBER 24–26, 2026',
      venue: 'AUDITORIUM ALPHA & LAB CLUSTER',
      organizingTeam: 'Coding & Algorithms Club × AI/ML Chapter',
      image: 'assets/images/hackathon.jpg',
      shortDescription: '36-hour non-stop continuous build sprint deploying production deep learning models and distributed streaming pipelines.',
      fullDescription: 'The EMERGICON National Data Hackathon brings together over 180 premier collegiate engineering teams to build, benchmark, and deploy mission-critical machine learning applications. Participants leverage dedicated high-density GPU computing clusters with direct technical mentorship from senior Silicon Valley research engineers, tackling complex challenges in foundation model fine-tuning, autonomous robotics perception, and real-time fraud inference.',
      stats: [
        { label: 'Participating Teams', value: '180+' },
        { label: 'Prize Pool', value: '₹2,50,000' },
        { label: 'Continuous Sprint', value: '36 Hours' },
        { label: 'Compute Power', value: 'NVIDIA A100' }
      ],
      galleryImages: [
        { src: 'assets/images/hackathon.jpg', title: 'Main Arena Build Floor', caption: 'Teams assembling initial neural pipeline architectures during hour 12.' },
        { src: 'assets/images/keynote.jpg', title: 'Midnight Architectural Review', caption: 'Senior mentors evaluating distributed Kafka pipelines and model accuracy.' },
        { src: 'assets/images/aerospace.jpg', title: 'High-Density GPU Rig Floor', caption: 'Supercomputing cluster under continuous high-load transformer training.' },
        { src: 'assets/images/gala.jpg', title: 'Grand Finale Showcase', caption: 'Top 10 finalist teams presenting production-grade prototypes on stage.' }
      ]
    },
    {
      id: 'keynote-stage',
      title: 'Annual Keynote Stage',
      tag: 'THOUGHT LEADERSHIP',
      date: 'NOVEMBER 14, 2026',
      venue: 'MAIN AMPHITHEATRE',
      organizingTeam: 'Department Faculty Council & Forum Executives',
      image: 'assets/images/keynote.jpg',
      shortDescription: 'Keynote addresses and visionary discussions on foundation models, AI safety governance, and next-generation compute architectures.',
      fullDescription: 'The Annual Department Keynote Stage serves as an intellectual nexus for academicians, doctoral researchers, and industry pioneers. Featuring keynote addresses from ACM/IEEE Fellows and leading laboratory directors, the conclave explores mathematical advances in transformer self-attention mechanisms, synthetic data fidelity, and the ethical engineering of safe artificial intelligence.',
      stats: [
        { label: 'Keynote Speakers', value: '12 Global Leads' },
        { label: 'Delegates Attended', value: '1,400+' },
        { label: 'Research Papers', value: '28 Selected' },
        { label: 'Live Stream Reach', value: '15,000+' }
      ],
      galleryImages: [
        { src: 'assets/images/keynote.jpg', title: 'Inaugural Address', caption: 'Keynote discourse on multi-modal foundation models and sparse attention.' },
        { src: 'assets/images/gala.jpg', title: 'Distinguished Panel', caption: 'Silicon Valley research directors debating AI safety frameworks.' },
        { src: 'assets/images/venture.jpg', title: 'Poster Session Hall', caption: 'Undergraduate researchers presenting peer-reviewed empirical findings.' },
        { src: 'assets/images/hackathon.jpg', title: 'Interactive Fireside Chat', caption: 'Student Q&A session with leading computer science academicians.' }
      ]
    },
    {
      id: 'robotics-testing',
      title: 'Autonomous Hardware Testing',
      tag: 'HARDWARE LAB',
      date: 'DECEMBER 05, 2026',
      venue: 'CAMPUS ROBOTICS TEST GROUND',
      organizingTeam: 'Robotics & Edge AI Club',
      image: 'assets/images/robotics.jpg',
      shortDescription: 'Live field trials of custom ROS2 autonomous rovers, multi-agent drone swarms, edge neural inference, and LiDAR SLAM navigation.',
      fullDescription: 'An intense hands-on proving ground where student engineering cohorts demonstrate fully autonomous rovers and aerial multi-rotor platforms. Equipped with embedded Jetson Orin AGX compute units and multi-beam solid-state LiDAR sensors, each rig navigates complex synthetic obstacle courses using sub-10ms neural inferencing and distributed ROS2 nodes.',
      stats: [
        { label: 'Physical Rigs', value: '16 Custom Robots' },
        { label: 'Inference Latency', value: '< 8.4 ms' },
        { label: 'Test Course Area', value: '8,000 sq ft' },
        { label: 'Middleware', value: 'ROS2 Humble' }
      ],
      galleryImages: [
        { src: 'assets/images/robotics.jpg', title: 'Autonomous Rover Trials', caption: 'All-terrain 6-wheel rover executing real-time 3D LiDAR SLAM.' },
        { src: 'assets/images/aerospace.jpg', title: 'Edge Hardware Bench', caption: 'Telemetry calibration and thermal stress testing on Jetson Orin.' },
        { src: 'assets/images/hackathon.jpg', title: 'Live Vision Telemetry', caption: 'Computer vision perception bounding boxes overlaying sensor feeds.' },
        { src: 'assets/images/venture.jpg', title: 'Drone Swarm Synchronization', caption: 'Multi-agent collision avoidance test over designated outdoor flight grid.' }
      ]
    },
    {
      id: 'gpu-cluster',
      title: 'GPU Model Training Floor',
      tag: 'DEEP TECH R&D',
      date: 'JANUARY 18, 2027',
      venue: 'SUPERCOMPUTING CLUSTER (BLOCK IV)',
      organizingTeam: 'Data Science Club & Research Chairs',
      image: 'assets/images/aerospace.jpg',
      shortDescription: 'High-density GPU computing environment executing billion-parameter fine-tuning, continuous pre-training, and data validation.',
      fullDescription: 'Dedicated to high-performance deep learning engineering, the GPU Model Training Floor showcases the department’s enterprise server infrastructure. Undergraduates and faculty researchers utilize distributed PyTorch 2.4 pipelines, DeepSpeed ZeRO-3 memory optimizations, and NVLink interconnects to train domain-adapted vision-language models from scratch.',
      stats: [
        { label: 'GPU Density', value: '32× NVIDIA A100' },
        { label: 'Memory Bandwidth', value: '2.0 TB/sec' },
        { label: 'Models Trained', value: '45+ Deployed' },
        { label: 'Interconnect', value: 'InfiniBand HDR' }
      ],
      galleryImages: [
        { src: 'assets/images/aerospace.jpg', title: 'Server Rack Complex', caption: 'Liquid-cooled server arrays executing multi-node distributed training.' },
        { src: 'assets/images/hackathon.jpg', title: 'Model Monitoring Console', caption: 'Real-time loss curve analysis and gradient norm telemetry on dashboard.' },
        { src: 'assets/images/keynote.jpg', title: 'Research Cohort Workshop', caption: 'Graduate fellows optimizing CUDA kernels for attention acceleration.' },
        { src: 'assets/images/gala.jpg', title: 'Deployment Milestone', caption: 'Commemorating 100,000th synthetic inference query on department cluster.' }
      ]
    },
    {
      id: 'excellence-gala',
      title: 'Academic Excellence Awards',
      tag: 'ANNUAL CONCLAVE',
      date: 'FEBRUARY 22, 2027',
      venue: 'GRAND CONVENTION HALL',
      organizingTeam: 'Department Leadership & Executive Forum',
      image: 'assets/images/gala.jpg',
      shortDescription: 'Celebrating pioneering student research publications, national hackathon laureates, and distinguished faculty fellowships.',
      fullDescription: 'The crown jewel of the department’s academic calendar, the Academic Excellence Awards Gala honors top-percentile academic scholars, student entrepreneurs who secured venture funding, ACM ICPC World Finalists, and faculty members who secured breakthrough patent grants. The evening concludes with formal inductions into the EMERGICON Honor Society.',
      stats: [
        { label: 'Honor Laureates', value: '48 Students' },
        { label: 'Patents Awarded', value: '6 Granted' },
        { label: 'Scholarships Given', value: '₹12,00,000' },
        { label: 'Distinguished Guests', value: '250+' }
      ],
      galleryImages: [
        { src: 'assets/images/gala.jpg', title: 'Honors Stage Presentation', caption: 'Best Research Publication Award presented by Vice Chancellor.' },
        { src: 'assets/images/keynote.jpg', title: 'Presidential Address', caption: 'Forum President delivering retrospective on departmental achievements.' },
        { src: 'assets/images/venture.jpg', title: 'Alumni Network Reception', caption: 'Graduating seniors connecting with venture founders and tech executives.' },
        { src: 'assets/images/hackathon.jpg', title: 'Championship Trophy', caption: 'National hackathon winners receiving the annual gold cup.' }
      ]
    },
    {
      id: 'venture-demo',
      title: 'Student Demo Day Showcase',
      tag: 'VENTURE INCUBATION',
      date: 'MARCH 15, 2027',
      venue: 'INNOVATION COMPLEX ATRIUM',
      organizingTeam: 'UI/UX Chapter & Venture Incubation Cell',
      image: 'assets/images/venture.jpg',
      shortDescription: 'Student founders and research fellows pitching production AI startups, spatial computer vision tools, and developer platforms.',
      fullDescription: 'A fast-paced venture showcase where undergraduate developers transition from lab research to commercial product launches. Each student-led cohort delivers a 5-minute live product demonstration followed by diligence Q&A with angel investors, VC partners, and enterprise software directors, resulting in term-sheet commitments and seed incubations.',
      stats: [
        { label: 'Startups Pitched', value: '14 Ventures' },
        { label: 'Seed Commitments', value: '₹45,00,000' },
        { label: 'VC Firms Attending', value: '22 Funds' },
        { label: 'Live Users Onboarded', value: '85,000+' }
      ],
      galleryImages: [
        { src: 'assets/images/venture.jpg', title: 'Live Pitch Stage', caption: 'Student CEO presenting autonomous document AI platform to investors.' },
        { src: 'assets/images/hackathon.jpg', title: 'Interactive Demo Booths', caption: 'Investors test-driving real-time spatial vision SDK on mobile rigs.' },
        { src: 'assets/images/aerospace.jpg', title: 'Term Sheet Discussions', caption: 'Founding teams negotiating seed round term sheets in executive lounge.' },
        { src: 'assets/images/gala.jpg', title: 'Demo Day Champion', caption: 'Winner of the Venture Incubation ₹10L Seed Grant announcement.' }
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 2. STATE & ENGINE VARIABLES
  // --------------------------------------------------------------------------
  let currentIndex = 0;
  let targetProgress = 0;
  let currentProgress = 0;
  let isDragging = false;
  let startX = 0;
  let startProgress = 0;
  let lastDragX = 0;
  let lastDragTime = 0;
  let dragVelocity = 0;
  let isAnimating = false;
  let animationFrameId = null;

  // Auto-Showcase Timer State
  let autoShowcaseTimer = null;
  let resumeAutoTimeout = null;
  let isAutoShowcasePaused = false;
  let isGalleryInViewport = false;
  let isShowcaseModalOpen = false;

  // DOM References
  let stageEl = null;
  let trackEl = null;
  let prevBtn = null;
  let nextBtn = null;
  let dotsContainer = null;
  let showcaseOverlay = null;
  let cards = [];

  const totalCards = galleryEventsData.length;

  // --------------------------------------------------------------------------
  // 3. INITIALIZATION ON DOM READY
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    stageEl = document.getElementById('gallery-3d-stage');
    trackEl = document.getElementById('gallery-carousel-track');
    prevBtn = document.getElementById('carousel-prev-btn');
    nextBtn = document.getElementById('carousel-next-btn');
    dotsContainer = document.getElementById('carousel-dots-wrap');
    showcaseOverlay = document.getElementById('event-showcase-overlay');

    if (!stageEl || !trackEl) return;

    // Render 3D Cards
    renderCarouselDOM();

    // Interaction Listeners
    initInteractionListeners();

    // Initial Layout Setup
    updateCardsLayout(0, true);

    // Viewport Intersection Observer for Auto-Showcase
    initViewportObserver();

    // Start Auto Showcase
    startAutoShowcase();
  });

  // --------------------------------------------------------------------------
  // 4. AUTO SHOWCASE ENGINE (AUTOMATIC 4.0s HORIZONTAL MOVEMENT)
  // --------------------------------------------------------------------------
  function startAutoShowcase() {
    stopAutoShowcase();
    if (isShowcaseModalOpen) return;

    autoShowcaseTimer = setInterval(() => {
      if (!isDragging && !isAutoShowcasePaused && isGalleryInViewport && !isShowcaseModalOpen) {
        nextSlide();
      }
    }, 4000);
  }

  function stopAutoShowcase() {
    if (autoShowcaseTimer) {
      clearInterval(autoShowcaseTimer);
      autoShowcaseTimer = null;
    }
  }

  function pauseAutoShowcase() {
    isAutoShowcasePaused = true;
    if (resumeAutoTimeout) {
      clearTimeout(resumeAutoTimeout);
      resumeAutoTimeout = null;
    }
    scheduleAutoShowcaseResume();
  }

  function scheduleAutoShowcaseResume() {
    if (resumeAutoTimeout) clearTimeout(resumeAutoTimeout);
    resumeAutoTimeout = setTimeout(() => {
      if (!isShowcaseModalOpen) {
        isAutoShowcasePaused = false;
      }
    }, 6000); // Resume smoothly after 6s of inactivity
  }

  function initViewportObserver() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isGalleryInViewport = entry.isIntersecting;
        });
      }, { threshold: 0.25 });

      observer.observe(stageEl);
    } else {
      isGalleryInViewport = true;
    }
  }

  // --------------------------------------------------------------------------
  // 5. DYNAMIC 3D CAROUSEL DOM GENERATION
  // --------------------------------------------------------------------------
  function renderCarouselDOM() {
    trackEl.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';
    cards = [];

    galleryEventsData.forEach((evt, idx) => {
      // 1. Create 3D Card
      const card = document.createElement('div');
      card.className = 'carousel-3d-card';
      card.setAttribute('data-index', idx);
      card.setAttribute('role', 'group');
      card.setAttribute('aria-roledescription', 'slide');
      card.setAttribute('aria-label', `${idx + 1} of ${totalCards}: ${evt.title}`);

      card.innerHTML = `
        <div class="carousel-card-inner">
          <div class="carousel-card-img-wrap">
            <img src="${evt.image}" alt="${evt.title}" class="carousel-card-img" loading="lazy">
            <div class="carousel-card-tag-badge">
              <span class="badge-dot-live"></span>
              ${evt.tag}
            </div>
            <button class="carousel-expand-btn" aria-label="Open Event Showcase" data-event-index="${idx}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </button>
          </div>
          <div class="carousel-card-body">
            <div class="carousel-card-meta font-mono">
              <span>${evt.date}</span>
              <span class="meta-separator">&bull;</span>
              <span>${evt.venue}</span>
            </div>
            <h3 class="carousel-card-title">${evt.title}</h3>
            <p class="carousel-card-desc">${evt.shortDescription}</p>
            <div class="carousel-card-footer">
              <button class="btn btn-outline carousel-view-btn" data-event-index="${idx}">
                Explore Showcase &rarr;
              </button>
            </div>
          </div>
        </div>
      `;

      trackEl.appendChild(card);
      cards.push(card);

      // 2. Create Pagination Dot
      if (dotsContainer) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${idx + 1}: ${evt.title}`);
        dot.setAttribute('data-index', idx);
        dot.addEventListener('click', () => {
          pauseAutoShowcase();
          goToIndex(idx);
        });
        dotsContainer.appendChild(dot);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. 3D PERSPECTIVE PHYSICS ENGINE (GPU TRANSFORM COMPUTATION)
  // --------------------------------------------------------------------------
  function getSpacingConfig() {
    const w = window.innerWidth;
    if (w > 1200) {
      return { spacing: 380, zStep: 150, rotStep: 24, scaleStep: 0.14, blurStep: 1.5 };
    } else if (w > 768) {
      return { spacing: 290, zStep: 130, rotStep: 20, scaleStep: 0.15, blurStep: 1.5 };
    } else {
      return { spacing: 210, zStep: 100, rotStep: 16, scaleStep: 0.16, blurStep: 1.0 };
    }
  }

  function updateCardsLayout(progress, immediate = false) {
    const config = getSpacingConfig();
    const activeWrappedIdx = ((Math.round(progress) % totalCards) + totalCards) % totalCards;

    cards.forEach((card, idx) => {
      let diff = idx - progress;
      while (diff < -totalCards / 2) diff += totalCards;
      while (diff > totalCards / 2) diff -= totalCards;

      const absDiff = Math.abs(diff);

      if (absDiff > 2.6) {
        card.style.opacity = '0';
        card.style.visibility = 'hidden';
        card.style.pointerEvents = 'none';
        card.style.transform = `translate3d(0, 0, -600px) scale(0.5)`;
        card.classList.remove('is-active', 'is-neighbor');
        return;
      }

      card.style.visibility = 'visible';

      const sign = diff < 0 ? -1 : 1;
      const transX = diff * config.spacing;
      const transZ = -absDiff * config.zStep;
      const rotY = -sign * Math.min(absDiff, 1.8) * config.rotStep;
      const scale = Math.max(0.68, 1 - absDiff * config.scaleStep);
      const opacity = Math.max(0, 1 - absDiff * 0.28);
      const blurVal = Math.min(6, absDiff * config.blurStep);
      const zIndex = Math.round(100 - absDiff * 20);

      card.style.zIndex = zIndex;
      card.style.opacity = opacity.toFixed(3);
      card.style.filter = blurVal < 0.2 ? 'none' : `blur(${blurVal.toFixed(1)}px)`;
      card.style.transform = `translate3d(${transX.toFixed(1)}px, 0px, ${transZ.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg) scale(${scale.toFixed(3)})`;

      if (absDiff < 0.45) {
        card.classList.add('is-active');
        card.classList.remove('is-neighbor');
        card.style.pointerEvents = 'auto';
      } else if (absDiff < 1.45) {
        card.classList.remove('is-active');
        card.classList.add('is-neighbor');
        card.style.pointerEvents = 'auto';
      } else {
        card.classList.remove('is-active', 'is-neighbor');
        card.style.pointerEvents = 'auto';
      }
    });

    // Update Pagination Dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, dIdx) => {
        if (dIdx === activeWrappedIdx) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // 7. SPRING PHYSICS & CONTINUOUS PROGRESS ANIMATION
  // --------------------------------------------------------------------------
  function animateToProgress() {
    if (!isAnimating) return;

    const diff = targetProgress - currentProgress;
    if (Math.abs(diff) < 0.002) {
      currentProgress = targetProgress;
      currentIndex = ((Math.round(currentProgress) % totalCards) + totalCards) % totalCards;
      updateCardsLayout(currentProgress);
      isAnimating = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      return;
    }

    currentProgress += diff * 0.16;
    updateCardsLayout(currentProgress);

    animationFrameId = requestAnimationFrame(animateToProgress);
  }

  function snapToNearest() {
    let nearest = Math.round(currentProgress);
    if (Math.abs(dragVelocity) > 0.012) {
      nearest += dragVelocity > 0 ? 1 : -1;
    }

    targetProgress = nearest;
    isAnimating = true;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animateToProgress();
  }

  function goToIndex(index) {
    const currentWrapped = ((Math.round(currentProgress) % totalCards) + totalCards) % totalCards;
    let diff = index - currentWrapped;
    while (diff < -totalCards / 2) diff += totalCards;
    while (diff > totalCards / 2) diff -= totalCards;

    targetProgress = Math.round(currentProgress) + diff;
    isAnimating = true;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animateToProgress();
  }

  function nextSlide() {
    targetProgress = Math.round(currentProgress) + 1;
    isAnimating = true;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animateToProgress();
  }

  function prevSlide() {
    targetProgress = Math.round(currentProgress) - 1;
    isAnimating = true;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animateToProgress();
  }

  // --------------------------------------------------------------------------
  // 8. INTERACTIVE IN-PAGE EVENT SHOWCASE (SHARED-ELEMENT FLIP TRANSITION)
  // --------------------------------------------------------------------------
  function openEventShowcase(index) {
    const evt = galleryEventsData[index];
    if (!evt || !showcaseOverlay) return;

    pauseAutoShowcase();
    isShowcaseModalOpen = true;

    // Populate Showcase Content
    const heroBannerImg = document.getElementById('showcase-hero-img');
    const tagBadge = document.getElementById('showcase-tag-badge');
    const titleEl = document.getElementById('showcase-title');
    const dateEl = document.getElementById('showcase-date');
    const venueEl = document.getElementById('showcase-venue');
    const teamEl = document.getElementById('showcase-team');
    const descEl = document.getElementById('showcase-desc');
    const statsContainer = document.getElementById('showcase-stats-grid');
    const photoGrid = document.getElementById('showcase-photos-grid');
    const rsvpBtn = document.getElementById('showcase-rsvp-btn');

    if (heroBannerImg) heroBannerImg.src = evt.image;
    if (tagBadge) tagBadge.innerHTML = `<span class="badge-dot-live"></span> ${evt.tag}`;
    if (titleEl) titleEl.textContent = evt.title;
    if (dateEl) dateEl.textContent = evt.date;
    if (venueEl) venueEl.textContent = evt.venue;
    if (teamEl) teamEl.textContent = evt.organizingTeam;
    if (descEl) descEl.textContent = evt.fullDescription;

    if (rsvpBtn) {
      rsvpBtn.setAttribute('data-event-name', evt.title);
    }

    // Populate Key Telemetry Stats
    if (statsContainer && evt.stats) {
      statsContainer.innerHTML = evt.stats
        .map((st) => `
          <div class="showcase-stat-card">
            <span class="showcase-stat-val font-mono">${st.value}</span>
            <span class="showcase-stat-label">${st.label}</span>
          </div>
        `)
        .join('');
    }

    // Populate Dedicated Multi-Photo Gallery Grid
    if (photoGrid && evt.galleryImages) {
      photoGrid.innerHTML = evt.galleryImages
        .map((imgObj, pIdx) => `
          <div class="showcase-gallery-card ${pIdx === 0 ? 'featured-photo' : ''}" data-photo-src="${imgObj.src}" data-photo-title="${imgObj.title}" data-photo-caption="${imgObj.caption}">
            <div class="showcase-gallery-img-wrap">
              <img src="${imgObj.src}" alt="${imgObj.title}" class="showcase-gallery-img" loading="lazy">
              <div class="showcase-photo-overlay">
                <span class="showcase-photo-title">${imgObj.title}</span>
                <span class="showcase-photo-caption">${imgObj.caption}</span>
              </div>
            </div>
          </div>
        `)
        .join('');
    }

    // Reveal Overlay with Apple Photos Shared-Element Animation
    showcaseOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    const closeBtn = document.getElementById('showcase-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeEventShowcase() {
    if (!showcaseOverlay || !isShowcaseModalOpen) return;

    showcaseOverlay.classList.remove('active');
    document.body.style.overflow = '';
    isShowcaseModalOpen = false;

    // Resume auto showcase after 6s
    scheduleAutoShowcaseResume();
  }

  // --------------------------------------------------------------------------
  // 9. MULTI-INPUT INTERACTIONS (DRAG, TOUCH, WHEEL, KEYBOARD, BUTTONS)
  // --------------------------------------------------------------------------
  function initInteractionListeners() {
    // 1. Prev & Next Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        pauseAutoShowcase();
        prevSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        pauseAutoShowcase();
        nextSlide();
      });
    }

    // 2. Mouse & Touch Dragging
    const onPointerDown = (e) => {
      if (e.target.closest('button, a, .showcase-gallery-card')) return;

      pauseAutoShowcase();
      isDragging = true;
      isAnimating = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      startProgress = currentProgress;
      lastDragX = startX;
      lastDragTime = Date.now();
      dragVelocity = 0;

      stageEl.classList.add('is-dragging');
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;

      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const now = Date.now();
      const deltaX = clientX - startX;
      const dt = Math.max(1, now - lastDragTime);
      const dDragX = clientX - lastDragX;

      dragVelocity = -(dDragX / dt) * 0.08;
      lastDragX = clientX;
      lastDragTime = now;

      const config = getSpacingConfig();
      const progressDelta = -deltaX / (config.spacing * 1.15);
      currentProgress = startProgress + progressDelta;

      updateCardsLayout(currentProgress);
    };

    const onPointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      stageEl.classList.remove('is-dragging');
      snapToNearest();
      scheduleAutoShowcaseResume();
    };

    stageEl.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    stageEl.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // 3. Side Card Click-to-Center & Center Card Open Showcase
    trackEl.addEventListener('click', (e) => {
      const card = e.target.closest('.carousel-3d-card');
      if (!card) return;

      const clickedIdx = parseInt(card.getAttribute('data-index'), 10);
      const activeWrapped = ((Math.round(currentProgress) % totalCards) + totalCards) % totalCards;

      if (clickedIdx !== activeWrapped) {
        e.preventDefault();
        e.stopPropagation();
        pauseAutoShowcase();
        goToIndex(clickedIdx);
      } else {
        // Clicking active center card opens the in-page showcase
        if (!e.target.closest('.carousel-view-btn, .carousel-expand-btn')) {
          e.preventDefault();
          openEventShowcase(clickedIdx);
        }
      }
    });

    // 4. "Explore Showcase" and Expand Buttons
    trackEl.addEventListener('click', (e) => {
      const trigger = e.target.closest('.carousel-view-btn, .carousel-expand-btn');
      if (trigger) {
        e.preventDefault();
        e.stopPropagation();
        const card = trigger.closest('.carousel-3d-card');
        const idx = parseInt(card.getAttribute('data-index'), 10);
        openEventShowcase(idx);
      }
    });

    // 5. In-Page Event Showcase Close Triggers
    if (showcaseOverlay) {
      const closeBtn = document.getElementById('showcase-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.preventDefault();
          closeEventShowcase();
        });
      }

      showcaseOverlay.addEventListener('click', (e) => {
        if (e.target === showcaseOverlay || e.target.classList.contains('showcase-backdrop-click')) {
          closeEventShowcase();
        }
      });
    }

    // 6. Showcase Multi-Photo Lightbox Trigger
    if (showcaseOverlay) {
      showcaseOverlay.addEventListener('click', (e) => {
        const photoCard = e.target.closest('.showcase-gallery-card');
        if (photoCard) {
          const src = photoCard.getAttribute('data-photo-src');
          const title = photoCard.getAttribute('data-photo-title');
          const caption = photoCard.getAttribute('data-photo-caption');

          const lightbox = document.getElementById('gallery-lightbox');
          const lightboxImg = document.getElementById('lightbox-img');
          const lightboxTitle = document.getElementById('lightbox-title');
          const lightboxCategory = document.getElementById('lightbox-category');

          if (lightbox && lightboxImg) {
            lightboxImg.src = src;
            if (lightboxTitle) lightboxTitle.textContent = title;
            if (lightboxCategory) lightboxCategory.textContent = caption;
            lightbox.classList.add('active');
          }
        }
      });
    }

    // 7. Horizontal Trackpad & Mouse Wheel
    let wheelCooldown = 0;
    stageEl.addEventListener('wheel', (e) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (isHorizontal || e.shiftKey) {
        e.preventDefault();
        pauseAutoShowcase();
        const now = Date.now();
        if (now - wheelCooldown > 220) {
          wheelCooldown = now;
          if (e.deltaX > 15 || (e.shiftKey && e.deltaY > 15)) {
            nextSlide();
          } else if (e.deltaX < -15 || (e.shiftKey && e.deltaY < -15)) {
            prevSlide();
          }
        }
      }
    }, { passive: false });

    // 8. Keyboard Navigation
    window.addEventListener('keydown', (e) => {
      // If Showcase is open: ESC closes it
      if (isShowcaseModalOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          closeEventShowcase();
        }
        return;
      }

      // If Gallery in viewport: Left/Right arrows navigate
      const rect = stageEl.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        pauseAutoShowcase();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        pauseAutoShowcase();
        nextSlide();
      } else if (e.key === 'Enter') {
        const activeWrapped = ((Math.round(currentProgress) % totalCards) + totalCards) % totalCards;
        openEventShowcase(activeWrapped);
      }
    });

    // 9. Window Resize
    window.addEventListener('resize', () => {
      updateCardsLayout(currentProgress, true);
    });
  }

  // --------------------------------------------------------------------------
  // 10. GLOBAL API EXPORT FOR AI HAND GESTURES & SCRIPTS
  // --------------------------------------------------------------------------
  window.EmergiconGalleryCarousel = {
    next: () => {
      pauseAutoShowcase();
      nextSlide();
    },
    prev: () => {
      pauseAutoShowcase();
      prevSlide();
    },
    goTo: (idx) => {
      pauseAutoShowcase();
      goToIndex(idx);
    },
    openShowcase: (idx) => {
      openEventShowcase(idx);
    },
    closeShowcase: () => {
      closeEventShowcase();
    },
    pauseAuto: pauseAutoShowcase,
    resumeAuto: scheduleAutoShowcaseResume,
    isShowcaseOpen: () => isShowcaseModalOpen,
    getCurrentIndex: () => ((Math.round(currentProgress) % totalCards) + totalCards) % totalCards,
    getData: () => galleryEventsData
  };
})();
