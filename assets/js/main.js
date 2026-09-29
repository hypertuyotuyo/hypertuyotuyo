// 背景の点（パーティクル）は 2026-09-29 のデザイン一新でやめた

// ============================================
// Nav – scroll behavior
// ============================================
const nav = document.getElementById('nav');
if (nav) window.addEventListener('scroll', () => {
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

// ============================================
// Accordion
// ============================================
document.querySelectorAll('.accordion-item').forEach(item => {
  item.addEventListener('click', (e) => {
    if (!item.classList.contains('open')) {
      item.classList.add('open');
    } else if (e.target.closest('.accordion-header')) {
      item.classList.remove('open');
    }
  });
});
