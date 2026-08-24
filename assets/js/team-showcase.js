/**
 * EMERGICON — Forum Team & Department Technical Clubs Showcase Engine
 * Department of Computer Science & Engineering (Data Science)
 * 
 * 1. Core Leadership Orbit (8 Heads) — Aryan Nagmote, Yashaswini Kalambe, etc.
 * 2. Co-Team Curved Arc Gallery (18 Co-Heads) — Operational & Technical Leads
 * 3. Technical Clubs Pinwheel Cluster (10 Clubs & Heads) — Reference Image 360° Overlapping Spatial Hub
 * 4. Frosted-Glass LinkedIn & Email Contact Overlays
 * 5. Expandable In-Page Profile Modal with Gesture & Keyboard Support
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATASETS (SYNCHRONIZED WITH SINGLE SOURCE OF TRUTH)
  // --------------------------------------------------------------------------
  
  // 8 Core Team Heads (Official Department Leadership)
  const coreTeamData = [
    {
      id: 'core-1',
      name: 'Aryan Nagmote',
      role: 'President',
      badge: 'Core Leadership',
      designation: 'Executive Forum Lead // CSE (Data Science)',
      photo: 'assets/images/leader-1.jpg',
      linkedin: '#',
      email: 'mailto:president@emergicon.edu',
      bio: 'Leading EMERGICON technical symposiums, research cohorts, and high-performance neural computing initiatives across the department.'
    },
    {
      id: 'core-2',
      name: 'Yashaswini Kalambe',
      role: 'Vice President',
      badge: 'Core Leadership',
      designation: 'Strategic Operations & Academic Affairs',
      photo: 'assets/images/leader-2.jpg',
      linkedin: '#',
      email: 'mailto:vp@emergicon.edu',
      bio: 'Coordinating student outreach, academic forum partnerships, and multi-track competitive hackathon schedules.'
    },
    {
      id: 'core-3',
      name: 'Tanish Ghormare',
      role: 'Secretary',
      badge: 'Core Leadership',
      designation: 'Council Secretariat & Documentation',
      photo: 'assets/images/leader-4.jpg',
      linkedin: '#',
      email: 'mailto:secretary@emergicon.edu',
      bio: 'Managing official departmental records, inter-college communiques, resolution charters, and delegate registrations.'
    },
    {
      id: 'core-4',
      name: 'Rupali Chaudhari',
      role: 'Event Head',
      badge: 'Core Leadership',
      designation: 'Conclave Director & Stage Orchestration',
      photo: 'assets/images/leader-3.jpg',
      linkedin: '#',
      email: 'mailto:events@emergicon.edu',
      bio: 'Spearheading logistical execution, live stage management, keynote schedules, and delegate experiences for 1,400+ participants.'
    },
    {
      id: 'core-5',
      name: 'Harsh Supekar',
      role: 'Treasurer',
      badge: 'Core Leadership',
      designation: 'Fiscal Management & Corporate Sponsorships',
      photo: 'assets/images/leader-1.jpg',
      linkedin: '#',
      email: 'mailto:treasury@emergicon.edu',
      bio: 'Overseeing departmental budgets, grant allocations, corporate tier sponsorships, and prize distributions.'
    },
    {
      id: 'core-6',
      name: 'Shravil Karotiya',
      role: 'Technical Head',
      badge: 'Core Leadership',
      designation: 'Systems Architecture & Compute Infrastructure',
      photo: 'assets/images/leader-2.jpg',
      linkedin: '#',
      email: 'mailto:tech@emergicon.edu',
      bio: 'Directing GPU compute infrastructure, portal web architectures, AI gesture engines, and hackathon evaluation pipelines.'
    },
    {
      id: 'core-7',
      name: 'Ansh Meshram',
      role: 'Media Head',
      badge: 'Core Leadership',
      designation: 'Visual Identity, Cinematography & Press',
      photo: 'assets/images/leader-4.jpg',
      linkedin: '#',
      email: 'mailto:media@emergicon.edu',
      bio: 'Curating the visual narrative, teaser cinematics, livestream engineering, and department editorial publications.'
    },
    {
      id: 'core-8',
      name: 'Ayush Khade',
      role: 'Sports Head',
      badge: 'Core Leadership',
      designation: 'Athletics, Esports & Tactical Tournaments',
      photo: 'assets/images/leader-3.jpg',
      linkedin: '#',
      email: 'mailto:sports@emergicon.edu',
      bio: 'Organizing inter-department athletic meets, annual collegiate esports arenas, and fitness conclaves.'
    }
  ];

  // 10 Department Technical Clubs (Reference Image Based)
  const clubsData = [
    {
      id: 'club-1',
      index: '01',
      clubName: 'Cultural Club',
      headName: 'Palak Singh',
      role: 'Club Head',
      badge: 'Department Chapter // 01',
      tagline: 'Arts, Performing Stage & Creative Expression',
      photo: 'assets/images/leader-2.jpg',
      linkedin: '#',
      email: 'mailto:cultural.club@emergicon.edu',
      bio: 'Fostering expressive cultural performances, annual gala productions, theatrical showcases, and inter-collegiate festivals.'
    },
    {
      id: 'club-2',
      index: '02',
      clubName: 'Art and Craft Club',
      headName: 'Ayush Wadiyalwar',
      role: 'Club Head',
      badge: 'Department Chapter // 02',
      tagline: 'Visual Arts, Exhibition & Installation Craft',
      photo: 'assets/images/leader-4.jpg',
      linkedin: '#',
      email: 'mailto:art.club@emergicon.edu',
      bio: 'Designing experiential art installations, stage backdrops, creative origami, and exhibition aesthetics.'
    },
    {
      id: 'club-3',
      index: '03',
      clubName: 'Competitive Coding Club',
      headName: 'Aryan Hasoriya',
      role: 'Club Head',
      badge: 'Department Chapter // 03',
      tagline: 'Algorithms, Data Structures & ICPC Sprints',
      photo: 'assets/images/leader-1.jpg',
      linkedin: '#',
      email: 'mailto:coding.club@emergicon.edu',
      bio: 'Hosting weekly algorithmic contests, ICPC coaching bootcamps, and high-intensity graph theory problem solving.'
    },
    {
      id: 'club-4',
      index: '04',
      clubName: 'Agentic AI & Gen AI Club',
      headName: 'Sujal Kawle',
      role: 'Club Head',
      badge: 'Department Chapter // 04',
      tagline: 'Foundation Models, LLM Agents & Multi-Agent Swarms',
      photo: 'assets/images/leader-3.jpg',
      linkedin: '#',
      email: 'mailto:genai.club@emergicon.edu',
      bio: 'Researching autonomous LLM agents, reinforcement learning from human feedback, and generative multi-modal systems.'
    },
    {
      id: 'club-5',
      index: '05',
      clubName: 'GATE Club',
      headName: 'Nandini Kasare',
      role: 'Club Head',
      badge: 'Department Chapter // 05',
      tagline: 'Core CS Foundations & National Exam Cohorts',
      photo: 'assets/images/leader-2.jpg',
      linkedin: '#',
      email: 'mailto:gate.club@emergicon.edu',
      bio: 'Mentoring aspirants in Theory of Computation, Operating Systems, Database Internals, and Computer Organization.'
    },
    {
      id: 'club-6',
      index: '06',
      clubName: 'NPTEL Club',
      headName: 'Pushkar Karnayake',
      role: 'Club Head',
      badge: 'Department Chapter // 06',
      tagline: 'Academic Certifications & Research Foundations',
      photo: 'assets/images/leader-4.jpg',
      linkedin: '#',
      email: 'mailto:nptel.club@emergicon.edu',
      bio: 'Facilitating advanced IIT/IISc credit certification pathways and research cohort discussion forums.'
    },
    {
      id: 'club-7',
      index: '07',
      clubName: 'Soft Skill Club',
      headName: 'Samyak Ukey',
      role: 'Club Head',
      badge: 'Department Chapter // 07',
      tagline: 'Corporate Oratory, Debating & Executive Presence',
      photo: 'assets/images/leader-1.jpg',
      linkedin: '#',
      email: 'mailto:softskills.club@emergicon.edu',
      bio: 'Cultivating leadership eloquence, executive interview preparation, debate summits, and boardroom pitch mastery.'
    },
    {
      id: 'club-8',
      index: '08',
      clubName: 'Discipline Club',
      headName: 'Shivam Yerekar',
      role: 'Club Head',
      badge: 'Department Chapter // 08',
      tagline: 'Event Protocol, Crowd Flow & Council Governance',
      photo: 'assets/images/leader-3.jpg',
      linkedin: '#',
      email: 'mailto:discipline.club@emergicon.edu',
      bio: 'Ensuring seamless symposium protocol, crowd safety logistics, code of conduct, and delegate orientation.'
    },
    {
      id: 'club-9',
      index: '09',
      clubName: 'IoT Club',
      headName: 'Kalash Bamankar',
      role: 'Club Head',
      badge: 'Department Chapter // 09',
      tagline: 'Embedded Systems, Sensors & Edge Telemetry',
      photo: 'assets/images/leader-4.jpg',
      linkedin: '#',
      email: 'mailto:iot.club@emergicon.edu',
      bio: 'Building embedded sensor arrays, micro-controller networks, edge robotics, and real-time smart campus hardware.'
    },
    {
      id: 'club-10',
      index: '10',
      clubName: 'Graphic Designing Club',
      headName: 'Aryan Nagmote',
      role: 'Club Head',
      badge: 'Department Chapter // 10',
      tagline: 'Design Systems, 3D Renders & Visual Identity',
      photo: 'assets/images/leader-1.jpg',
      linkedin: '#',
      email: 'mailto:design.club@emergicon.edu',
      bio: 'Crafting brand design systems, WebGL digital assets, typographic posters, and visual conference collateral.'
    }
  ];

  // 18 Co-Team Members (Co-Heads)
  const coTeamData = [
    {
      id: 'co-1',
      name: 'Devansh Patil',
      role: 'Co-Event Lead',
      track: 'Logistics & Arena',
      photo: 'assets/images/leader-1.jpg',
      linkedin: '#',
      email: 'mailto:co-events1@emergicon.edu',
      bio: 'Managing real-time hackathon venue deployment and hardware resources.'
    },
    {
      id: 'co-2',
      name: 'Meera Pillai',
      role: 'Co-Event Lead',
      track: 'Hospitality & Protocol',
      photo: 'assets/images/leader-2.jpg',
      linkedin: '#',
      email: 'mailto:co-events2@emergicon.edu',
      bio: 'Facilitating keynote guest welcoming, accommodation, and stage protocol.'
    },
    {
      id: 'co-3',
      name: 'Nikhil Saxena',
      role: 'Co-Technical Lead',
      track: 'AI Models & Cloud',
      photo: 'assets/images/leader-4.jpg',
      linkedin: '#',
      email: 'mailto:co-tech1@emergicon.edu',
      bio: 'Maintaining machine learning evaluation APIs and cloud instances.'
    },
    {
      id: 'co-4',
      name: 'Sneha Roy',
      role: 'Co-Technical Lead',
      track: 'Full-Stack Web',
      photo: 'assets/images/leader-3.jpg',
      linkedin: '#',
      email: 'mailto:co-tech2@emergicon.edu',
      bio: 'Building client-side interactive modules, animations, and registration gateways.'
    },
    {
      id: 'co-5',
      name: 'Arjun Menon',
      role: 'Co-Media Lead',
      track: 'Video & Motion Design',
      photo: 'assets/images/leader-1.jpg',
      linkedin: '#',
      email: 'mailto:co-media1@emergicon.edu',
      bio: 'Directing post-event aftermovies, 3D motion graphics, and live visual feeds.'
    },
    {
      id: 'co-6',
      name: 'Isha Singhania',
      role: 'Co-Media Lead',
      track: 'Photography & Archive',
      photo: 'assets/images/leader-2.jpg',
      linkedin: '#',
      email: 'mailto:co-media2@emergicon.edu',
      bio: 'Capturing high-resolution photo archives across all seminar halls.'
    },
    {
      id: 'co-7',
      name: 'Varun Reddy',
      role: 'Co-Treasurer',
      track: 'Corporate Grants',
      photo: 'assets/images/leader-4.jpg',
      linkedin: '#',
      email: 'mailto:co-treasury1@emergicon.edu',
      bio: 'Liaising with enterprise partners for sponsorship deliverables.'
    },
    {
      id: 'co-8',
      name: 'Diya Sen',
      role: 'Co-Treasurer',
      track: 'Budget & Procurement',
      photo: 'assets/images/leader-3.jpg',
      linkedin: '#',
      email: 'mailto:co-treasury2@emergicon.edu',
      bio: 'Managing equipment procurement and daily expenditure accounting.'
    },
    {
      id: 'co-9',
      name: 'Kabir Mehta',
      role: 'Co-Secretary',
      track: 'Public Relations',
      photo: 'assets/images/leader-1.jpg',
      linkedin: '#',
      email: 'mailto:co-sec1@emergicon.edu',
      bio: 'Publishing department news bulletins and official press communiques.'
    },
    {
      id: 'co-10',
      name: 'Rhea Chakraborty',
      role: 'Co-Secretary',
      track: 'Documentation',
      photo: 'assets/images/leader-2.jpg',
      linkedin: '#',
      email: 'mailto:co-sec2@emergicon.edu',
      bio: 'Drafting conclave documentation, certificates, and annual reports.'
    },
    {
      id: 'co-11',
      name: 'Yashwardhan G.',
      role: 'Co-Sports Lead',
      track: 'Esports League',
      photo: 'assets/images/leader-4.jpg',
      linkedin: '#',
      email: 'mailto:co-sports1@emergicon.edu',
      bio: 'Administering collegiate esports bracket tournaments and server rigs.'
    },
    {
      id: 'co-12',
      name: 'Anika Kapoor',
      role: 'Co-Sports Lead',
      track: 'Outdoor Sports',
      photo: 'assets/images/leader-3.jpg',
      linkedin: '#',
      email: 'mailto:co-sports2@emergicon.edu',
      bio: 'Organizing inter-batch athletics, football leagues, and fitness rallies.'
    },
    {
      id: 'co-13',
      name: 'Siddhant Gupta',
      role: 'Design Co-Lead',
      track: 'UI/UX & Identity',
      photo: 'assets/images/leader-1.jpg',
      linkedin: '#',
      email: 'mailto:design@emergicon.edu',
      bio: 'Crafting the design systems, poster typography, and digital badges.'
    },
    {
      id: 'co-14',
      name: 'Trisha Bannerjee',
      role: 'Outreach Co-Lead',
      track: 'Inter-College Alliances',
      photo: 'assets/images/leader-2.jpg',
      linkedin: '#',
      email: 'mailto:outreach@emergicon.edu',
      bio: 'Connecting student delegations from 40+ universities across the state.'
    },
    {
      id: 'co-15',
      name: 'Kunal Bhatia',
      role: 'Logistics Co-Lead',
      track: 'Hardware Labs',
      photo: 'assets/images/leader-4.jpg',
      linkedin: '#',
      email: 'mailto:logistics@emergicon.edu',
      bio: 'Coordinating hardware testing kits, power lines, and IoT sensor arrays.'
    },
    {
      id: 'co-16',
      name: 'Sanjana Hegde',
      role: 'Creative Co-Lead',
      track: 'Exhibition & Art',
      photo: 'assets/images/leader-3.jpg',
      linkedin: '#',
      email: 'mailto:creative@emergicon.edu',
      bio: 'Designing installation art, entrance lobbies, and tech exhibit displays.'
    },
    {
      id: 'co-17',
      name: 'Manish Tiwari',
      role: 'Operations Co-Lead',
      track: 'Crowd & Security',
      photo: 'assets/images/leader-1.jpg',
      linkedin: '#',
      email: 'mailto:operations@emergicon.edu',
      bio: 'Ensuring safe attendee flow, security checks, and auditorium access.'
    },
    {
      id: 'co-18',
      name: 'Natasha Dsouza',
      role: 'Workshop Co-Lead',
      track: 'Technical Cohorts',
      photo: 'assets/images/leader-2.jpg',
      linkedin: '#',
      email: 'mailto:workshops@emergicon.edu',
      bio: 'Coordinating student mentor sessions, hands-on labs, and speaker Q&As.'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. STATE & CONFIGURATION
  // --------------------------------------------------------------------------
  let activeCoreIndex = 0;
  let coreAutoTimer = null;
  let coreResumeTimeout = null;
  let isCoreInteracting = false;

  let activeClubIndex = 0;
  let clubAutoTimer = null;
  let clubResumeTimeout = null;
  let isClubInteracting = false;

  let isModalOpen = false;

  // DOM Refs
  let coreOrbitStage = null;
  let coreCardsContainer = null;
  let coreDotsContainer = null;
  let coCurvedStage = null;
  let coCurvedTrack = null;
  let clubsStage = null;
  let clubsCardsWrap = null;
  let clubsFocalHub = null;
  let teamModal = null;

  // Co-Team Curved Arc Engine Physics State
  let coScrollOffset = 0;
  let coTargetOffset = 0;
  const coVelocity = 0.55;
  let coIsDragging = false;
  let coStartX = 0;
  let coLastX = 0;
  let coResumeTimeout = null;
  let coIsInteracting = false;

  // --------------------------------------------------------------------------
  // 3. INITIALIZATION ON DOM READY
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initCoreTeamOrbit();
    initCoTeamCurvedArc();
    initClubsCluster();
    initTeamModal();
  });

  // --------------------------------------------------------------------------
  // 4. CORE TEAM 3D SPATIAL ORBIT ENGINE (REFERENCE 01 STYLE)
  // --------------------------------------------------------------------------
  function initCoreTeamOrbit() {
    coreOrbitStage = document.getElementById('core-team-orbit-stage');
    coreCardsContainer = document.getElementById('core-team-cards-wrap');
    coreDotsContainer = document.getElementById('core-team-dots-wrap');

    if (!coreOrbitStage || !coreCardsContainer) return;

    renderCoreTeamCards();
    renderCoreTeamDots();
    updateCoreOrbitPositions(true);
    startCoreAutoTimer();
    setupCoreControls();
  }

  function renderCoreTeamCards() {
    coreCardsContainer.innerHTML = coreTeamData.map((member, index) => `
      <div class="orbit-card-3d ${index === activeCoreIndex ? 'active' : ''}" 
           data-core-index="${index}" 
           tabindex="0"
           role="button"
           aria-label="View profile of ${member.name}, ${member.role}">
        
        <div class="orbit-card-photo-wrap">
          <img src="${member.photo}" alt="${member.name}" class="orbit-card-photo" loading="lazy">
          
          <div class="member-contact-overlay" aria-label="Connect with ${member.name}">
            <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-icon-btn contact-linkedin" title="LinkedIn Profile" aria-label="LinkedIn" onclick="event.stopPropagation();">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.62.72-1.62 1.63 0 .9.72 1.62 1.62 1.62.9 0 1.63-.72 1.63-1.62 0-.91-.73-1.63-1.63-1.63Z"/>
              </svg>
            </a>
            <a href="${member.email}" class="contact-icon-btn contact-email" title="Send Email" aria-label="Email" onclick="event.stopPropagation();">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          <div class="orbit-card-role-tag font-mono">
            <span class="badge-dot-live"></span>
            <span>${member.role.toUpperCase()}</span>
          </div>
        </div>

        <div class="orbit-card-info">
          <h3 class="orbit-card-name">${member.name}</h3>
          <p class="orbit-card-designation">${member.designation}</p>
          <div class="orbit-card-tap-hint font-mono">
            <span>EXPLORE PROFILE &rarr;</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderCoreTeamDots() {
    if (!coreDotsContainer) return;
    coreDotsContainer.innerHTML = coreTeamData.map((_, i) => `
      <button class="orbit-dot ${i === activeCoreIndex ? 'active' : ''}" 
              data-core-dot="${i}" 
              aria-label="Navigate to ${coreTeamData[i].role}">
      </button>
    `).join('');
  }

  function updateCoreOrbitPositions(immediate = false) {
    const cards = coreCardsContainer.querySelectorAll('.orbit-card-3d');
    const total = coreTeamData.length;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && !isMobile;

    const radiusX = isMobile ? 180 : (isTablet ? 290 : 400);
    const radiusZ = isMobile ? 130 : (isTablet ? 200 : 280);

    cards.forEach((card, i) => {
      let diff = i - activeCoreIndex;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      const angle = (diff / total) * (2 * Math.PI);
      const sin = Math.sin(angle);
      const cos = Math.cos(angle);

      const x = sin * radiusX;
      const z = (cos - 1) * radiusZ;
      const rotateY = -sin * 36;
      const scale = cos > 0 ? (0.85 + 0.30 * cos) : 0.68;
      const opacity = cos > 0 ? (0.35 + 0.65 * Math.pow(cos, 1.4)) : 0.15;
      const zIndex = Math.round((cos + 1) * 60);
      const blur = Math.max(0, (1 - cos) * 5.5);

      card.style.transition = immediate ? 'none' : 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s, filter 0.7s';
      card.style.transform = `translate3d(${x.toFixed(1)}px, 0px, ${z.toFixed(1)}px) rotateY(${rotateY.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
      card.style.opacity = opacity.toFixed(2);
      card.style.zIndex = zIndex;
      card.style.filter = blur > 0.5 ? `blur(${blur.toFixed(1)}px)` : 'none';

      if (diff === 0) {
        card.classList.add('active');
        card.setAttribute('aria-hidden', 'false');
      } else {
        card.classList.remove('active');
        card.setAttribute('aria-hidden', 'true');
      }
    });

    if (coreDotsContainer) {
      const dots = coreDotsContainer.querySelectorAll('.orbit-dot');
      dots.forEach((dot, i) => {
        if (i === activeCoreIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  function nextCoreMember() {
    activeCoreIndex = (activeCoreIndex + 1) % coreTeamData.length;
    updateCoreOrbitPositions();
  }

  function prevCoreMember() {
    activeCoreIndex = (activeCoreIndex - 1 + coreTeamData.length) % coreTeamData.length;
    updateCoreOrbitPositions();
  }

  function goToCoreMember(index) {
    activeCoreIndex = (index + coreTeamData.length) % coreTeamData.length;
    updateCoreOrbitPositions();
  }

  function startCoreAutoTimer() {
    stopCoreAutoTimer();
    coreAutoTimer = setInterval(() => {
      if (!isCoreInteracting && !isModalOpen) {
        nextCoreMember();
      }
    }, 4000);
  }

  function stopCoreAutoTimer() {
    if (coreAutoTimer) clearInterval(coreAutoTimer);
    coreAutoTimer = null;
  }

  function pauseCoreAuto() {
    isCoreInteracting = true;
    stopCoreAutoTimer();
    if (coreResumeTimeout) clearTimeout(coreResumeTimeout);
    coreResumeTimeout = setTimeout(() => {
      isCoreInteracting = false;
      startCoreAutoTimer();
    }, 6000);
  }

  function setupCoreControls() {
    const prevBtn = document.getElementById('core-team-prev-btn');
    const nextBtn = document.getElementById('core-team-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        pauseCoreAuto();
        prevCoreMember();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        pauseCoreAuto();
        nextCoreMember();
      });
    }

    if (coreDotsContainer) {
      coreDotsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('[data-core-dot]');
        if (dot) {
          pauseCoreAuto();
          const targetIdx = parseInt(dot.getAttribute('data-core-dot'), 10);
          goToCoreMember(targetIdx);
        }
      });
    }

    coreCardsContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.orbit-card-3d');
      if (!card) return;

      const idx = parseInt(card.getAttribute('data-core-index'), 10);
      pauseCoreAuto();

      if (idx === activeCoreIndex) {
        openTeamMemberModal(coreTeamData[idx]);
      } else {
        goToCoreMember(idx);
      }
    });

    let startX = 0;
    let isDragging = false;

    coreOrbitStage.addEventListener('pointerdown', (e) => {
      startX = e.clientX;
      isDragging = true;
      pauseCoreAuto();
    });

    window.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const deltaX = e.clientX - startX;
      if (deltaX > 45) {
        prevCoreMember();
      } else if (deltaX < -45) {
        nextCoreMember();
      }
    });

    coreOrbitStage.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 768) return;
      const rect = coreOrbitStage.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      coreCardsContainer.style.transform = `rotateX(${(-normY * 10).toFixed(2)}deg) rotateY(${(normX * 12).toFixed(2)}deg)`;
    });

    coreOrbitStage.addEventListener('mouseleave', () => {
      coreCardsContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

    coreOrbitStage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        pauseCoreAuto();
        nextCoreMember();
      } else if (e.key === 'ArrowLeft') {
        pauseCoreAuto();
        prevCoreMember();
      } else if (e.key === 'Enter') {
        openTeamMemberModal(coreTeamData[activeCoreIndex]);
      }
    });

    window.addEventListener('resize', () => {
      updateCoreOrbitPositions(true);
    });
  }

  // --------------------------------------------------------------------------
  // 5. CO-TEAM 3D CURVED ARC GALLERY (REFERENCE 02 STYLE)
  // --------------------------------------------------------------------------
  function initCoTeamCurvedArc() {
    coCurvedStage = document.getElementById('co-team-curved-stage');
    coCurvedTrack = document.getElementById('co-team-curved-track');
    if (!coCurvedStage || !coCurvedTrack) return;

    const cardsMarkup = coTeamData.map((member) => `
      <div class="co-curved-card" data-co-id="${member.id}" tabindex="0" role="button" aria-label="View profile of ${member.name}, ${member.role}">
        <div class="co-card-photo-wrap">
          <img src="${member.photo}" alt="${member.name}" class="co-card-photo" loading="lazy">
          
          <div class="member-contact-overlay" aria-label="Connect with ${member.name}">
            <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-icon-btn contact-linkedin" title="LinkedIn Profile" onclick="event.stopPropagation();">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.62.72-1.62 1.63 0 .9.72 1.62 1.62 1.62.9 0 1.63-.72 1.63-1.62 0-.91-.73-1.63-1.63Z"/>
              </svg>
            </a>
            <a href="${member.email}" class="contact-icon-btn contact-email" title="Send Email" onclick="event.stopPropagation();">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          <span class="co-role-pill font-mono">${member.role.toUpperCase()}</span>
        </div>
        <div class="co-card-info">
          <h4 class="co-card-name">${member.name}</h4>
          <span class="co-card-track">${member.track}</span>
        </div>
      </div>
    `).join('');

    coCurvedTrack.innerHTML = cardsMarkup + cardsMarkup;

    coCurvedTrack.addEventListener('click', (e) => {
      const card = e.target.closest('.co-curved-card');
      if (!card) return;

      const coId = card.getAttribute('data-co-id');
      const member = coTeamData.find((m) => m.id === coId);
      if (member) {
        openTeamMemberModal(member);
      }
    });

    setupCoCurvedControls();
    requestAnimationFrame(renderCoCurvedLoop);
  }

  function pauseCoAuto() {
    coIsInteracting = true;
    if (coResumeTimeout) clearTimeout(coResumeTimeout);
    coResumeTimeout = setTimeout(() => {
      coIsInteracting = false;
    }, 6000);
  }

  function setupCoCurvedControls() {
    coCurvedStage.addEventListener('pointerdown', (e) => {
      coIsDragging = true;
      coStartX = e.clientX;
      coLastX = e.clientX;
      pauseCoAuto();
      coCurvedStage.classList.add('is-dragging');
    });

    window.addEventListener('pointermove', (e) => {
      if (!coIsDragging) return;
      const deltaX = e.clientX - coLastX;
      coLastX = e.clientX;
      coTargetOffset += deltaX * 1.5;
    });

    window.addEventListener('pointerup', () => {
      if (coIsDragging) {
        coIsDragging = false;
        if (coCurvedStage) coCurvedStage.classList.remove('is-dragging');
      }
    });

    coCurvedStage.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        pauseCoAuto();
        coTargetOffset -= e.deltaX * 1.2;
      }
    }, { passive: false });

    coCurvedStage.addEventListener('mouseenter', () => {
      pauseCoAuto();
    });
  }

  function renderCoCurvedLoop() {
    if (!coCurvedTrack || !coCurvedStage) return;

    if (!coIsInteracting && !coIsDragging && !isModalOpen) {
      coTargetOffset -= coVelocity;
    }

    coScrollOffset += (coTargetOffset - coScrollOffset) * 0.1;

    const cards = coCurvedTrack.querySelectorAll('.co-curved-card');
    const cardWidth = 240;
    const totalTrackWidth = (coTeamData.length) * cardWidth;
    const stageWidth = coCurvedStage.clientWidth || window.innerWidth;
    const stageCenter = stageWidth / 2;

    if (coScrollOffset < -totalTrackWidth) {
      coScrollOffset += totalTrackWidth;
      coTargetOffset += totalTrackWidth;
    } else if (coScrollOffset > 0) {
      coScrollOffset -= totalTrackWidth;
      coTargetOffset -= totalTrackWidth;
    }

    cards.forEach((card, index) => {
      const baseX = (index * cardWidth) + coScrollOffset;
      const cardCenter = baseX + (cardWidth / 2);
      const distFromCenter = (cardCenter - stageCenter) / (stageWidth * 0.55);
      const absDist = Math.abs(distFromCenter);

      const curveDepthZ = -Math.pow(absDist, 1.8) * 160;
      const rotateY = -distFromCenter * 24;
      const scale = Math.max(0.65, 1 - Math.pow(absDist, 1.2) * 0.28);
      const opacity = Math.max(0.2, 1 - Math.pow(absDist, 1.5) * 0.55);

      card.style.transform = `translate3d(${baseX.toFixed(1)}px, 0px, ${curveDepthZ.toFixed(1)}px) rotateY(${rotateY.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
      card.style.opacity = opacity.toFixed(2);
      card.style.zIndex = Math.round(100 - absDist * 50);
    });

    requestAnimationFrame(renderCoCurvedLoop);
  }

  // --------------------------------------------------------------------------
  // 6. TECHNICAL CLUBS RADIAL PINWHEEL CLUSTER (REFERENCE IMAGE DESIGN)
  // --------------------------------------------------------------------------
  function initClubsCluster() {
    clubsStage = document.getElementById('clubs-cluster-stage');
    clubsCardsWrap = document.getElementById('clubs-cluster-cards-wrap');
    clubsFocalHub = document.getElementById('clubs-focal-hub');

    if (!clubsStage || !clubsCardsWrap) return;

    renderClubsCards();
    updateClubsPositions(true);
    startClubAutoTimer();
    setupClubsControls();
  }

  function renderClubsCards() {
    clubsCardsWrap.innerHTML = clubsData.map((club, index) => `
      <div class="club-pinwheel-card ${index === activeClubIndex ? 'active' : ''}"
           data-club-index="${index}"
           tabindex="0"
           role="button"
           aria-label="Explore ${club.clubName}, Lead ${club.headName}">
        
        <div class="club-card-photo-wrap">
          <img src="${club.photo}" alt="${club.headName}" class="club-card-photo" loading="lazy">
          
          <!-- Numbered Pinwheel Corner Index Badge (Matching Reference) -->
          <span class="club-corner-badge font-mono">${club.index}</span>

          <!-- Frosted Contact Overlay -->
          <div class="member-contact-overlay" aria-label="Connect with ${club.headName}">
            <a href="${club.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-icon-btn contact-linkedin" title="LinkedIn Profile" aria-label="LinkedIn" onclick="event.stopPropagation();">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.62.72-1.62 1.63 0 .9.72 1.62 1.62 1.62.9 0 1.63-.72 1.63-1.62 0-.91-.73-1.63-1.63Z"/>
              </svg>
            </a>
            <a href="${club.email}" class="contact-icon-btn contact-email" title="Send Email" aria-label="Email" onclick="event.stopPropagation();">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          <div class="club-card-content-overlay">
            <h4 class="club-card-head-name">${club.headName}</h4>
            <span class="club-card-title-text">${club.clubName}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function updateClubsPositions(immediate = false) {
    const cards = clubsCardsWrap.querySelectorAll('.club-pinwheel-card');
    const total = clubsData.length;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && !isMobile;

    // Elliptical radial dimensions for 360° overlapping cluster
    const radiusX = isMobile ? 140 : (isTablet ? 240 : 340);
    const radiusY = isMobile ? 150 : (isTablet ? 210 : 260);

    cards.forEach((card, i) => {
      let diff = i - activeClubIndex;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      const angle = (diff / total) * (2 * Math.PI) - (Math.PI / 2);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      const x = cos * radiusX;
      const y = sin * radiusY;
      const isTop = sin < 0;

      // Layered depth scale & visual priority
      const isCenter = diff === 0;
      const scale = isCenter ? (isMobile ? 1.05 : 1.14) : (isMobile ? 0.78 : (0.86 - Math.abs(diff) * 0.03));
      const opacity = isCenter ? 1.0 : Math.max(0.45, 1 - Math.abs(diff) * 0.12);
      const zIndex = isCenter ? 120 : (isTop ? Math.round(50 - Math.abs(diff) * 4) : Math.round(80 - Math.abs(diff) * 4));
      const tilt = (cos * 10);

      card.style.transition = immediate ? 'none' : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s, box-shadow 0.65s, border-color 0.65s';
      card.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0px) rotate(${tilt.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
      card.style.opacity = opacity.toFixed(2);
      card.style.zIndex = zIndex;

      if (isCenter) {
        card.classList.add('active');
        card.setAttribute('aria-hidden', 'false');
      } else {
        card.classList.remove('active');
        card.setAttribute('aria-hidden', 'true');
      }
    });

    // Synchronize Central Focal Hub Content
    if (clubsFocalHub) {
      const activeClub = clubsData[activeClubIndex];
      const nameEl = document.getElementById('focal-club-name');
      const headEl = document.getElementById('focal-club-head');
      const idxEl = document.getElementById('focal-club-idx');
      const tagEl = document.getElementById('focal-club-tag');

      if (nameEl) nameEl.textContent = activeClub.clubName;
      if (headEl) headEl.textContent = activeClub.headName;
      if (idxEl) idxEl.textContent = `${activeClub.index} // 10`;
      if (tagEl) tagEl.textContent = activeClub.tagline;
    }
  }

  function nextClub() {
    activeClubIndex = (activeClubIndex + 1) % clubsData.length;
    updateClubsPositions();
  }

  function prevClub() {
    activeClubIndex = (activeClubIndex - 1 + clubsData.length) % clubsData.length;
    updateClubsPositions();
  }

  function goToClub(index) {
    activeClubIndex = (index + clubsData.length) % clubsData.length;
    updateClubsPositions();
  }

  function startClubAutoTimer() {
    stopClubAutoTimer();
    clubAutoTimer = setInterval(() => {
      if (!isClubInteracting && !isModalOpen) {
        nextClub();
      }
    }, 3500);
  }

  function stopClubAutoTimer() {
    if (clubAutoTimer) clearInterval(clubAutoTimer);
    clubAutoTimer = null;
  }

  function pauseClubAuto() {
    isClubInteracting = true;
    stopClubAutoTimer();
    if (clubResumeTimeout) clearTimeout(clubResumeTimeout);
    clubResumeTimeout = setTimeout(() => {
      isClubInteracting = false;
      startClubAutoTimer();
    }, 6000);
  }

  function setupClubsControls() {
    const prevBtn = document.getElementById('clubs-prev-btn');
    const nextBtn = document.getElementById('clubs-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        pauseClubAuto();
        prevClub();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        pauseClubAuto();
        nextClub();
      });
    }

    clubsCardsWrap.addEventListener('click', (e) => {
      const card = e.target.closest('.club-pinwheel-card');
      if (!card) return;

      const idx = parseInt(card.getAttribute('data-club-index'), 10);
      pauseClubAuto();

      if (idx === activeClubIndex) {
        const club = clubsData[idx];
        openTeamMemberModal({
          name: club.headName,
          role: club.clubName,
          badge: club.badge,
          designation: `${club.role} &bull; ${club.tagline}`,
          photo: club.photo,
          linkedin: club.linkedin,
          email: club.email,
          bio: club.bio
        });
      } else {
        goToClub(idx);
      }
    });

    if (clubsFocalHub) {
      clubsFocalHub.addEventListener('click', () => {
        pauseClubAuto();
        const club = clubsData[activeClubIndex];
        openTeamMemberModal({
          name: club.headName,
          role: club.clubName,
          badge: club.badge,
          designation: `${club.role} &bull; ${club.tagline}`,
          photo: club.photo,
          linkedin: club.linkedin,
          email: club.email,
          bio: club.bio
        });
      });
    }

    clubsStage.addEventListener('mouseenter', () => pauseClubAuto());

    // Mouse Parallax Tilt
    clubsStage.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 768) return;
      const rect = clubsStage.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      clubsCardsWrap.style.transform = `rotateX(${(-normY * 8).toFixed(2)}deg) rotateY(${(normX * 10).toFixed(2)}deg)`;
    });

    clubsStage.addEventListener('mouseleave', () => {
      clubsCardsWrap.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

    window.addEventListener('resize', () => {
      updateClubsPositions(true);
    });
  }

  // --------------------------------------------------------------------------
  // 7. EXPANDABLE MEMBER & CLUB PROFILE MODAL
  // --------------------------------------------------------------------------
  function initTeamModal() {
    teamModal = document.getElementById('team-member-modal');
    if (!teamModal) return;

    const closeBtn = document.getElementById('team-modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeTeamMemberModal);
    }

    teamModal.addEventListener('click', (e) => {
      if (e.target === teamModal) {
        closeTeamMemberModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeTeamMemberModal();
      }
    });
  }

  function openTeamMemberModal(member) {
    if (!teamModal || !member) return;
    isModalOpen = true;

    const photoEl = document.getElementById('team-modal-photo');
    const nameEl = document.getElementById('team-modal-name');
    const badgeEl = document.getElementById('team-modal-badge');
    const roleEl = document.getElementById('team-modal-role');
    const desigEl = document.getElementById('team-modal-designation');
    const bioEl = document.getElementById('team-modal-bio');
    const linkedinBtn = document.getElementById('team-modal-linkedin-btn');
    const emailBtn = document.getElementById('team-modal-email-btn');

    if (photoEl) {
      photoEl.src = member.photo;
      photoEl.alt = member.name;
    }
    if (nameEl) nameEl.textContent = member.name;
    if (badgeEl) badgeEl.textContent = member.badge || '// DEPARTMENT LEADERSHIP';
    if (roleEl) roleEl.textContent = member.role;
    if (desigEl) desigEl.textContent = member.designation || member.track || 'Department Leadership';
    if (bioEl) bioEl.textContent = member.bio || 'Department leader contributing to technical excellence and student innovation.';

    if (linkedinBtn) linkedinBtn.href = member.linkedin || '#';
    if (emailBtn) emailBtn.href = member.email || '#';

    teamModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeTeamMemberModal() {
    if (!teamModal) return;
    isModalOpen = false;
    teamModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // --------------------------------------------------------------------------
  // 8. GLOBAL API EXPORT
  // --------------------------------------------------------------------------
  window.EmergiconTeamShowcase = {
    next: nextCoreMember,
    prev: prevCoreMember,
    goTo: goToCoreMember,
    nextClub,
    prevClub,
    goToClub,
    openProfile: openTeamMemberModal,
    closeProfile: closeTeamMemberModal,
    isModalOpen: () => isModalOpen,
    getCoreData: () => coreTeamData,
    getCoData: () => coTeamData,
    getClubsData: () => clubsData
  };
})();
