/**
 * EMERGICON — Custom Magnetic Trailing Cursor
 * Fluid dual-layer cursor with Lerp interpolation, magnetic snapping, and hover expansion
 */

(function () {
  'use strict';

  // Only initialize on non-touch desktop devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let dotX = -100;
  let dotY = -100;

  let isHovered = false;
  let magneticTarget = null;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (dotX === -100) {
      dotX = ringX = mouseX;
      dotY = ringY = mouseY;
    }
  });

  // Track hoverable and magnetic elements
  function attachHoverEvents() {
    const interactables = document.querySelectorAll(
      'a, button, .btn, .glass-card, .bento-item, .gallery-item, .filter-btn, .team-card, .carousel-btn, input, select'
    );

    interactables.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        isHovered = true;
        ring.classList.add('cursor-hover');

        // Check if element has magnetic pull
        if (el.classList.contains('btn') || el.classList.contains('filter-btn') || el.classList.contains('nav-link') || el.classList.contains('carousel-btn')) {
          magneticTarget = el;
        }
      });

      el.addEventListener('mouseleave', () => {
        isHovered = false;
        ring.classList.remove('cursor-hover');
        magneticTarget = null;
      });
    });
  }

  // Animation Loop with Smooth Linear Interpolation (Lerp)
  function render() {
    let targetX = mouseX;
    let targetY = mouseY;

    // Magnetic pull towards element center
    if (magneticTarget) {
      const rect = magneticTarget.getBoundingClientRect();
      const elemCenterX = rect.left + rect.width / 2;
      const elemCenterY = rect.top + rect.height / 2;
      targetX = elemCenterX + (mouseX - elemCenterX) * 0.3;
      targetY = elemCenterY + (mouseY - elemCenterY) * 0.3;
    }

    // Dot tracks quickly
    dotX += (targetX - dotX) * 0.45;
    dotY += (targetY - dotY) * 0.45;

    // Ring lags with silky momentum
    ringX += (targetX - ringX) * 0.14;
    ringY += (targetY - ringY) * 0.14;

    dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

    requestAnimationFrame(render);
  }

  document.addEventListener('DOMContentLoaded', () => {
    attachHoverEvents();
    requestAnimationFrame(render);
  });

  window.EmergiconCursor = {
    refresh: attachHoverEvents
  };
})();
