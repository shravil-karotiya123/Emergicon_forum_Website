/**
 * EMERGICON — Clean Transition & Spark Physics Engine
 * Floating mini-logos removed; delivers a clean starfield with subtle cosmic burst
 */

(function () {
  'use strict';

  const canvas = document.getElementById('explosion-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let isExploded = false;
  const SPARK_COUNT = 45;
  const sparks = [];

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Accompanying Spark Particles during transition
  class Spark {
    constructor(originX, originY) {
      this.x = originX;
      this.y = originY;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 18 + 6;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.size = Math.random() * 2.5 + 1;
      this.drag = 0.92;
      this.alpha = 1;
      this.decay = Math.random() * 0.02 + 0.015;
      this.color = Math.random() < 0.6 ? '#4FC3F7' : '#FFFFFF';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= this.drag;
      this.vy *= this.drag;
      this.alpha -= this.decay;
    }

    draw(ctx) {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.fillStyle = this.color;
      ctx.shadowColor = '#4FC3F7';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Trigger Transition Pulse
  function triggerExplosion(originX, originY) {
    if (isExploded) return;
    isExploded = true;

    const startX = originX !== undefined ? originX : width / 2;
    const startY = originY !== undefined ? originY : height / 2;

    for (let i = 0; i < SPARK_COUNT; i++) {
      sparks.push(new Spark(startX, startY));
    }
  }

  // Master Render Loop
  function loop() {
    ctx.clearRect(0, 0, width, height);

    if (isExploded && sparks.length > 0) {
      for (let i = sparks.length - 1; i >= 0; i--) {
        sparks[i].update();
        sparks[i].draw(ctx);
        if (sparks[i].alpha <= 0) {
          sparks.splice(i, 1);
        }
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  window.EmergiconExplosion = {
    trigger: triggerExplosion,
    isTriggered: () => isExploded
  };
})();
