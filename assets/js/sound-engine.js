/**
 * EMERGICON — Synthesized Web Audio Soundscape & Forum Soundtrack Engine
 * Department of Computer Science & Engineering (Data Science)
 * 
 * 1. Synthesized Web Audio Drone & UI Haptics
 * 2. Immersive Forum Section Soundtrack Engine (Kendrick Lamar - Not Like Us Instrumental)
 *    - Centralized audio configuration
 *    - Viewport Intersection Observer on #team
 *    - 1.8s smooth linear/exponential volume fade in & fade out
 *    - Continuous seamless looping
 *    - User preference persistence (Mute / Pause)
 *    - Mobile autoplay unlocking
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. CENTRALIZED FORUM SOUNDTRACK CONFIGURATION
  // --------------------------------------------------------------------------
  const forumAudioConfig = {
    src: 'assets/audio/forum-theme.mp3',
    targetVolume: 0.35,
    fadeDuration: 1800, // 1.8 seconds smooth fade in/out
    loop: true
  };

  // --------------------------------------------------------------------------
  // 2. SYNTHESIZED SPACE AMBIENT DRONE ENGINE
  // --------------------------------------------------------------------------
  let audioCtx = null;
  let isSpaceMuted = true;
  let droneGain = null;
  let masterGain = null;

  function initAudio() {
    if (audioCtx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);

      createSpaceDrone();
    } catch (e) {
      console.warn('Web Audio API not supported', e);
    }
  }

  function createSpaceDrone() {
    if (!audioCtx) return;

    droneGain = audioCtx.createGain();
    droneGain.gain.setValueAtTime(0, audioCtx.currentTime);

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(160, audioCtx.currentTime);

    const osc1 = audioCtx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(55, audioCtx.currentTime); // A1

    const osc2 = audioCtx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(110.5, audioCtx.currentTime); // A2 slight detune

    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.frequency.setValueAtTime(0.12, audioCtx.currentTime);
    lfoGain.gain.setValueAtTime(40, audioCtx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(droneGain);
    droneGain.connect(masterGain);

    osc1.start();
    osc2.start();
    lfo.start();
  }

  function playUiClick(freq = 1200, duration = 0.04) {
    if (isSpaceMuted || !audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  function playExplosionBoom() {
    if (isSpaceMuted || !audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(28, audioCtx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.35, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start();
      osc.stop(audioCtx.currentTime + 1.2);
    } catch (e) {}
  }

  function toggleAudio() {
    initAudio();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isSpaceMuted = !isSpaceMuted;

    if (droneGain) {
      if (!isSpaceMuted) {
        droneGain.gain.cancelScheduledValues(audioCtx.currentTime);
        droneGain.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + 1.5);
      } else {
        droneGain.gain.cancelScheduledValues(audioCtx.currentTime);
        droneGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8);
      }
    }

    const toggleBtn = document.getElementById('audio-toggle');
    if (toggleBtn) {
      toggleBtn.classList.toggle('active', !isSpaceMuted);
      toggleBtn.innerHTML = !isSpaceMuted
        ? '<span class="audio-wave"></span> AUDIO // LIVE'
        : '🔇 AUDIO // MUTED';
    }

    if (!isSpaceMuted) {
      playUiClick(1600, 0.05);
    }
  }

  // --------------------------------------------------------------------------
  // 3. IMMERSIVE FORUM SOUNDTRACK ENGINE
  // --------------------------------------------------------------------------
  let forumAudioEl = null;
  let isForumMuted = sessionStorage.getItem('forum_soundtrack_muted') === 'true';
  let isForumPaused = sessionStorage.getItem('forum_soundtrack_paused') === 'true';
  let isForumIntersecting = false;
  let fadeAnimFrame = null;
  let userHasInteracted = false;

  function initForumSoundtrack() {
    if (!forumAudioEl) {
      forumAudioEl = new Audio();
      forumAudioEl.src = forumAudioConfig.src;
      forumAudioEl.loop = forumAudioConfig.loop;
      forumAudioEl.volume = 0;
      forumAudioEl.preload = 'auto';
      forumAudioEl.muted = isForumMuted;
    }

    setupForumObserver();
    setupAutoplayUnlock();
    renderForumAudioWidget();
    updateForumWidgetUI();
  }

  // Fade In Volume smoothly over fadeDuration (ms)
  function fadeInSoundtrack() {
    if (!forumAudioEl || isForumMuted || isForumPaused) return;

    if (fadeAnimFrame) cancelAnimationFrame(fadeAnimFrame);

    const startVolume = forumAudioEl.volume;
    const target = forumAudioConfig.targetVolume;
    const startTime = performance.now();
    const duration = forumAudioConfig.fadeDuration;

    // Ensure audio starts playing
    const playPromise = forumAudioEl.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setForumVisualState(true);
      }).catch(() => {
        // Autoplay blocked by browser policy until user interaction
        setForumVisualState(false);
      });
    }

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      
      // Smooth cubic-out easing for natural audio ramp
      const ease = 1 - Math.pow(1 - progress, 3);
      forumAudioEl.volume = Math.min(target, startVolume + (target - startVolume) * ease);

      if (progress < 1) {
        fadeAnimFrame = requestAnimationFrame(step);
      } else {
        forumAudioEl.volume = target;
        fadeAnimFrame = null;
      }
    }

    fadeAnimFrame = requestAnimationFrame(step);
  }

  // Fade Out Volume smoothly over fadeDuration (ms)
  function fadeOutSoundtrack() {
    if (!forumAudioEl) return;

    if (fadeAnimFrame) cancelAnimationFrame(fadeAnimFrame);

    const startVolume = forumAudioEl.volume;
    if (startVolume <= 0.005) {
      forumAudioEl.pause();
      forumAudioEl.volume = 0;
      setForumVisualState(false);
      return;
    }

    const startTime = performance.now();
    const duration = forumAudioConfig.fadeDuration;

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = Math.pow(progress, 2);
      
      forumAudioEl.volume = Math.max(0, startVolume * (1 - ease));

      if (progress < 1) {
        fadeAnimFrame = requestAnimationFrame(step);
      } else {
        forumAudioEl.volume = 0;
        forumAudioEl.pause();
        fadeAnimFrame = null;
        setForumVisualState(false);
      }
    }

    fadeAnimFrame = requestAnimationFrame(step);
  }

  // Toggle Mute
  function toggleForumMute() {
    isForumMuted = !isForumMuted;
    sessionStorage.setItem('forum_soundtrack_muted', isForumMuted.toString());

    if (forumAudioEl) {
      forumAudioEl.muted = isForumMuted;
      if (!isForumMuted && isForumIntersecting && !isForumPaused) {
        fadeInSoundtrack();
      } else if (isForumMuted) {
        setForumVisualState(false);
      }
    }

    updateForumWidgetUI();
    playUiClick(1500, 0.04);
  }

  // Toggle Pause / Resume
  function toggleForumPause() {
    isForumPaused = !isForumPaused;
    sessionStorage.setItem('forum_soundtrack_paused', isForumPaused.toString());

    if (forumAudioEl) {
      if (isForumPaused) {
        fadeOutSoundtrack();
      } else if (isForumIntersecting && !isForumMuted) {
        fadeInSoundtrack();
      }
    }

    updateForumWidgetUI();
    playUiClick(1400, 0.04);
  }

  // Section Observer for #team
  function setupForumObserver() {
    const teamSection = document.getElementById('team');
    if (!teamSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isForumIntersecting = true;
          if (!isForumMuted && !isForumPaused) {
            fadeInSoundtrack();
          }
        } else {
          isForumIntersecting = false;
          fadeOutSoundtrack();
        }
        updateForumWidgetUI();
      });
    }, {
      threshold: [0.05, 0.25, 0.5]
    });

    observer.observe(teamSection);
  }

  // Transparent First-Touch Autoplay Unlock
  function setupAutoplayUnlock() {
    function unlock() {
      if (userHasInteracted) return;
      userHasInteracted = true;

      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      if (isForumIntersecting && !isForumMuted && !isForumPaused && forumAudioEl && forumAudioEl.paused) {
        fadeInSoundtrack();
      }

      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
    }

    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
  }

  // Update Visual Indicators & Active Card Pulsing
  function setForumVisualState(isPlaying) {
    const teamSection = document.getElementById('team');
    const widget = document.getElementById('forum-audio-widget');

    if (teamSection) {
      teamSection.classList.toggle('audio-active-section', isPlaying);
    }

    if (widget) {
      widget.classList.toggle('is-playing', isPlaying);
    }
  }

  // Render Minimalist Audio Widget in Section 02
  function renderForumAudioWidget() {
    const teamHeader = document.querySelector('#team .section-header-editorial');
    if (!teamHeader || document.getElementById('forum-audio-widget')) return;

    const widget = document.createElement('div');
    widget.id = 'forum-audio-widget';
    widget.className = 'forum-audio-widget';
    widget.setAttribute('aria-label', 'Forum Team Soundtrack Controls');
    widget.innerHTML = `
      <div class="forum-eq-container" title="Audio Soundtrack Telemetry">
        <span class="forum-eq-bar bar-1"></span>
        <span class="forum-eq-bar bar-2"></span>
        <span class="forum-eq-bar bar-3"></span>
        <span class="forum-eq-bar bar-4"></span>
      </div>
      <div class="forum-audio-label-box">
        <span class="forum-audio-tag font-mono">// FORUM SOUNDTRACK</span>
        <span id="forum-audio-status-text" class="forum-audio-status font-mono">TRACK // LIVE</span>
      </div>
      <div class="forum-audio-actions">
        <button id="forum-audio-mute-btn" class="forum-widget-btn" aria-label="Mute Soundtrack" title="Mute / Unmute">
          <svg id="forum-mute-icon" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-2.5 9.77H8v-2h3.5l4-4v12l-4-4z"/>
          </svg>
        </button>
        <button id="forum-audio-pause-btn" class="forum-widget-btn" aria-label="Pause Soundtrack" title="Pause / Resume">
          <svg id="forum-pause-icon" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </button>
      </div>
    `;

    teamHeader.appendChild(widget);

    // Bind Controls
    const muteBtn = document.getElementById('forum-audio-mute-btn');
    const pauseBtn = document.getElementById('forum-audio-pause-btn');

    if (muteBtn) muteBtn.addEventListener('click', toggleForumMute);
    if (pauseBtn) pauseBtn.addEventListener('click', toggleForumPause);
  }

  function updateForumWidgetUI() {
    const statusText = document.getElementById('forum-audio-status-text');
    const muteBtn = document.getElementById('forum-audio-mute-btn');
    const pauseBtn = document.getElementById('forum-audio-pause-btn');
    const widget = document.getElementById('forum-audio-widget');

    if (!widget) return;

    if (isForumMuted) {
      if (statusText) statusText.textContent = 'MUTED';
      if (muteBtn) {
        muteBtn.classList.add('active');
        muteBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27l4.73 4.73H4v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
          </svg>
        `;
      }
    } else {
      if (statusText) statusText.textContent = isForumPaused ? 'PAUSED' : (isForumIntersecting ? 'TRACK // LIVE' : 'STANDBY');
      if (muteBtn) {
        muteBtn.classList.remove('active');
        muteBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-2.5 9.77H8v-2h3.5l4-4v12l-4-4z"/>
          </svg>
        `;
      }
    }

    if (pauseBtn) {
      pauseBtn.classList.toggle('active', isForumPaused);
      pauseBtn.innerHTML = isForumPaused
        ? `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8 5v14l11-7z"/></svg>`
        : `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    }
  }

  // --------------------------------------------------------------------------
  // 4. GLOBAL EVENT BINDINGS
  // --------------------------------------------------------------------------
  function attachUiListeners() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('a, button, .btn, .filter-btn, .carousel-btn, .orbit-btn, .clubs-btn')) {
        playUiClick(1400, 0.035);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('audio-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleAudio();
      });
    }
    attachUiListeners();
    initForumSoundtrack();
  });

  // --------------------------------------------------------------------------
  // 5. GLOBAL API EXPORTS
  // --------------------------------------------------------------------------
  window.EmergiconSound = {
    init: initAudio,
    toggle: toggleAudio,
    click: playUiClick,
    explosion: playExplosionBoom,
    isMuted: () => isSpaceMuted
  };

  window.EmergiconSoundtrack = {
    fadeIn: fadeInSoundtrack,
    fadeOut: fadeOutSoundtrack,
    toggleMute: toggleForumMute,
    togglePause: toggleForumPause,
    isMuted: () => isForumMuted,
    isPaused: () => isForumPaused,
    getConfig: () => forumAudioConfig
  };
})();
