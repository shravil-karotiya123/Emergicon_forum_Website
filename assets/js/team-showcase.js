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
  // 8 Core Team Heads (Official Department Leadership)
  const coreTeamData = [
    {
      id: 'core-1',
      name: 'Aryan Nagmote',
      role: 'President',
      badge: 'Core Leadership',
      designation: 'Executive Forum Lead // CSE (Data Science)',
      photo: 'assets/images/team/core/Aryan_.png',
      linkedin: 'https://www.linkedin.com/in/aryan-nagmote-81b910331',
      email: 'mailto:aryannagmote.ds24@gmail.com',
      bio: 'Leading EMERGICON technical symposiums, research cohorts, and high-performance neural computing initiatives across the department.'
    },
    {
      id: 'core-2',
      name: 'Yashaswini Kalambe',
      role: 'Vice President',
      badge: 'Core Leadership',
      designation: 'Strategic Operations & Academic Affairs',
      photo: 'assets/images/team/core/Yashaswini.png',
      linkedin: 'https://www.linkedin.com/in/yashaswini-kalambe',
      email: 'mailto:yashaswinikalambe.ds24@sbjit.edu.in',
      bio: 'Coordinating student outreach, academic forum partnerships, and multi-track competitive hackathon schedules.'
    },
    {
      id: 'core-3',
      name: 'Tanish Ghormare',
      role: 'Secretary',
      badge: 'Core Leadership',
      designation: 'Council Secretariat & Documentation',
      photo: 'assets/images/team/core/Tanish.png',
      linkedin: 'https://www.linkedin.com/in/tanish-ghormare',
      email: 'mailto:tanishghormare.ds24@sbjit.edu.in',
      bio: 'Managing official departmental records, inter-college communiques, resolution charters, and delegate registrations.'
    },
    {
      id: 'core-4',
      name: 'Rupali Chaudhari',
      role: 'Event Head',
      badge: 'Core Leadership',
      designation: 'Conclave Director & Stage Orchestration',
      photo: 'assets/images/team/core/Rupali.png',
      linkedin: 'https://www.linkedin.com/in/rupali-chaudhari-195a02342',
      email: 'mailto:rupalichaudhari.ds24@sbjit.edu.in',
      bio: 'Spearheading logistical execution, live stage management, keynote schedules, and delegate experiences for 1,400+ participants.'
    },
    {
      id: 'core-5',
      name: 'Harsh Supekar',
      role: 'Treasurer',
      badge: 'Core Leadership',
      designation: 'Fiscal Management & Corporate Sponsorships',
      photo: 'assets/images/team/core/Harsh.png',
      linkedin: 'https://www.linkedin.com/in/harsh-supekar-100b39333',
      email: 'mailto:harshsupekar.ds24@sbjit.edu.in',
      bio: 'Overseeing departmental budgets, grant allocations, corporate tier sponsorships, and prize distributions.'
    },
    {
      id: 'core-6',
      name: 'Shravil Karotiya',
      role: 'Technical Head',
      badge: 'Core Leadership',
      designation: 'Systems Architecture & Compute Infrastructure',
      photo: 'assets/images/team/core/Shravil.png',
      linkedin: 'https://www.linkedin.com/in/shravil-karotiya',
      email: 'mailto:shravilkarotiya.ds24@sbjit.edu.in',
      bio: 'Directing GPU compute infrastructure, portal web architectures, AI gesture engines, and hackathon evaluation pipelines.'
    },
    {
      id: 'core-7',
      name: 'Ansh Meshram',
      role: 'Media Head',
      badge: 'Core Leadership',
      designation: 'Visual Identity, Cinematography & Press',
      photo: 'assets/images/team/core/Ansh.png',
      linkedin: 'https://www.linkedin.com/in/ansh-meshram-712a03342',
      email: 'mailto:anshmeshram.ds24@sbjit.edu.in',
      bio: 'Curating the visual narrative, teaser cinematics, livestream engineering, and department editorial publications.'
    },
    {
      id: 'core-8',
      name: 'Ayush Khade',
      role: 'Sports Head',
      badge: 'Core Leadership',
      designation: 'Athletics, Esports & Tactical Tournaments',
      photo: 'assets/images/team/core/Ayush_.png',
      linkedin: 'https://www.linkedin.com/in/ayush-khade-63b040424/',
      email: 'mailto:ayushk.ds24d@sbjit.edu.in',
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
      photo: 'assets/images/team/clubs/Palak Photo.png',
      linkedin: 'https://www.linkedin.com/in/palak-singh-95074141b',
      email: 'mailto:palaksingh.ds24@sbjit.edu.in',
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
      photo: 'assets/images/team/clubs/Ayush Wadiyalwar.png',
      linkedin: 'https://www.linkedin.com/in/aayush-wadiyalwar-b343603a6',
      email: 'mailto:aayushwadiyalwar.ds24@sbjit.edu.in',
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
      photo: 'assets/images/team/clubs/Aryan Hasoriya.png',
      linkedin: 'https://www.linkedin.com/in/aryan-hasoriya-2694bb424',
      email: 'mailto:aryanhasoriya.ds24@sbjit.edu.in',
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
      photo: 'assets/images/team/clubs/Sujal Photo.png',
      linkedin: 'https://www.linkedin.com/in/sujal-kawale-5b34a741b',
      email: 'mailto:sujalk.ds24d@sbjit.edu.in',
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
      photo: 'assets/images/team/clubs/Nandini Photo.png',
      linkedin: 'https://www.linkedin.com/in/nandini-kasare-744743377',
      email: 'mailto:nandinikasare.ds24@sbjit.edu.in',
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
      photo: 'assets/images/team/clubs/Pushkar Photo.png',
      linkedin: 'https://www.linkedin.com/in/pushkar-karnayake-358a04342',
      email: 'mailto:pushkarkarnayake.ds24@sbjit.edu.in',
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
      photo: 'assets/images/team/clubs/Samyak Photo.png',
      linkedin: 'https://www.linkedin.com/in/samyak-ukey-57544a342',
      email: 'mailto:samyakukey.ds24@sbjit.edu.in',
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
      photo: 'assets/images/team/clubs/Shivam Photo.png',
      linkedin: 'https://www.linkedin.com/in/shivam-yerekar-56b802325',
      email: 'mailto:shivamyerekar.ds24@sbjit.edu.in',
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
      photo: 'assets/images/team/clubs/Kalash Photo.png',
      linkedin: 'https://www.linkedin.com/in/kalash-bamankar-713a03342',
      email: 'mailto:kalashbamankar.ds24@sbjit.edu.in',
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
      photo: 'assets/images/team/clubs/Aryan Nagmote Photo.png',
      linkedin: 'https://www.linkedin.com/in/aryan-nagmote-81b910331',
      email: 'mailto:aryannagmote.ds24@gmail.com',
      bio: 'Crafting brand design systems, WebGL digital assets, typographic posters, and visual conference collateral.'
    }
  ];

  // 18 Co-Team Members (Co-Heads - Synchronized with Department Records)
  const coTeamData = [
    // Co-Secretary (2 Members)
    {
      id: 'co-1',
      name: 'Ashwin Shende',
      role: 'Co-Secretary',
      track: 'Council Secretariat & Records',
      photo: 'assets/images/team/coheads/Ashwin.png',
      linkedin: 'https://www.linkedin.com/in/ashwin-shende-47b295369',
      email: 'mailto:ashwins.ds25@sbjit.edu.in',
      bio: 'Managing official departmental records, inter-college communiques, and student council resolutions.'
    },
    {
      id: 'co-2',
      name: 'Rashika Dhakate',
      role: 'Co-Secretary',
      track: 'Documentation & Communique',
      photo: 'assets/images/team/coheads/Rashika.png',
      linkedin: 'https://linkedin.com/in/rashika-dhakate-582741963',
      email: 'mailto:rashikad.ds25@sbjit.edu.in',
      bio: 'Coordinating conclave documentation, student delegate charters, and annual department proceedings.'
    },

    // Co-Event Head (2 Members)
    {
      id: 'co-3',
      name: 'Chinmay Bhojne',
      role: 'Co-Event Head',
      track: 'Event Operations & Logistics',
      photo: 'assets/images/team/coheads/Chinmay.png',
      linkedin: 'https://www.linkedin.com/in/chinmay-bhojne-085a52373',
      email: 'mailto:chinmayb.ds25@sbjit.edu.in',
      bio: 'Managing real-time hackathon venue deployment, audio-visual setups, and stage technical operations.'
    },
    {
      id: 'co-4',
      name: 'Parul Wanjari',
      role: 'Co-Event Head',
      track: 'Hospitality & Stage Protocol',
      photo: 'assets/images/team/coheads/Parul.png',
      linkedin: 'https://www.linkedin.com/in/parul-wanjari-95b602430',
      email: 'mailto:parulw.ds25@sbjit.edu.in',
      bio: 'Facilitating keynote guest welcoming, guest speaker hospitality, and auditorium protocol management.'
    },

    // Co-Treasurer (2 Members)
    {
      id: 'co-5',
      name: 'Bhumi Prajapati',
      role: 'Co-Treasurer',
      track: 'Accounts & Expenditure',
      photo: 'assets/images/team/coheads/Bhoomi.png',
      linkedin: 'https://www.linkedin.com/in/bhumi-prajapati-386b6338a',
      email: 'mailto:bhumip.ds25@sbjit.edu.in',
      bio: 'Auditing symposium equipment procurement, prize pool ledgers, and operational budgeting.'
    },
    {
      id: 'co-6',
      name: 'Sashank Fendar',
      role: 'Co-Treasurer',
      track: 'Budgeting & Corporate Grants',
      photo: 'assets/images/team/coheads/Shashank.jpg',
      linkedin: 'https://www.linkedin.com/in/shashank-fendar-02450441b/',
      email: 'mailto:shashankf.ds25@sbjit.edu.in',
      bio: 'Liaising with enterprise partners for sponsorship deliverables, fiscal accounts, and vendor contracts.'
    },

    // Co-Technical Head (2 Members)
    {
      id: 'co-7',
      name: 'Hemraj Verma',
      role: 'Co-Technical Head',
      track: 'Systems Architecture & Infrastructure',
      photo: 'assets/images/team/coheads/Hemraj.png',
      linkedin: 'https://www.linkedin.com/in/hemraj-varma-3b1540430',
      email: 'mailto:hemrajv.ds25@sbjit.edu.in',
      bio: 'Overseeing compute servers, cloud clusters, ML evaluation pipelines, and hardware laboratory testing rigs.'
    },
    {
      id: 'co-8',
      name: 'Aditya Agre',
      role: 'Co-Technical Head',
      track: 'Full-Stack & Neural Compute',
      photo: 'assets/images/team/coheads/Aditya Aagre.png',
      linkedin: 'https://www.linkedin.com/in/aditya-agre-3a4a40371',
      email: 'mailto:adityaa.ds25@sbjit.edu.in',
      bio: 'Building client-side interactive modules, portal architectures, WebGL shaders, and evaluation gateways.'
    },

    // Co-Media Head (6 Members)
    {
      id: 'co-9',
      name: 'Aditya Mohabe',
      role: 'Co-Media Head',
      track: 'Cinematography & Visual Production',
      photo: 'assets/images/team/coheads/Aditya Mohabe.jpg',
      linkedin: 'https://www.linkedin.com/in/aditya-mohabe-b54992396',
      email: 'mailto:adityam.ds25@sbjit.edu.in',
      bio: 'Directing post-event aftermovies, 3D teaser cinematics, and department keynote visual productions.'
    },
    {
      id: 'co-10',
      name: 'Nishchay Hasoriya',
      role: 'Co-Media Head',
      track: 'Motion Design & Graphics',
      photo: 'assets/images/team/coheads/Nischay.png',
      linkedin: 'https://www.linkedin.com/in/nishchay-hasoriya-b64a58430',
      email: 'mailto:nishchayh.ds25@sbjit.edu.in',
      bio: 'Creating 3D motion graphics, symposium visual intros, digital banners, and interactive badges.'
    },
    {
      id: 'co-11',
      name: 'Tejas Chaudhary',
      role: 'Co-Media Head',
      track: 'Photography & Digital Archive',
      photo: 'assets/images/team/coheads/Tejas.png',
      linkedin: 'https://www.linkedin.com/in/tejas-choudhary-831b93423',
      email: 'mailto:tejasc.ds25@sbjit.edu.in',
      bio: 'Capturing high-resolution photo archives, speaker sessions, and hackathon gallery showcases.'
    },
    {
      id: 'co-12',
      name: 'Om Thaware',
      role: 'Co-Media Head',
      track: 'Livestream & Broadcast Engineering',
      photo: 'assets/images/team/coheads/Om.png',
      linkedin: 'https://www.linkedin.com/in/om-thaware-1737023b8',
      email: 'mailto:omth.ds25@sbjit.edu.in',
      bio: 'Engineering multi-camera live feeds, webinar broadcasts, and auditorium streaming infrastructure.'
    },
    {
      id: 'co-13',
      name: 'Tanishk Morekar',
      role: 'Co-Media Head',
      track: 'Public Relations & Press Releases',
      photo: 'assets/images/team/coheads/Taniksh.png',
      linkedin: 'https://in.linkedin.com/in/taniksh-undefined-38aa99424',
      email: 'mailto:tanikshm.ds25@sbjit.edu.in',
      bio: 'Publishing departmental news bulletins, official press communiques, and social media releases.'
    },
    {
      id: 'co-14',
      name: 'Deepanshu Watkar',
      role: 'Co-Media Head',
      track: 'Visual Identity & Branding',
      photo: 'assets/images/team/coheads/Deepanshu.jpg',
      linkedin: 'https://www.linkedin.com/in/dipanshu-watkar-64581a430',
      email: 'mailto:deepanshuw.ds25@sbjit.edu.in',
      bio: 'Curating brand consistency, typographic hierarchy, and visual design assets across all conclaves.'
    },

    // Co-Sports Head (4 Members)
    {
      id: 'co-15',
      name: 'Dhaeya Zade',
      role: 'Co-Sports Head',
      track: 'Athletics & Physical Tournaments',
      photo: 'assets/images/team/coheads/Dheya_.png',
      linkedin: 'https://www.linkedin.com/in/dhyeya-zade-92917a368',
      email: 'mailto:Dhyeyaz.ds25@sbjit.edu.in',
      bio: 'Organizing inter-department athletic meets, track competitions, football leagues, and fitness rallies.'
    },
    {
      id: 'co-16',
      name: 'Parineeta Roy',
      role: 'Co-Sports Head',
      track: 'Inter-Departmental Athletics',
      photo: 'assets/images/team/coheads/Parineeta.png',
      linkedin: 'https://www.linkedin.com/in/parineeta-roy-090876430',
      email: 'mailto:parineetar.ds25@sbjit.edu.in',
      bio: 'Coordinating female sports contingents, badminton championships, and wellness conclaves.'
    },
    {
      id: 'co-17',
      name: 'Bhavesh Kawadran',
      role: 'Co-Sports Head',
      track: 'Esports League & Tournament Arenas',
      photo: 'assets/images/team/coheads/Bhawesh.png',
      linkedin: 'https://www.linkedin.com/in/bhavesh-kawadkar-824a52410/?skipRedirect=true',
      email: 'mailto:bhaveshk.ds25@sbjit.edu.in',
      bio: 'Administering collegiate esports bracket tournaments, gaming server rigs, and LAN competition arenas.'
    },
    {
      id: 'co-18',
      name: 'Nisha Bambal',
      role: 'Co-Sports Head',
      track: 'Sports Logistics & Coordination',
      photo: 'assets/images/team/coheads/Nisha.png',
      linkedin: 'https://www.linkedin.com/in/nisha-bambal-1ba997381',
      email: 'mailto:nishab.ds25@sbjit.edu.in',
      bio: 'Managing sports equipment inventories, field scheduling, referee coordination, and tournament fixtures.'
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
  let coScrollerStage = null;
  let coCardsRing = null;
  let coIndexDisplay = null;
  let coDotsWrap = null;
  let clubsStage = null;
  let clubsCardsWrap = null;
  let clubsFocalHub = null;
  let teamModal = null;

  // Co-Team 3D Cylindrical Scroller Physics State
  let coCurrentOffset = 0;
  let coTargetOffset = 0;
  let coAutoTimer = null;
  let coResumeTimeout = null;
  let coIsInteracting = false;

  // --------------------------------------------------------------------------
  // 3. INITIALIZATION ON DOM READY
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initCoreTeamOrbit();
    initCoTeam3DScroller();
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
  // 5. CO-TEAM 3D CYLINDRICAL HORIZONTAL CARD SCROLLER (REFERENCE INSPIRATION)
  // --------------------------------------------------------------------------
  function initCoTeam3DScroller() {
    coScrollerStage = document.getElementById('co-team-3d-stage');
    coCardsRing = document.getElementById('co-team-3d-cards-wrap');
    coIndexDisplay = document.getElementById('co-scroller-index-display');
    coDotsWrap = document.getElementById('co-scroller-dots');

    if (!coScrollerStage || !coCardsRing) return;

    renderCoScrollerCards();
    renderCoScrollerDots();
    setupCoScrollerControls();
    startCoAutoTimer();
    requestAnimationFrame(renderCoScrollerLoop);
  }

  function renderCoScrollerCards() {
    coCardsRing.innerHTML = coTeamData.map((member, index) => `
      <div class="co-3d-card ${index === 0 ? 'is-active' : ''}" 
           data-co-index="${index}" 
           tabindex="0" 
           role="button" 
           aria-label="View profile of ${member.name}, ${member.role}">
        <div class="co-card-viewport">
          <div class="co-card-photo-container">
            <img src="${member.photo}" alt="${member.name}" class="co-card-img" loading="lazy">
            <div class="co-card-vignette"></div>

            <div class="member-contact-overlay" aria-label="Connect with ${member.name}">
              <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-icon-btn contact-linkedin" title="LinkedIn Profile" aria-label="LinkedIn" onclick="event.stopPropagation();">
                <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.62.72-1.62 1.63 0 .9.72 1.62 1.62 1.62.9 0 1.63-.72 1.63-1.62 0-.91-.73-1.63-1.63Z"/>
                </svg>
              </a>
              <a href="${member.email}" class="contact-icon-btn contact-email" title="Send Email" aria-label="Email" onclick="event.stopPropagation();">
                <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="co-card-details">
            <span class="co-card-role-badge font-mono">${member.role.toUpperCase()}</span>
            <h4 class="co-card-name">${member.name}</h4>
            <p class="co-card-track font-mono">${member.track}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderCoScrollerDots() {
    if (!coDotsWrap) return;
    coDotsWrap.innerHTML = coTeamData.map((_, i) => `
      <button class="co-scroller-dot ${i === 0 ? 'active' : ''}" 
              data-co-dot="${i}" 
              aria-label="Navigate to ${coTeamData[i].name}">
      </button>
    `).join('');
  }

  function pauseCoAuto() {
    coIsInteracting = true;
    stopCoAutoTimer();
    if (coResumeTimeout) clearTimeout(coResumeTimeout);
    coResumeTimeout = setTimeout(() => {
      coIsInteracting = false;
      startCoAutoTimer();
    }, 5500);
  }

  function startCoAutoTimer() {
    stopCoAutoTimer();
    coAutoTimer = setInterval(() => {
      if (!coIsInteracting && !isModalOpen) {
        coTargetOffset = Math.round(coTargetOffset) + 1;
      }
    }, 4500);
  }

  function stopCoAutoTimer() {
    if (coAutoTimer) clearInterval(coAutoTimer);
    coAutoTimer = null;
  }

  function setupCoScrollerControls() {
    const prevBtn = document.getElementById('co-scroller-prev-btn');
    const nextBtn = document.getElementById('co-scroller-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        pauseCoAuto();
        coTargetOffset = Math.round(coTargetOffset) - 1;
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        pauseCoAuto();
        coTargetOffset = Math.round(coTargetOffset) + 1;
      });
    }

    if (coDotsWrap) {
      coDotsWrap.addEventListener('click', (e) => {
        const dot = e.target.closest('[data-co-dot]');
        if (dot) {
          pauseCoAuto();
          const targetIdx = parseInt(dot.getAttribute('data-co-dot'), 10);
          const total = coTeamData.length;
          const currentNorm = ((Math.round(coTargetOffset) % total) + total) % total;
          let diff = targetIdx - currentNorm;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;
          coTargetOffset = Math.round(coTargetOffset) + diff;
        }
      });
    }

    // Interactive Card Click Handling
    coCardsRing.addEventListener('click', (e) => {
      const card = e.target.closest('.co-3d-card');
      if (!card) return;

      const idx = parseInt(card.getAttribute('data-co-index'), 10);
      const total = coTeamData.length;
      let diff = (idx - coCurrentOffset) % total;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      pauseCoAuto();

      if (Math.abs(diff) < 0.38) {
        // Active center card clicked -> open details modal
        openTeamMemberModal(coTeamData[idx]);
      } else {
        // Side card clicked -> smoothly fly to center and activate
        coTargetOffset = Math.round(coCurrentOffset + diff);
      }
    });

    // Pointer Drag Physics with Inertia
    let isDragging = false;
    let startX = 0;
    let lastX = 0;
    let lastTime = 0;
    let velocityX = 0;

    coScrollerStage.addEventListener('pointerdown', (e) => {
      isDragging = true;
      startX = e.clientX;
      lastX = e.clientX;
      lastTime = performance.now();
      velocityX = 0;
      pauseCoAuto();
      coScrollerStage.classList.add('is-dragging');
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      const dx = e.clientX - lastX;
      velocityX = dx / dt;
      lastX = e.clientX;
      lastTime = now;

      const sensitivity = window.innerWidth <= 768 ? 160 : 250;
      coTargetOffset -= (dx / sensitivity);
      coCurrentOffset = coTargetOffset; // direct responsiveness
    });

    window.addEventListener('pointerup', () => {
      if (!isDragging) return;
      isDragging = false;
      coScrollerStage.classList.remove('is-dragging');

      // Add fling inertia
      if (Math.abs(velocityX) > 0.15) {
        coTargetOffset -= velocityX * 7.5;
      }
      // Settle smoothly on the nearest integer card
      coTargetOffset = Math.round(coTargetOffset);
    });

    // Mouse Wheel Support (Horizontal or Shift+Vertical or DeltaX)
    coScrollerStage.addEventListener('wheel', (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 15) {
        e.preventDefault();
        pauseCoAuto();
        const dir = delta > 0 ? 1 : -1;
        coTargetOffset = Math.round(coTargetOffset) + dir;
      }
    }, { passive: false });

    // Keyboard Arrow Navigation
    coScrollerStage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        pauseCoAuto();
        coTargetOffset = Math.round(coTargetOffset) + 1;
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        pauseCoAuto();
        coTargetOffset = Math.round(coTargetOffset) - 1;
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const total = coTeamData.length;
        const activeIdx = ((Math.round(coTargetOffset) % total) + total) % total;
        openTeamMemberModal(coTeamData[activeIdx]);
      }
    });

    // Hover pauses auto-scroll
    coScrollerStage.addEventListener('mouseenter', () => {
      pauseCoAuto();
    });
  }

  function renderCoScrollerLoop() {
    if (!coScrollerStage || !coCardsRing) return;

    // Smooth Lerp Spring Interpolation
    coCurrentOffset += (coTargetOffset - coCurrentOffset) * 0.12;

    const cards = coCardsRing.querySelectorAll('.co-3d-card');
    const total = coTeamData.length;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && !isMobile;

    const normActiveIndex = ((Math.round(coCurrentOffset) % total) + total) % total;

    // Update active index indicator
    if (coIndexDisplay) {
      const displayNum = String(normActiveIndex + 1).padStart(2, '0');
      coIndexDisplay.textContent = `${displayNum} // ${String(total).padStart(2, '0')}`;
    }

    // Update dots indicator
    if (coDotsWrap) {
      const dots = coDotsWrap.querySelectorAll('.co-scroller-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === normActiveIndex);
      });
    }

    // Position each card on the 3D Cylindrical Arc
    cards.forEach((card, index) => {
      let diff = (index - coCurrentOffset) % total;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      const absDiff = Math.abs(diff);

      // Performance cull cards outside panoramic field of view
      if (absDiff > 5.2) {
        card.style.opacity = '0';
        card.style.visibility = 'hidden';
        card.style.pointerEvents = 'none';
        return;
      }

      card.style.visibility = 'visible';
      card.style.pointerEvents = 'auto';

      // Cylindrical Arc Trigonometry with enhanced visibility & panoramic spread
      const angle = diff * (isMobile ? 0.30 : (isTablet ? 0.24 : 0.20));
      const radius = isMobile ? 320 : (isTablet ? 520 : 680);
      const x = Math.sin(angle) * radius;
      const z = (Math.cos(angle) - 1) * radius * 0.85;
      const rotateY = -diff * (isMobile ? 12 : (isTablet ? 14 : 16));
      const scale = Math.max(0.68, 1.05 - absDiff * (isMobile ? 0.12 : 0.085));
      const opacity = Math.max(0, 1.0 - absDiff * 0.14);
      const brightness = Math.max(0.65, 1.02 - absDiff * 0.09);
      const zIndex = Math.round(100 - absDiff * 12);

      card.style.transform = `translate3d(${x.toFixed(1)}px, 0px, ${z.toFixed(1)}px) rotateY(${rotateY.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
      card.style.opacity = opacity.toFixed(2);
      card.style.filter = `brightness(${brightness.toFixed(2)})`;
      card.style.zIndex = zIndex;

      if (absDiff < 0.42) {
        card.classList.add('is-active');
        card.setAttribute('aria-hidden', 'false');
      } else {
        card.classList.remove('is-active');
        card.setAttribute('aria-hidden', 'true');
      }
    });

    requestAnimationFrame(renderCoScrollerLoop);
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
