/**
 * EMERGICON — SpaceX Telemetry Text Scrambler Engine
 * High-tech alphanumeric glyph decoding on scroll reveal
 */

(function () {
  'use strict';

  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789//<>_#+-~*';

  class TextScrambler {
    constructor(el) {
      this.el = el;
      this.originalText = el.innerText.trim();
      this.isScrambling = false;
    }

    scramble(duration = 1200) {
      if (this.isScrambling) return;
      this.isScrambling = true;

      const length = this.originalText.length;
      const startTime = performance.now();
      const original = this.originalText;
      const element = this.el;

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const settledIndex = Math.floor(progress * length);

        let output = '';
        for (let i = 0; i < length; i++) {
          if (original[i] === ' ' || original[i] === '\n') {
            output += original[i];
          } else if (i < settledIndex) {
            output += original[i];
          } else {
            output += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }

        element.innerText = output;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.innerText = original;
        }
      }

      requestAnimationFrame(update);
    }
  }

  function initScramble() {
    const scrambleElements = document.querySelectorAll('[data-scramble]');
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrambler = new TextScrambler(entry.target);
            scrambler.scramble(900);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    scrambleElements.forEach((el) => observer.observe(el));
  }

  window.EmergiconScramble = {
    init: initScramble
  };
})();
