/**
 * EMERGICON — Ultra-Reliable Spatial AI Gesture Engine ("Spatial Pro" Edition)
 * Department of Computer Science & Engineering (Data Science)
 * 
 * Optimized for maximum camera tolerance, low lighting, and zero false-positives:
 * 1. ☝️ Air Cursor: Effortless pointing with 1-Euro jitter filter
 * 2. 👌 Universal Pinch (Apple Vision Pro Standard): Pinch thumb & index together to click/select anything!
 * 3. 🖐️ Open Palm: Smooth continuous auto-scroll down
 * 4. ✊ Closed Fist: Anti-scroll up (reverse scroll) & 300ms hold to dismiss open showcases/modals
 * 5. 👉 / 👈 Horizontal Swipe: Effortless hand swipe left/right to browse 3D Event Gallery
 * 6. 🔫 Hand Gun: Dual-support for hand gun aim & trigger pull
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. 1-EURO JITTER FILTER (ROCK-STEADY RETICLE)
  // --------------------------------------------------------------------------
  class OneEuroFilter {
    constructor(minCutoff = 0.85, beta = 0.015, dCutoff = 1.0) {
      this.minCutoff = minCutoff;
      this.beta = beta;
      this.dCutoff = dCutoff;
      this.xPrev = null;
      this.dxPrev = 0;
      this.tPrev = null;
    }

    filter(x, timestamp = Date.now()) {
      if (this.tPrev === null) {
        this.xPrev = x;
        this.dxPrev = 0;
        this.tPrev = timestamp;
        return x;
      }

      const dt = Math.max(0.001, (timestamp - this.tPrev) / 1000.0);
      this.tPrev = timestamp;

      const dx = (x - this.xPrev) / dt;
      const edx = this.alpha(dt, this.dCutoff) * dx + (1 - this.alpha(dt, this.dCutoff)) * this.dxPrev;
      this.dxPrev = edx;

      const cutoff = this.minCutoff + this.beta * Math.abs(edx);
      const alpha = this.alpha(dt, cutoff);
      const xFiltered = alpha * x + (1 - alpha) * this.xPrev;
      this.xPrev = xFiltered;

      return xFiltered;
    }

    alpha(dt, cutoff) {
      const tau = 1.0 / (2.0 * Math.PI * cutoff);
      return 1.0 / (1.0 + tau / dt);
    }

    reset() {
      this.xPrev = null;
      this.tPrev = null;
    }
  }

  // --------------------------------------------------------------------------
  // 2. SYNTHESIZED AUDIO FEEDBACK (ZERO ASSET LATENCY)
  // --------------------------------------------------------------------------
  let audioCtx = null;

  function playGestureClickSound(isPinch = true) {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;

      if (isPinch) {
        // High-tech crisp spatial pop: 1200Hz -> 600Hz in 50ms
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.05);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else {
        // Laser zap for gun shoot
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(950, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.09);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
        osc.start(now);
        osc.stop(now + 0.09);
      }

      osc.connect(gain);
      gain.connect(audioCtx.destination);
    } catch (e) {
      // Audio fallback silently ignored
    }
  }

  // --------------------------------------------------------------------------
  // 3. ENGINE STATE & REFS
  // --------------------------------------------------------------------------
  let isTracking = false;
  let isCameraRequested = false;
  let cameraStream = null;
  let videoEl = null;
  let airCursorEl = null;
  let lastHoveredElement = null;

  const filterX = new OneEuroFilter(0.85, 0.015, 1.0);
  const filterY = new OneEuroFilter(0.85, 0.015, 1.0);

  let lastHandTimestamp = 0;
  let wasPinching = false;
  let wasGunCocked = false;
  let clickCooldown = 0;
  let autoScrollVelocity = 0;
  let lastSwipeTime = 0;
  let prevSwipeHandX = null;
  let prevSwipeHandTime = null;
  let fistHoldStartTime = null;
  let palmHoldStartTime = null;

  // Offscreen Computer Vision Frame (160x120 for 120 FPS processing)
  const CV_W = 160;
  const CV_H = 120;
  let cvCanvas = null;
  let cvCtx = null;

  let mpHands = null;
  let useMediaPipe = false;

  // --------------------------------------------------------------------------
  // 4. AUTO-INITIALIZE ON DOM READY & BACKGROUND START
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    airCursorEl = document.getElementById('air-cursor');

    cvCanvas = document.createElement('canvas');
    cvCanvas.width = CV_W;
    cvCanvas.height = CV_H;
    cvCtx = cvCanvas.getContext('2d', { willReadFrequently: true });

    // Background hidden video element
    videoEl = document.getElementById('gesture-video');
    if (!videoEl) {
      videoEl = document.createElement('video');
      videoEl.id = 'gesture-video';
      videoEl.setAttribute('playsinline', '');
      videoEl.setAttribute('muted', '');
      videoEl.style.display = 'none';
      document.body.appendChild(videoEl);
    }

    autoStartCamera();

    const startOnInteraction = () => {
      if (!isCameraRequested) autoStartCamera();
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      window.removeEventListener('click', startOnInteraction);
      window.removeEventListener('keydown', startOnInteraction);
      window.removeEventListener('touchstart', startOnInteraction);
    };

    window.addEventListener('click', startOnInteraction, { once: true });
    window.addEventListener('keydown', startOnInteraction, { once: true });
    window.addEventListener('touchstart', startOnInteraction, { once: true });
  });

  // Background Auto-Start Camera
  async function autoStartCamera() {
    if (isCameraRequested) return;
    isCameraRequested = true;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        audio: false
      });

      cameraStream = stream;
      videoEl.srcObject = stream;
      await videoEl.play();

      isTracking = true;
      lastHandTimestamp = Date.now();

      if (typeof Hands !== 'undefined') {
        try {
          initMediaPipe();
          useMediaPipe = true;
        } catch (e) {
          useMediaPipe = false;
        }
      }

      requestAnimationFrame(frameProcessingLoop);
    } catch (err) {
      console.warn('Background gesture camera waiting for permission:', err.message);
      isCameraRequested = false;
    }
  }

  function initMediaPipe() {
    if (mpHands) return;

    mpHands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    mpHands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.55,
      minTrackingConfidence: 0.55
    });

    mpHands.onResults(handleMediaPipeResults);
  }

  // --------------------------------------------------------------------------
  // 5. MAIN PROCESSING LOOP (60–120 FPS)
  // --------------------------------------------------------------------------
  async function frameProcessingLoop() {
    if (!isTracking || !videoEl || videoEl.readyState < 2) {
      if (isTracking) requestAnimationFrame(frameProcessingLoop);
      return;
    }

    const now = Date.now();

    // Auto-scroll application
    if (Math.abs(autoScrollVelocity) > 0.1) {
      window.scrollBy({ top: autoScrollVelocity, behavior: 'auto' });
    }

    // Hide Air Reticle when hand is absent for 350ms
    if (now - lastHandTimestamp > 350) {
      autoScrollVelocity = 0;
      if (airCursorEl && airCursorEl.classList.contains('visible')) {
        airCursorEl.classList.remove('visible', 'aiming', 'locked', 'pinching');
        if (lastHoveredElement) dispatchSyntheticHover(null, null);
      }
    }

    if (useMediaPipe && mpHands) {
      try {
        await mpHands.send({ image: videoEl });
      } catch (err) {
        useMediaPipe = false;
        processNativeCV();
      }
    } else {
      processNativeCV();
    }

    if (isTracking) {
      requestAnimationFrame(frameProcessingLoop);
    }
  }

  // --------------------------------------------------------------------------
  // 6. NATIVE COMPUTER VISION TRACKER (FALLBACK ENGINE)
  // --------------------------------------------------------------------------
  function processNativeCV() {
    cvCtx.drawImage(videoEl, 0, 0, CV_W, CV_H);
    const frameData = cvCtx.getImageData(0, 0, CV_W, CV_H);
    const data = frameData.data;

    let totalSkin = 0;
    let sumX = 0, sumY = 0;
    let minX = CV_W, maxX = 0, minY = CV_H, maxY = 0;
    let tipX = CV_W / 2, tipY = CV_H;

    for (let y = 0; y < CV_H; y++) {
      for (let x = 0; x < CV_W; x++) {
        const i = (y * CV_W + x) * 4;
        const r = data[i], g = data[i + 1], b = data[i + 2];

        // Skin threshold
        const Y = 0.299 * r + 0.587 * g + 0.114 * b;
        const Cb = 128 - 0.168736 * r - 0.331264 * g + 0.5 * b;
        const Cr = 128 + 0.5 * r - 0.418688 * g - 0.081312 * b;

        const isSkin = Cr >= 132 && Cr <= 178 && Cb >= 75 && Cb <= 130 && Y >= 30;

        if (isSkin) {
          totalSkin++;
          sumX += x;
          sumY += y;

          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;

          if (y < tipY) {
            tipY = y;
            tipX = x;
          }
        }
      }
    }

    if (totalSkin > 130) {
      lastHandTimestamp = Date.now();
      const cx = sumX / totalSkin;
      const cy = sumY / totalSkin;
      const bw = maxX - minX;
      const bh = maxY - minY;
      const aspect = bh / Math.max(1, bw);
      const density = totalSkin / Math.max(1, bw * bh);

      const isFist = density > 0.65 && aspect < 1.15 && bh < 52;
      const isOpenPalm = totalSkin > 350 && (bh > 45 || bw > 45);
      const isPinch = !isOpenPalm && !isFist && density > 0.58 && aspect < 1.25;

      processSpatialGestures({
        normX: 1 - cx / CV_W,
        normY: cy / CV_H,
        tipX: 1 - tipX / CV_W,
        tipY: tipY / CV_H,
        isOpenPalm,
        isFist,
        isPinch,
        isGunShoot: false
      });
    }
  }

  // --------------------------------------------------------------------------
  // 7. HIGH-PRECISION MEDIAPIPE HAND LANDMARK ANALYSIS
  // --------------------------------------------------------------------------
  function handleMediaPipeResults(results) {
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      lastHandTimestamp = Date.now();
      const lm = results.multiHandLandmarks[0];

      const wrist = lm[0];
      const thumbTip = lm[4];
      const thumbMcp = lm[2];
      const indexTip = lm[8];
      const indexPip = lm[6];
      const indexMcp = lm[5];
      const middleTip = lm[12];
      const middleMcp = lm[9];
      const ringTip = lm[16];
      const ringMcp = lm[13];
      const pinkyTip = lm[20];
      const pinkyMcp = lm[17];

      // Finger Extension Computations
      const indexLen = Math.hypot(indexTip.x - indexMcp.x, indexTip.y - indexMcp.y);
      const middleLen = Math.hypot(middleTip.x - middleMcp.x, middleTip.y - middleMcp.y);
      const ringLen = Math.hypot(ringTip.x - ringMcp.x, ringTip.y - ringMcp.y);
      const pinkyLen = Math.hypot(pinkyTip.x - pinkyMcp.x, pinkyTip.y - pinkyMcp.y);

      const isIndexExt = indexLen > 0.12 || indexTip.y < indexPip.y;
      const isMiddleExt = middleLen > 0.12 && middleTip.y < middleMcp.y;
      const isRingExt = ringLen > 0.11 && ringTip.y < ringMcp.y;
      const isPinkyExt = pinkyLen > 0.10 && pinkyTip.y < pinkyMcp.y;

      const isMiddleCurled = !isMiddleExt;
      const isRingCurled = !isRingExt;
      const isPinkyCurled = !isPinkyExt;

      // 1. OPEN PALM (All 5 extended) -> Auto Scroll Down
      const isOpenPalm = isIndexExt && isMiddleExt && isRingExt && isPinkyExt;

      // 2. CLOSED FIST (All 5 curled) -> Anti-Scroll Up / Close Modal
      const isFist = !isIndexExt && isMiddleCurled && isRingCurled && isPinkyCurled;

      // 3. UNIVERSAL PINCH (Thumb tip touches Index tip - Apple Vision Pro Standard)
      // Distance < 0.055 is the golden standard for instant, zero-effort pinch clicking
      const pinchDist = Math.hypot(thumbTip.x - indexTip.x, thumbTip.y - indexTip.y);
      const isPinch = pinchDist < 0.058;

      // 4. HAND GUN POSE (Index Extended, Middle/Ring/Pinky Curled)
      const isHandGun = isIndexExt && isMiddleCurled && isRingCurled && isPinkyCurled;
      const thumbToIndexMcpDist = Math.hypot(thumbTip.x - indexMcp.x, thumbTip.y - indexMcp.y);
      const isGunCocked = thumbToIndexMcpDist > 0.095;
      const isGunShoot = isHandGun && wasGunCocked && (thumbToIndexMcpDist < 0.082 || isPinch);

      // Midpoint between Thumb & Index for ultra-smooth pinch targeting
      const cursorTargetX = isPinch ? (thumbTip.x + indexTip.x) / 2 : indexTip.x;
      const cursorTargetY = isPinch ? (thumbTip.y + indexTip.y) / 2 : indexTip.y;

      processSpatialGestures({
        normX: 1 - wrist.x,
        normY: wrist.y,
        tipX: 1 - cursorTargetX,
        tipY: cursorTargetY,
        isOpenPalm,
        isFist,
        isPinch,
        isHandGun,
        isGunShoot
      });

      wasPinching = isPinch;
      wasGunCocked = isGunCocked;
    }
  }

  // --------------------------------------------------------------------------
  // 8. UNIFIED SPATIAL GESTURE DISPATCHER
  // --------------------------------------------------------------------------
  function processSpatialGestures(data) {
    const now = Date.now();

    // 1. Smooth Air Cursor Coordinates (1-Euro Filter)
    const rawX = data.tipX * window.innerWidth;
    const rawY = data.tipY * window.innerHeight;

    const smoothX = filterX.filter(rawX, now);
    const smoothY = filterY.filter(rawY, now);

    if (airCursorEl) {
      airCursorEl.style.transform = `translate(${smoothX}px, ${smoothY}px)`;
      if (!airCursorEl.classList.contains('visible')) {
        airCursorEl.classList.add('visible');
      }
    }

    // ------------------------------------------------------------------------
    // GESTURE 1: 👈 👉 HORIZONTAL CAROUSEL SWIPING (LEFT & RIGHT)
    // ------------------------------------------------------------------------
    if (prevSwipeHandX !== null && prevSwipeHandTime !== null) {
      const dt = (now - prevSwipeHandTime) / 1000;
      if (dt > 0.02 && dt < 0.35) {
        const dx = data.normX - prevSwipeHandX;
        const velocityX = dx / dt;

        const gallerySec = document.getElementById('gallery');
        const isGalleryVisible = gallerySec && (gallerySec.getBoundingClientRect().top < window.innerHeight * 0.85 && gallerySec.getBoundingClientRect().bottom > window.innerHeight * 0.15);

        if (isGalleryVisible && now - lastSwipeTime > 450 && Math.abs(dx) > 0.065 && Math.abs(velocityX) > 0.30) {
          lastSwipeTime = now;
          if (window.EmergiconGalleryCarousel) {
            if (velocityX > 0) {
              // 👉 Swipe Right: Next Slide
              window.EmergiconGalleryCarousel.next();
              playGestureClickSound(true);
            } else {
              // 👈 Swipe Left: Previous Slide
              window.EmergiconGalleryCarousel.prev();
              playGestureClickSound(true);
            }
          }
        }
      }
    }

    prevSwipeHandX = data.normX;
    prevSwipeHandTime = now;

    // ------------------------------------------------------------------------
    // GESTURE 2: 🖐️ OPEN PALM -> AUTO SCROLL DOWN (ACCELERATED SPEED)
    // ------------------------------------------------------------------------
    if (data.isOpenPalm) {
      fistHoldStartTime = null;
      if (!palmHoldStartTime) palmHoldStartTime = now;
      const palmDuration = now - palmHoldStartTime;
      const accel = Math.min(10.0, (palmDuration / 400) * 10.0);
      autoScrollVelocity = 16.0 + accel; // Ramps from 16.0 to 26.0 px/frame for fast, responsive scrolling

      if (airCursorEl) {
        airCursorEl.classList.remove('aiming', 'locked', 'pinching');
      }
      return;
    } else {
      palmHoldStartTime = null;
    }

    // ------------------------------------------------------------------------
    // GESTURE 3: ✊ CLOSED FIST -> ANTI-SCROLL UP / DISMISS SHOWCASE
    // ------------------------------------------------------------------------
    if (data.isFist) {
      if (!fistHoldStartTime) fistHoldStartTime = now;

      // 300ms fist hold dismisses any open showcase or lightbox modal
      if (now - fistHoldStartTime > 300) {
        if (window.EmergiconTeamShowcase && window.EmergiconTeamShowcase.isModalOpen()) {
          window.EmergiconTeamShowcase.closeProfile();
          fistHoldStartTime = now + 1000;
          return;
        }

        if (window.EmergiconGalleryCarousel && window.EmergiconGalleryCarousel.isShowcaseOpen()) {
          window.EmergiconGalleryCarousel.closeShowcase();
          fistHoldStartTime = now + 1000;
          return;
        }

        const lightbox = document.getElementById('gallery-lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
          lightbox.classList.remove('active');
          document.body.style.overflow = '';
          fistHoldStartTime = now + 1000;
          return;
        }

        const rsvpModal = document.getElementById('rsvp-modal');
        if (rsvpModal && rsvpModal.classList.contains('active')) {
          rsvpModal.classList.remove('active');
          document.body.style.overflow = '';
          fistHoldStartTime = now + 1000;
          return;
        }
      }

      // Anti-scroll (reverse scroll up with accelerated speed)
      const fistDuration = now - fistHoldStartTime;
      const accel = Math.min(10.0, (fistDuration / 400) * 10.0);
      autoScrollVelocity = -(16.0 + accel); // Ramps from -16.0 to -26.0 px/frame

      if (airCursorEl) {
        airCursorEl.classList.remove('aiming', 'locked', 'pinching');
      }
      return;
    } else {
      fistHoldStartTime = null;
    }

    // Stop auto-scroll when not holding palm or fist
    autoScrollVelocity = 0;

    // ------------------------------------------------------------------------
    // GESTURE 4: 🎯 TARGET LOCK & NATIVE HOVER
    // ------------------------------------------------------------------------
    const isOverClickable = checkTargetLock(smoothX, smoothY);
    if (airCursorEl) {
      if (isOverClickable) {
        airCursorEl.classList.add('locked');
      } else {
        airCursorEl.classList.remove('locked');
      }
    }

    // Dispatch native hover to activate CSS :hover & GSAP magnetic physics
    dispatchSyntheticHover(smoothX, smoothY);

    // ------------------------------------------------------------------------
    // GESTURE 5: 👌 PINCH CLICK & 💥 GUN SHOOT (INSTANT SELECTION)
    // ------------------------------------------------------------------------
    const isClickTriggered = (data.isPinch && !wasPinching) || (data.isGunShoot);

    if (data.isPinch && airCursorEl) {
      airCursorEl.classList.add('pinching');
    } else if (airCursorEl) {
      airCursorEl.classList.remove('pinching');
    }

    if (isClickTriggered && now - clickCooldown > 320) {
      clickCooldown = now;

      // 1. Play synthesized spatial audio chime
      playGestureClickSound(!data.isGunShoot);

      // 2. Trigger glowing laser ripple shockwave
      triggerClickVisual(smoothX, smoothY);

      // 3. Dispatch native click on target element
      dispatchSyntheticClick(smoothX, smoothY);
    }
  }

  // --------------------------------------------------------------------------
  // TARGET LOCK CHECK (EMERALD GREEN LOCK RETICLE)
  // --------------------------------------------------------------------------
  function checkTargetLock(x, y) {
    const el = document.elementFromPoint(x, y);
    if (!el) return false;
    return !!el.closest('a, button, .forum-widget-btn, .club-pinwheel-card, .clubs-focal-hub, .clubs-btn, .carousel-3d-card, .carousel-btn, .carousel-dot, .carousel-view-btn, .carousel-expand-btn, .orbit-card-3d, .co-3d-card, .co-curved-card, .co-team-card, .co-scroller-btn, .co-scroller-dot, .orbit-btn, .orbit-dot, .contact-icon-btn, .team-modal-close-btn, .team-modal-btn, .showcase-gallery-card, .showcase-close-btn, #showcase-rsvp-btn, .rsvp-trigger, .back-to-top-btn, select, input, [role="button"]');
  }

  // --------------------------------------------------------------------------
  // CLICK VISUAL SHOCKWAVE FX
  // --------------------------------------------------------------------------
  function triggerClickVisual(x, y) {
    if (airCursorEl) {
      airCursorEl.classList.add('gun-shot');
      setTimeout(() => {
        if (airCursorEl) airCursorEl.classList.remove('gun-shot');
      }, 250);
    }

    const blast = document.createElement('div');
    blast.className = 'gun-blast-impact';
    blast.style.left = `${x}px`;
    blast.style.top = `${y}px`;
    document.body.appendChild(blast);

    setTimeout(() => {
      if (blast.parentNode) blast.parentNode.removeChild(blast);
    }, 450);
  }

  // --------------------------------------------------------------------------
  // SYNTHETIC HOVER DISPATCHER
  // --------------------------------------------------------------------------
  function dispatchSyntheticHover(x, y) {
    if (x === null || y === null) {
      if (lastHoveredElement) {
        lastHoveredElement.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
        lastHoveredElement.dispatchEvent(new PointerEvent('pointerleave', { bubbles: true }));
        lastHoveredElement = null;
      }
      return;
    }

    const targetEl = document.elementFromPoint(x, y);
    if (!targetEl || targetEl === airCursorEl) return;

    if (targetEl !== lastHoveredElement) {
      if (lastHoveredElement) {
        lastHoveredElement.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
        lastHoveredElement.dispatchEvent(new PointerEvent('pointerleave', { bubbles: true }));
      }
      targetEl.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      targetEl.dispatchEvent(new PointerEvent('pointerenter', { bubbles: true }));
      lastHoveredElement = targetEl;
    }

    targetEl.dispatchEvent(new MouseEvent('mousemove', { clientX: x, clientY: y, bubbles: true }));
    targetEl.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true }));
  }

  // --------------------------------------------------------------------------
  // SYNTHETIC CLICK DISPATCHER (CLICKS ANY TARGET)
  // --------------------------------------------------------------------------
  function dispatchSyntheticClick(x, y) {
    const targetEl = document.elementFromPoint(x, y);
    if (!targetEl) return;

    const clickable = targetEl.closest('a, button, .forum-widget-btn, .club-pinwheel-card, .clubs-focal-hub, .clubs-btn, .carousel-3d-card, .carousel-btn, .carousel-dot, .carousel-view-btn, .carousel-expand-btn, .orbit-card-3d, .co-curved-card, .co-team-card, .orbit-btn, .orbit-dot, .contact-icon-btn, .team-modal-close-btn, .team-modal-btn, .showcase-gallery-card, .showcase-close-btn, #showcase-rsvp-btn, .rsvp-trigger, .back-to-top-btn, select, input, [role="button"]');
    if (clickable) {
      clickable.dispatchEvent(new MouseEvent('mousedown', { clientX: x, clientY: y, bubbles: true }));
      clickable.dispatchEvent(new MouseEvent('mouseup', { clientX: x, clientY: y, bubbles: true }));
      clickable.click();
    } else {
      targetEl.click();
    }
  }
})();
