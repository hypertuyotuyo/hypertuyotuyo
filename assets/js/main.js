// ============================================
// Particle / Constellation Background
// ============================================
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

const COLORS = ['#FF2D55', '#1464C8', '#FFB800', '#FF6B2B', '#22AA55'];
const COUNT  = window.innerWidth < 768 ? 40 : 80;
const DIST   = 130;

let particles = [];

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  constructor() { this.reset(true); }

  reset(random) {
    this.x  = random ? Math.random() * canvas.width  : Math.random() * canvas.width;
    this.y  = random ? Math.random() * canvas.height : Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.38;
    this.vy = (Math.random() - 0.5) * 0.38;
    this.r  = Math.random() * 2 + 0.6;
    this.a  = Math.random() * 0.35 + 0.18;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height)  this.vy *= -1;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.a;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

function init() {
  particles = Array.from({ length: COUNT }, () => new Particle());
}

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < DIST) {
        ctx.save();
        ctx.globalAlpha = (1 - d / DIST) * 0.18;
        ctx.strokeStyle = '#555555';
        ctx.lineWidth   = 0.6;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawLines();
  requestAnimationFrame(loop);
}

resize();
init();
loop();

window.addEventListener('resize', () => { resize(); init(); });

// ============================================
// Nav – scroll behavior
// ============================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ============================================
// Mobile hamburger menu
// ============================================
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const mobileClose = document.getElementById('mobile-close');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileNav.classList.remove('open'))
  );
}

// ============================================
// Reveal on scroll (Intersection Observer)
// ============================================
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Stagger siblings in the same parent
document.querySelectorAll('.reveal').forEach(el => {
  const siblings = el.parentElement.querySelectorAll('.reveal');
  siblings.forEach((sib, i) => {
    sib.style.transitionDelay = `${i * 0.1}s`;
  });
  io.observe(el);
});
