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
  // 1. EXTENSIBLE EVENT DATASET WITH REAL DEPARTMENT EVENTS & MULTI-PHOTO GALLERIES
  // --------------------------------------------------------------------------
  const galleryEventsData = [
    {
      id: 'sih-hackathon-2026',
      title: 'Smart India Hackathon (SIH) 2026',
      tag: 'NATIONAL QUALIFIER',
      date: 'SEPTEMBER 01, 2026',
      venue: 'DEPARTMENT LAB SUITE & AUDITORIUM',
      organizingTeam: 'EMERGICON Technical Council & SIH Chapter',
      image: 'assets/images/events/SIH Internal Hackathon 2026/20260901_12516PMByGPSMapCamera.webp',
      shortDescription: 'Department-wide Smart India Hackathon internal scrutiny and continuous prototype build sprint.',
      fullDescription: 'The SIH Internal Hackathon 2026 convened over 40 multidisciplinary student engineering teams from the Department of CSE (Data Science) to architect and pitch high-impact solutions for national problem statements. Student cohorts defended live working prototypes before an expert evaluation jury of senior faculty and industry mentors.',
      stats: [
        { label: 'Participating Teams', value: '42 Teams' },
        { label: 'Sprint Duration', value: '24 Hours' },
        { label: 'Shortlisted Finalists', value: '06 Teams' },
        { label: 'Evaluation Panels', value: '04 Expert Juries' }
      ],
      galleryImages: [
        { src: 'assets/images/events/SIH Internal Hackathon 2026/20260901_12516PMByGPSMapCamera.webp', title: 'Hackathon Build Floor', caption: 'Teams assembling neural pipelines and full-stack prototypes.' },
        { src: 'assets/images/events/SIH Internal Hackathon 2026/20260901_124612PMByGPSMapCamera.webp', title: 'Live Prototype Demonstrations', caption: 'Student teams presenting real-time system architectures to faculty.' },
        { src: 'assets/images/events/SIH Internal Hackathon 2026/20260901_125300PMByGPSMapCamera.webp', title: 'Jury Evaluation & Scrutiny', caption: 'Panel of judges evaluating algorithmic accuracy and scalability.' },
        { src: 'assets/images/events/SIH Internal Hackathon 2026/20260901_124746PMByGPSMapCamera.webp', title: 'Sprint Collaboration', caption: 'Continuous coding and edge hardware integration in progress.' }
      ]
    },
    {
      id: 'ideathon-hackathon',
      title: 'Department Ideathon & Hackathon',
      tag: 'INNOVATION SPRINT',
      date: 'AUGUST 17, 2026',
      venue: 'INNOVATION & INCUBATION LAB',
      organizingTeam: 'Coding & Algorithms Club × AI/ML Chapter',
      image: 'assets/images/events/Ideathon and Hackathon/ideathon_pitch_team.webp',
      shortDescription: 'Rapid ideation, system design pitches, and prototype sprints tackling real-world problem statements.',
      fullDescription: 'A premier departmental convergence of ideation and rapid software engineering where students pitched novel architectural concepts and validated minimum viable products. The conclave emphasized algorithmic scalability, data privacy frameworks, and intuitive user experiences.',
      stats: [
        { label: 'Project Pitches', value: '35+ Projects' },
        { label: 'Award Grants', value: '₹50,000' },
        { label: 'Mentorship Rounds', value: '12 Sessions' },
        { label: 'Student Delegates', value: '140+ Attendees' }
      ],
      galleryImages: [
        { src: 'assets/images/events/Ideathon and Hackathon/ideathon_pitch_team.webp', title: 'Tech Titans Project Presentation', caption: 'Student cohort defending their "Nagpur Future Simulator" architectural model before the jury.' },
        { src: 'assets/images/events/Ideathon and Hackathon/ideathon_screen_focus.webp', title: 'Interactive Simulator Pitch', caption: 'Lead presenter detailing the data pipeline schema and system UI.' },
        { src: 'assets/images/events/Ideathon and Hackathon/20260817_53333PMByGPSMapCamera.webp', title: 'Jury Diligence & Q&A', caption: 'Technical jury cross-examining candidate architecture diagrams.' },
        { src: 'assets/images/events/Ideathon and Hackathon/20260817_51633PMByGPSMapCamera.webp', title: 'Main Innovation Pitch Stage', caption: 'Student founders pitching data science and AI applications.' }
      ]
    },
    {
      id: 'hackathon-3rd-year',
      title: '3rd Year Technical Hackathon',
      tag: 'CODE CONCLAVE',
      date: 'AUGUST 08, 2026',
      venue: 'CSE (DS) ADVANCED LAB CLUSTER',
      organizingTeam: '3rd Year Department Cohort & Forum Leads',
      image: 'assets/images/events/Hackathon 3rd Year/20260808_25950PMByGPSMapCamera.webp',
      shortDescription: 'Intensive 12-hour full-stack and machine learning coding sprint designed for 3rd-year engineering students.',
      fullDescription: 'An exclusive departmental coding marathon challenging 3rd-year undergraduates to architect end-to-end data science pipelines, computer vision tools, and web applications. Focus areas included distributed data ingestion, cloud deployment, and microservices architecture.',
      stats: [
        { label: 'Competing Teams', value: '28 Teams' },
        { label: 'Sprint Duration', value: '12 Hours' },
        { label: 'Mentors Active', value: '10 Mentors' },
        { label: 'Final Laureates', value: 'Top 3 Podium' }
      ],
      galleryImages: [
        { src: 'assets/images/events/Hackathon 3rd Year/20260808_25950PMByGPSMapCamera.webp', title: 'Computing Lab Sprint Arena', caption: '3rd-year engineering cohorts in active code sprint mode.' },
        { src: 'assets/images/events/Hackathon 3rd Year/20260808_25941PMByGPSMapCamera.webp', title: 'Architecture Review', caption: 'Senior peer mentors reviewing repository git commits and code.' },
        { src: 'assets/images/events/Hackathon 3rd Year/20260808_25954PMByGPSMapCamera.webp', title: 'Live Software Deployment', caption: 'Teams benchmarking real-time inference latency.' },
        { src: 'assets/images/events/Hackathon 3rd Year/20260808_122344PMByGPSMapCamera.webp', title: 'Inaugural Hackathon Address', caption: 'Faculty briefing teams on problem matrix and evaluation criteria.' }
      ]
    },
    {
      id: 'nodemation',
      title: 'NODEMATION',
      tag: 'AI AUTOMATION MASTERCLASS',
      date: 'AUGUST 24, 2026',
      venue: 'DATA SCIENCE SEMINAR HALL',
      organizingTeam: 'IoT & Automation Club × Forum Tech Leads',
      image: 'assets/images/events/NODEMATION/nodemation_main.webp',
      shortDescription: 'Hands-on masterclass on building autonomous LLM agents, API orchestration pipelines, and workflow automation with n8n.',
      fullDescription: 'NODEMATION is the premier departmental hands-on workshop focused on enterprise workflow automation using n8n and generative AI nodes. Students engineered end-to-end webhook triggers, automated multi-agent systems, and LLM data extraction pipelines in a packed, high-energy lab environment.',
      stats: [
        { label: 'Workshop Attendees', value: '120+ Students' },
        { label: 'Workflows Built', value: '08 Pipelines' },
        { label: 'Practical Labs', value: '100% Hands-On' },
        { label: 'Session Duration', value: '04 Hours' }
      ],
      galleryImages: [
        { src: 'assets/images/events/NODEMATION/nodemation_main.webp', title: 'NODEMATION Classroom Build Floor', caption: 'Full house of students actively coding and testing workflow automations.' },
        { src: 'assets/images/events/NODEMATION/nodemation_cohort.webp', title: 'Front-Row Coding Cohort', caption: 'Students engaged in live interactive node pipeline deployment.' },
        { src: 'assets/images/events/n8n Automation Workshop/IMG-20260824-WA0063.webp', title: 'Keynote Lecture & Walkthrough', caption: 'Demonstrating visual node orchestration and webhook integration.' },
        { src: 'assets/images/events/n8n Automation Workshop/IMG-20260824-WA0073.webp', title: 'Live AI Agent Demo', caption: 'Connecting local LLMs to automated trigger pipelines.' }
      ]
    },
    {
      id: 'acm-icpc-seminar',
      title: 'ACM ICPC Competitive Coding Seminar',
      tag: 'ALGORITHMIC EXCELLENCE',
      date: 'AUGUST 24, 2026',
      venue: 'CENTRAL AUDITORIUM',
      organizingTeam: 'Coding & Algorithms Club & Faculty Mentors',
      image: 'assets/images/events/ACM ICPC Seminar/IMG_20260824_144156.webp',
      shortDescription: 'Strategic masterclass on advanced dynamic programming, graph algorithms, and ICPC regional preparation.',
      fullDescription: 'A high-impact seminar delivered by experienced competitive programmers and algorithmic mentors. The session dissected complex graph theory, number theory, and advanced dynamic programming patterns required to conquer ICPC regionals and national programming summits.',
      stats: [
        { label: 'Auditorium Delegates', value: '150+ Attendees' },
        { label: 'Algorithmic Paradigms', value: '15 Topics' },
        { label: 'ICPC Roadmap', value: 'Regional Path' },
        { label: 'Live Code Breakdown', value: '02 Hours' }
      ],
      galleryImages: [
        { src: 'assets/images/events/ACM ICPC Seminar/IMG_20260824_144156.webp', title: 'Auditorium Keynote Stage', caption: 'Speaker presenting competitive algorithmic paradigms.' },
        { src: 'assets/images/events/ACM ICPC Seminar/IMG_20260824_144136.webp', title: 'Auditorium Delegates & Students', caption: 'Full house of aspiring competitive programmers and coders.' },
        { src: 'assets/images/events/ACM ICPC Seminar/IMG_20260824_144031.webp', title: 'Algorithmic Problem Breakdown', caption: 'Dissecting complex tree traversal and dynamic programming memoization.' },
        { src: 'assets/images/events/ACM ICPC Seminar/IMG_20260824_144147.webp', title: 'Interactive Q&A Session', caption: 'Student discussion on rating growth and contest time management.' }
      ]
    },
    {
      id: 'manthan4yuva-winners',
      title: 'Manthan4Yuva State Conclave Felicitation',
      tag: 'STATE CONCLAVE LAUREATES',
      date: 'SEPTEMBER 02, 2026',
      venue: 'CAMPUS FELICITATION ARENA',
      organizingTeam: 'Department Executive Forum & Academic Council',
      image: 'assets/images/events/Manthan4yuva Winners/IMG-20260902-WA0023.webp',
      shortDescription: 'Felicitation of department student champions winning top state honors at the Manthan4Yuva summit.',
      fullDescription: 'Celebrating the outstanding triumph of student cohorts from CSE (Data Science) who secured premier awards and state-level recognition at Manthan4Yuva. The ceremony recognized technical brilliance, social innovation projects, and leadership excellence.',
      stats: [
        { label: 'State Laureates', value: '10 Champions' },
        { label: 'Cash & Honorarium', value: '₹1,00,000+' },
        { label: 'Project Category', value: 'AI Innovation' },
        { label: 'Faculty Mentors', value: 'Honored' }
      ],
      galleryImages: [
        { src: 'assets/images/events/Manthan4yuva Winners/IMG-20260902-WA0023.webp', title: 'State Trophy Presentation', caption: 'Student champions receiving state conclave trophy and honors.' },
        { src: 'assets/images/events/Manthan4yuva Winners/IMG-20260902-WA0025.webp', title: 'Podium Winners Celebration', caption: 'Winning team holding commemorative awards with faculty.' },
        { src: 'assets/images/events/Manthan4yuva Winners/IMG-20260902-WA0029.webp', title: 'Faculty & Mentors Felicitation', caption: 'Faculty guides acknowledged for dedicated project supervision.' },
        { src: 'assets/images/events/Manthan4yuva Winners/IMG-20260902-WA0019.webp', title: 'Student Laureates Group Photo', caption: 'Department delegation celebrating collective achievement.' }
      ]
    },
    {
      id: 'department-inauguration',
      title: 'EMERGICON Inauguration & Foundation',
      tag: 'INAUGURAL CEREMONY',
      date: 'AUGUST 14, 2026',
      venue: 'CSE (DS) ATRIUM & CONVENTION HALL',
      organizingTeam: 'EMERGICON Executive Forum Leadership',
      image: 'assets/images/events/Department Inauguration/emergicon_inauguration_cohort.webp',
      shortDescription: 'Official ceremonial unveiling of the EMERGICON Student Forum and inaugural academic address.',
      fullDescription: 'The grand inaugural ceremony marking the official establishment of the EMERGICON Student Forum. Attended by academic leadership, faculty dignitaries, and student council members, the event outlined the vision, charter, and roadmap for technical innovation in data science.',
      stats: [
        { label: 'Charter Launch', value: 'EMERGICON 2026' },
        { label: 'Dignitaries Present', value: '15 Faculty Chairs' },
        { label: 'Student Council', value: 'Inducted' },
        { label: 'Technical Chapters', value: '10 Unveiled' }
      ],
      galleryImages: [
        { src: 'assets/images/events/Department Inauguration/emergicon_inauguration_cohort.webp', title: 'Grand Inauguration Council Photo', caption: 'Student council members in uniform blazers behind illuminated EMERGICON stage lettering.' },
        { src: 'assets/images/events/Department Inauguration/emergicon_council_stage.webp', title: 'Stage Lettering & Forum Leaders', caption: 'Close-up of the forum executive cohort and illuminated 3D insignia.' },
        { src: 'assets/images/events/Department Inauguration/20260814_35339PMByGPSMapCamera.webp', title: 'Lighting of the Lamp & Ceremony', caption: 'Traditional inaugural lamp lighting by department leadership.' },
        { src: 'assets/images/events/Department Inauguration/20260814_34609PMByGPSMapCamera.webp', title: 'Inaugural Dignitaries on Stage', caption: 'HOD and faculty heads addressing the inaugural student gathering.' }
      ]
    },
    {
      id: 'goal-and-zor',
      title: 'Goal&Zor',
      tag: 'ANNUAL SPORTS & COHORT FEST',
      date: 'SEPTEMBER 2026',
      venue: 'CAMPUS SPORTS GROUND & ATHLETIC ARENA',
      organizingTeam: 'Sports, Discipline & Student Experience Chapters',
      image: 'assets/images/events/GOA_ZOR/goa_zor_main.webp',
      shortDescription: 'Flagship annual departmental outdoor sports festival, athletic tournaments, and cohort bonding games.',
      fullDescription: 'Goal&Zor is the premier annual outdoor sports conclave and cohort festival organized by the Department of CSE (Data Science) and EMERGICON. Bringing together students across all semesters along with faculty coordinators, the day celebrates athletic excellence, teamwork, and unity through competitive football matches, track sprints, tug-of-war, and outdoor recreation.',
      stats: [
        { label: 'Participating Students', value: '180+ Cohort' },
        { label: 'Sporting Events', value: '08 Tournaments' },
        { label: 'Competing Squads', value: '16 Teams' },
        { label: 'Championship Trophy', value: 'Awarded' }
      ],
      galleryImages: [
        { src: 'assets/images/events/GOA_ZOR/goa_zor_main.webp', title: 'Grand Cohort Assembly', caption: 'Entire department student body, faculty, and forum leads at the main ground.' },
        { src: 'assets/images/events/GOA_ZOR/goa_zor_cohort.webp', title: 'Outdoor Sports Festival Arena', caption: 'Student cohorts and team squads gathered under the campus sun.' },
        { src: 'assets/images/events/GOA_ZOR/goa_zor_squad_left.webp', title: 'Alpha Squad & Players', caption: 'Senior student athletes and team captains preparing for match kickoff.' },
        { src: 'assets/images/events/GOA_ZOR/goa_zor_squad_right.webp', title: 'Beta Squad & Cheering Cohort', caption: 'Student delegates celebrating departmental spirit and camaraderie.' }
      ]
    },
    {
      id: 'moviecon',
      title: 'MOVIECON &bull; Chhichhore Screening',
      tag: 'CINEMATIC COHORT NIGHT',
      date: 'SEPTEMBER 2026',
      venue: 'DEPARTMENT MULTIPLEX AUDITORIUM',
      organizingTeam: 'EMERGICON Cultural & Student Welfare Chapter',
      image: 'assets/images/events/MOVIECON/moviecon_main.webp',
      shortDescription: 'Exclusive departmental cinematic screening of "Chhichhore" celebrating college life, friendship, and resilience.',
      fullDescription: 'MOVIECON brought together the entire student body, faculty, and executive council of CSE (Data Science) for an unforgettable cinematic evening featuring the inspirational blockbuster "Chhichhore". The evening celebrated the spirit of engineering camaraderie, perseverance through challenges, and lifelong friendships, accompanied by big-screen projection, popcorn, and an electric atmosphere.',
      stats: [
        { label: 'Featured Film', value: 'Chhichhore' },
        { label: 'Student Audience', value: '250+ Attendees' },
        { label: 'Screening Format', value: 'Multiplex Projection' },
        { label: 'Cohort Atmosphere', value: '100% Electrifying' }
      ],
      galleryImages: [
        { src: 'assets/images/events/MOVIECON/moviecon_main.webp', title: 'MOVIECON Big Screen Unveiling', caption: 'Auditorium crowd cheering as the EMERGICON MOVIECON marquee lights up.' },
        { src: 'assets/images/events/MOVIECON/moviecon_banner.webp', title: 'EMERGICON Presents MOVIECON', caption: 'Official glowing golden marquee and department insignia.' },
        { src: 'assets/images/events/MOVIECON/moviecon_audience.webp', title: 'Cheering Student Audience', caption: 'Students celebrating and filming the opening titles in the darkened auditorium.' },
        { src: 'assets/images/events/MOVIECON/moviecon_marquee.webp', title: 'Cinematic Marquee Detail', caption: 'Golden typographic insignia commemorating the department movie conclave.' }
      ]
    },
    {
      id: 'anti-ragging-awareness',
      title: 'Anti-Ragging Awareness Conclave',
      tag: 'CAMPUS WELFARE & SAFETY',
      date: 'AUGUST 14, 2026',
      venue: 'DEPARTMENT LECTURE THEATRE',
      organizingTeam: 'Discipline Club & Student Welfare Committee',
      image: 'assets/images/events/Anti_Ragging/anti_ragging_main.webp',
      shortDescription: 'Institutional orientation and legal awareness seminar fostering a zero-tolerance, safe, and inclusive campus environment.',
      fullDescription: 'The Anti-Ragging Awareness Conclave is an essential institutional seminar organized by the Department of CSE (Data Science) and EMERGICON Discipline Council. Faculty mentors and student welfare coordinators briefed the incoming and senior cohorts on UGC regulations, anti-ragging helpline protocols, campus code of conduct, and fostering mutual respect and psychological safety across all academic batches.',
      stats: [
        { label: 'Student Attendance', value: '150+ Delegates' },
        { label: 'UGC Compliance', value: '100% Zero-Tolerance' },
        { label: 'Committee Oversight', value: 'Faculty & Council' },
        { label: 'Session Protocol', value: 'Institutional Code' }
      ],
      galleryImages: [
        { src: 'assets/images/events/Anti_Ragging/anti_ragging_main.webp', title: 'Institutional Seminar & Faculty Address', caption: 'Faculty mentor briefing the packed department hall on campus welfare.' },
        { src: 'assets/images/events/Anti_Ragging/anti_ragging_speaker.webp', title: 'Code of Conduct Presentation', caption: 'Interactive session detailing anti-ragging legal frameworks and guidelines.' },
        { src: 'assets/images/events/Anti_Ragging/anti_ragging_students.webp', title: 'Student Cohort Orientation', caption: 'First-year and senior student cohorts participating in campus ethics induction.' },
        { src: 'assets/images/events/Department Inauguration/20260814_34612PMByGPSMapCamera.webp', title: 'Council Leadership Interaction', caption: 'Forum discipline leads addressing delegates on student support resources.' }
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
            <img src="${evt.image}" alt="${evt.title}" class="carousel-card-img" loading="lazy" decoding="async">
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
