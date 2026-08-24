/**
 * EMERGICON — Calibrated Ambient Starfield & Nebula Canvas
 * Softened by 30% to provide elegant background depth without competing with content
 */

(function () {
  'use strict';

  const canvas = document.getElementById('space-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Responsive Star Density (slightly reduced for clean background)
  const STAR_COUNT = Math.floor((width * height) / 8500);
  const stars = [];

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Star Class with Softened Brightness
  class Star {
    constructor() {
      this.reset();
      this.y = Math.random() * height; // Initial distribution
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 1.4 + 0.3; // Delicate stars
      this.baseAlpha = Math.random() * 0.45 + 0.15; // Max 0.6 alpha (softened by 30%)
      this.alpha = this.baseAlpha;
      this.speed = Math.random() * 0.18 + 0.05;
      this.twinkleSpeed = Math.random() * 0.015 + 0.005;
      this.twinkleOffset = Math.random() * Math.PI * 2;
    }

    update(time) {
      this.y -= this.speed;
      if (this.y < -5) {
        this.y = height + 5;
        this.x = Math.random() * width;
      }
      this.alpha = this.baseAlpha + Math.sin(time * this.twinkleSpeed + this.twinkleOffset) * 0.12;
    }

    draw(ctx) {
      ctx.save();
      ctx.fillStyle = '#FFFFFF';
      ctx.globalAlpha = Math.max(0.08, Math.min(0.65, this.alpha));
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Initialize Stars
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push(new Star());
  }

  // Master Render Loop
  let lastTime = 0;
  function loop(currentTime) {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < stars.length; i++) {
      stars[i].update(currentTime * 0.05);
      stars[i].draw(ctx);
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();
