/**
 * EMERGICON — AI Robot Gesture Guide Assistant ("Spatial Pro" Edition)
 * Department of Computer Science & Engineering (Data Science)
 * 
 * 5 Crystal-Clear, Easiest-to-Detect Gestures:
 * - Step 1: ☝️ Air Cursor Aiming (Index finger glides the reticle with target lock)
 * - Step 2: 🖐️ Directional Page Scrolling (Open Palm = Auto-Scroll Down; Closed Fist = Anti-Scroll Up)
 * - Step 3: 👉 3D Carousel Swiping (Swipe Right = Next Event; Swipe Left = Prev Event)
 * - Step 4: 👌 Universal Pinch & 🔫 Shoot (Pinch thumb & index OR shoot to open Event Showcase)
 * - Step 5: ✊ Closed Fist Dismissal (Hold fist for 300ms to close Showcase & return to carousel)
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. TUTORIAL STEP DATASET (OPTIMIZED FOR EASIEST DETECTION)
  // --------------------------------------------------------------------------
  const tutorialSteps = [
    {
      step: 1,
      badge: '// STEP 01 // AIR CURSOR',
      title: 'Air Cursor Aiming',
      icon: '☝️',
      speech: 'Point your index finger forward to guide the glowing Air Reticle across the screen. Hovering over any button or card locks onto the target!',
      actionLabel: 'Next Step &rarr;',
      visualType: 'cursor'
    },
    {
      step: 2,
      badge: '// STEP 02 // DIRECTIONAL SCROLLING',
      title: 'Open Palm &amp; Fist Scrolling',
      icon: '🖐️ ✊',
      speech: 'Show your <strong>Open Palm (🖐️)</strong> to auto-scroll forward down the page. Make a <strong>Closed Fist (✊)</strong> to trigger anti-scrolling (reverse scroll up)!',
      actionLabel: 'Next Step &rarr;',
      visualType: 'scroll'
    },
    {
      step: 3,
      badge: '// STEP 03 // 3D CAROUSEL NAVIGATION',
      title: 'Horizontal Hand Swiping',
      icon: '👉 👈',
      speech: 'Swipe your hand <strong>Right (👉)</strong> to glide to the next event card in the 3D gallery. Swipe your hand <strong>Left (👈)</strong> to return to the previous event.',
      actionLabel: 'Next Step &rarr;',
      visualType: 'swipe'
    },
    {
      step: 4,
      badge: '// STEP 04 // PINCH &amp; SHOOT SELECTION',
      title: 'Pinch or Shoot to Open',
      icon: '👌 🔫',
      speech: 'Pinch your <strong>Thumb &amp; Index (👌)</strong> together (like Apple Vision Pro) or <strong>drop your thumb hammer (🔫)</strong> to click any button and open the Event Showcase!',
      actionLabel: 'Next Step &rarr;',
      visualType: 'pinch'
    },
    {
      step: 5,
      badge: '// STEP 05 // DISMISS &amp; RETURN',
      title: 'Closed Fist Dismissal',
      icon: '✊ ↩️',
      speech: 'Hold a <strong>Closed Fist (✊) for 300ms</strong> while viewing the Event Showcase or Lightbox to instantly close it and return to the carousel.',
      actionLabel: 'Finish Tutorial &rarr;',
      visualType: 'fist'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. STATE VARIABLES
  // --------------------------------------------------------------------------
  let currentStepIndex = -1;
  let isMinimized = false;
  let isHidden = false;
  let hasEntered = false;
  let rootEl = null;
  let eyeLeftEl = null;
  let eyeRightEl = null;

  // --------------------------------------------------------------------------
  // 3. INITIALIZATION ON DOM READY
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('emergicon_robot_hidden') === 'true') {
      isHidden = true;
      return;
    }

    rootEl = document.getElementById('robot-assistant-root');
    if (!rootEl) {
      rootEl = document.createElement('div');
      rootEl.id = 'robot-assistant-root';
      document.body.appendChild(rootEl);
    }

    renderRobotAssistant();
    initEyeTracking();
    scheduleRobotEntrance();
  });

  // --------------------------------------------------------------------------
  // 4. ENTRANCE SEQUENCING (1.5s AFTER INTRO VIDEO COMPLETION)
  // --------------------------------------------------------------------------
  function scheduleRobotEntrance() {
    const introOverlay = document.getElementById('intro-overlay');

    if (introOverlay) {
      if (introOverlay.classList.contains('dismissed')) {
        setTimeout(triggerRobotEntrance, 1200);
      } else {
        const observer = new MutationObserver(() => {
          if (introOverlay.classList.contains('dismissed')) {
            observer.disconnect();
            setTimeout(triggerRobotEntrance, 1500);
          }
        });
        observer.observe(introOverlay, { attributes: true, attributeFilter: ['class'] });

        setTimeout(() => {
          if (!hasEntered) triggerRobotEntrance();
        }, 6000);
      }
    } else {
      setTimeout(triggerRobotEntrance, 1500);
    }
  }

  function triggerRobotEntrance() {
    if (hasEntered || isHidden || !rootEl) return;
    hasEntered = true;

    rootEl.classList.add('visible', 'entering');
    setTimeout(() => {
      if (rootEl) rootEl.classList.remove('entering');
    }, 800);
  }

  // --------------------------------------------------------------------------
  // 5. DOM STRUCTURE & 3D CYBERNETIC ROBOT VECTOR
  // --------------------------------------------------------------------------
  function renderRobotAssistant() {
    rootEl.innerHTML = `
      <!-- Active Robot Stage -->
      <div id="robot-main-wrap" class="robot-main-wrap">
        <!-- 3D Vector Cybernetic Robot Droid -->
        <div class="robot-avatar-stage" aria-hidden="true">
          <div class="robot-floating-body">
            <svg class="robot-svg-model" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="robotArmor" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FFFFFF"/>
                  <stop offset="60%" stop-color="#E2E8F0"/>
                  <stop offset="100%" stop-color="#94A3B8"/>
                </linearGradient>
                <linearGradient id="robotDarkPlate" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#1E293B"/>
                  <stop offset="100%" stop-color="#0F172A"/>
                </linearGradient>
                <linearGradient id="visorGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#050810"/>
                  <stop offset="100%" stop-color="#0A1124"/>
                </linearGradient>
                <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                </filter>
                <radialGradient id="thrusterGlowGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#3BA6FF" stop-opacity="0.8"/>
                  <stop offset="70%" stop-color="#00F0FF" stop-opacity="0.2"/>
                  <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
                </radialGradient>
              </defs>

              <!-- Floating Thruster Flame / Anti-Gravity Ring -->
              <ellipse cx="80" cy="180" rx="34" ry="9" fill="url(#thrusterGlowGrad)" class="robot-thruster-glow"/>
              <ellipse cx="80" cy="176" rx="20" ry="4" fill="#00F0FF" opacity="0.6"/>

              <!-- Robot Torso & Chest Armor -->
              <rect x="52" y="112" width="56" height="52" rx="14" fill="url(#robotArmor)" stroke="#3BA6FF" stroke-width="1.5"/>
              <rect x="62" y="122" width="36" height="24" rx="6" fill="url(#robotDarkPlate)"/>
              
              <!-- Glowing Department Core Emblem -->
              <circle cx="80" cy="134" r="5" fill="#00F0FF" filter="url(#cyanGlow)" class="robot-core-pulse"/>

              <!-- Articulated Robot Arms -->
              <rect x="34" y="118" width="12" height="36" rx="6" fill="url(#robotArmor)" stroke="#3BA6FF" stroke-width="1" class="robot-arm-left"/>
              <rect x="114" y="118" width="12" height="36" rx="6" fill="url(#robotArmor)" stroke="#3BA6FF" stroke-width="1" class="robot-arm-right"/>

              <!-- Cybernetic Neck Joint -->
              <rect x="70" y="98" width="20" height="18" rx="4" fill="#334155"/>

              <!-- Robot Head Shell -->
              <g class="robot-head-group">
                <!-- Antenna -->
                <line x1="80" y1="28" x2="80" y2="44" stroke="#3BA6FF" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="80" cy="26" r="4" fill="#00F0FF" filter="url(#cyanGlow)" class="robot-antenna-orb"/>

                <!-- Head Armor Body -->
                <rect x="36" y="42" width="88" height="60" rx="22" fill="url(#robotArmor)" stroke="#3BA6FF" stroke-width="1.5"/>

                <!-- Dark Glass Visor Screen -->
                <rect x="44" y="52" width="72" height="40" rx="14" fill="url(#visorGlass)" stroke="#1E293B" stroke-width="1.5"/>

                <!-- Glowing Cyan Interactive Eyes (Track Cursor) -->
                <g id="robot-eyes-container">
                  <circle cx="64" cy="72" r="9" fill="#030712"/>
                  <circle id="robot-eye-left" cx="64" cy="72" r="6" fill="#00F0FF" filter="url(#cyanGlow)" class="robot-pupil"/>

                  <circle cx="96" cy="72" r="9" fill="#030712"/>
                  <circle id="robot-eye-right" cx="96" cy="72" r="6" fill="#00F0FF" filter="url(#cyanGlow)" class="robot-pupil"/>
                </g>

                <!-- Visor Glass Reflection Stripe -->
                <path d="M48 56 Q80 50 112 56" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
              </g>
            </svg>
          </div>
          <div class="robot-ground-shadow"></div>
        </div>

        <!-- Interactive Speech Bubble -->
        <div id="robot-speech-bubble" class="robot-speech-bubble" role="dialog" aria-live="polite">
          <button id="robot-close-speech-btn" class="robot-bubble-close-btn" aria-label="Minimize Assistant">&times;</button>
          
          <div id="robot-bubble-body">
            <!-- Dynamic Content -->
          </div>
        </div>
      </div>

      <!-- Persistent Minimized Floating Dock Badge -->
      <div id="robot-dock-badge" class="robot-dock-badge" role="button" tabindex="0" aria-label="Open AI Gesture Guide Assistant" title="AI Gesture Assistant">
        <div class="robot-dock-icon-wrap">
          <span class="robot-dock-emoji">🤖</span>
          <span class="robot-dock-ping"></span>
        </div>
        <span class="robot-dock-label font-mono">GESTURES</span>

        <!-- Minimized Quick Menu Popup -->
        <div id="robot-dock-menu" class="robot-dock-menu">
          <button id="robot-menu-replay-btn" class="robot-menu-item">
            <span>🔄</span> Replay Gesture Guide
          </button>
          <button id="robot-menu-hide-btn" class="robot-menu-item hide-btn">
            <span>✕</span> Hide for this session
          </button>
        </div>
      </div>
    `;

    eyeLeftEl = document.getElementById('robot-eye-left');
    eyeRightEl = document.getElementById('robot-eye-right');

    renderWelcomeState();
    setupAssistantEvents();
  }

  // --------------------------------------------------------------------------
  // 6. WELCOME & STEP VIEW RENDERING
  // --------------------------------------------------------------------------
  function renderWelcomeState() {
    currentStepIndex = -1;
    const bodyEl = document.getElementById('robot-bubble-body');
    if (!bodyEl) return;

    bodyEl.innerHTML = `
      <div class="robot-bubble-header font-mono">
        <span class="badge-dot-live"></span>
        <span>EMERGICON // AI CAMPUS DROID</span>
      </div>
      <h4 class="robot-bubble-title">👋 Welcome to EMERGICON!</h4>
      <p class="robot-bubble-text">
        This department portal is equipped with touchless <strong>AI Hand Gesture Controls</strong> via your camera. Would you like a quick 20-second demonstration?
      </p>
      <div class="robot-bubble-actions">
        <button id="robot-try-gestures-btn" class="btn btn-primary robot-action-btn">
          ✨ Try Gestures
        </button>
        <button id="robot-skip-btn" class="btn btn-outline robot-skip-btn">
          Skip
        </button>
      </div>
    `;

    const tryBtn = document.getElementById('robot-try-gestures-btn');
    const skipBtn = document.getElementById('robot-skip-btn');

    if (tryBtn) tryBtn.addEventListener('click', () => renderStep(0));
    if (skipBtn) skipBtn.addEventListener('click', minimizeAssistant);
  }

  function renderStep(stepIndex) {
    currentStepIndex = stepIndex;
    const stepData = tutorialSteps[stepIndex];
    const bodyEl = document.getElementById('robot-bubble-body');
    if (!bodyEl || !stepData) return;

    bodyEl.innerHTML = `
      <div class="robot-bubble-header font-mono">
        <span class="badge-dot-live"></span>
        <span>${stepData.badge}</span>
      </div>
      <div class="robot-step-title-wrap">
        <span class="robot-step-icon">${stepData.icon}</span>
        <h4 class="robot-bubble-title">${stepData.title}</h4>
      </div>
      <p class="robot-bubble-text">${stepData.speech}</p>

      <!-- Animated Visual Demo Card -->
      <div class="robot-demo-card ${stepData.visualType}">
        ${renderVisualDemoSnippet(stepData.visualType)}
      </div>

      <!-- Stepper Progress & Buttons -->
      <div class="robot-stepper-row">
        <div class="robot-step-dots">
          ${tutorialSteps.map((_, i) => `<span class="robot-dot ${i === stepIndex ? 'active' : ''}"></span>`).join('')}
        </div>
        <div class="robot-bubble-actions">
          ${stepIndex > 0 ? `<button id="robot-prev-step-btn" class="btn btn-outline robot-nav-step-btn">&larr; Back</button>` : ''}
          <button id="robot-next-step-btn" class="btn btn-primary robot-action-btn">${stepData.actionLabel}</button>
        </div>
      </div>
    `;

    const nextBtn = document.getElementById('robot-next-step-btn');
    const prevBtn = document.getElementById('robot-prev-step-btn');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (stepIndex < tutorialSteps.length - 1) {
          renderStep(stepIndex + 1);
        } else {
          renderCompletionState();
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        renderStep(stepIndex - 1);
      });
    }
  }

  function renderVisualDemoSnippet(type) {
    switch (type) {
      case 'cursor':
        return `
          <div class="demo-hand-cursor-track">
            <span class="demo-hand-anim">☝️ Point Index Finger</span>
            <span class="demo-reticle-anim"></span>
          </div>
          <span class="demo-caption font-mono">AIR CURSOR &bull; TARGET LOCK</span>
        `;
      case 'scroll':
        return `
          <div class="demo-scroll-wrap">
            <div class="demo-scroll-pair">
              <span>🖐️ Open Palm &rarr; <strong style="color:#10B981">Auto-Scroll Down &darr;</strong></span>
              <span>✊ Closed Fist &rarr; <strong style="color:#3BA6FF">Anti-Scroll Up &uarr;</strong></span>
            </div>
          </div>
        `;
      case 'swipe':
        return `
          <div class="demo-swipe-track">
            <span class="demo-swipe-arrow left">&larr; 👈 Swipe Left (Prev)</span>
            <span class="demo-swipe-arrow right">👉 Swipe Right (Next) &rarr;</span>
          </div>
        `;
      case 'pinch':
        return `
          <div class="demo-gun-track">
            <span class="demo-gun-icon">👌 Pinch Thumb &amp; Index</span>
            <span class="demo-flash-icon">💥 Instant Click &amp; Open!</span>
          </div>
        `;
      case 'fist':
        return `
          <div class="demo-fist-track">
            <span class="demo-fist-icon">✊ Hold Fist (300ms)</span>
            <span class="demo-fist-text">&rarr; Closes Showcase &amp; Returns</span>
          </div>
        `;
      default:
        return '';
    }
  }

  function renderCompletionState() {
    currentStepIndex = 99;
    const bodyEl = document.getElementById('robot-bubble-body');
    if (!bodyEl) return;

    bodyEl.innerHTML = `
      <div class="robot-bubble-header font-mono">
        <span class="badge-dot-live"></span>
        <span>// SYSTEM READY // READY TO EXPLORE</span>
      </div>
      <h4 class="robot-bubble-title">🚀 You're All Set!</h4>
      <p class="robot-bubble-text">
        The AI camera engine is running seamlessly in the background. Move your hand in front of your camera to take control anytime!
      </p>
      <div class="robot-bubble-actions">
        <button id="robot-explore-btn" class="btn btn-primary robot-action-btn" style="width: 100%;">
          Start Exploring &rarr;
        </button>
      </div>
    `;

    const exploreBtn = document.getElementById('robot-explore-btn');
    if (exploreBtn) exploreBtn.addEventListener('click', minimizeAssistant);
  }

  // --------------------------------------------------------------------------
  // 7. INTERACTIVE EYE GAZE TRACKING (PUPILS FOLLOW USER CURSOR)
  // --------------------------------------------------------------------------
  function initEyeTracking() {
    window.addEventListener('pointermove', (e) => {
      if (!eyeLeftEl || !eyeRightEl || isMinimized) return;

      const rect = rootEl.getBoundingClientRect();
      const botCenterX = rect.left + 80;
      const botCenterY = rect.top + 72;

      const deltaX = e.clientX - botCenterX;
      const deltaY = e.clientY - botCenterY;
      const angle = Math.atan2(deltaY, deltaX);

      const distance = Math.min(3.5, Math.hypot(deltaX, deltaY) / 60);

      const eyeShiftX = Math.cos(angle) * distance;
      const eyeShiftY = Math.sin(angle) * distance;

      eyeLeftEl.setAttribute('cx', (64 + eyeShiftX).toFixed(2));
      eyeLeftEl.setAttribute('cy', (72 + eyeShiftY).toFixed(2));

      eyeRightEl.setAttribute('cx', (96 + eyeShiftX).toFixed(2));
      eyeRightEl.setAttribute('cy', (72 + eyeShiftY).toFixed(2));
    });
  }

  // --------------------------------------------------------------------------
  // 8. MINIMIZE, EXPAND & SESSION HIDE CONTROLS
  // --------------------------------------------------------------------------
  function minimizeAssistant() {
    isMinimized = true;
    if (rootEl) {
      rootEl.classList.add('minimized');
      rootEl.classList.remove('expanded');
    }
  }

  function expandAssistant() {
    isMinimized = false;
    if (rootEl) {
      rootEl.classList.remove('minimized');
      rootEl.classList.add('expanded');
    }
    renderWelcomeState();
  }

  function hideAssistantPermanently() {
    isHidden = true;
    sessionStorage.setItem('emergicon_robot_hidden', 'true');
    if (rootEl) {
      rootEl.classList.remove('visible', 'minimized', 'expanded');
      rootEl.style.display = 'none';
    }
  }

  function setupAssistantEvents() {
    const closeBtn = document.getElementById('robot-close-speech-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        minimizeAssistant();
      });
    }

    const dockBadge = document.getElementById('robot-dock-badge');
    if (dockBadge) {
      dockBadge.addEventListener('click', (e) => {
        if (e.target.closest('#robot-menu-replay-btn')) {
          e.stopPropagation();
          expandAssistant();
          renderStep(0);
          return;
        }
        if (e.target.closest('#robot-menu-hide-btn')) {
          e.stopPropagation();
          hideAssistantPermanently();
          return;
        }
        expandAssistant();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !isMinimized && hasEntered && !isHidden) {
        minimizeAssistant();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. GLOBAL API EXPORT
  // --------------------------------------------------------------------------
  window.EmergiconRobotAssistant = {
    show: expandAssistant,
    minimize: minimizeAssistant,
    hide: hideAssistantPermanently,
    startTutorial: () => {
      expandAssistant();
      renderStep(0);
    }
  };
})();
