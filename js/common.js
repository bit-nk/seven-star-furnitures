/* ═══════════════════════════════════════════════
   7 STAR FURNITURES — COMMON (Security Utils + Theme + Navbar)
   Shared across all pages
   ═══════════════════════════════════════════════ */

// ── Security Utilities ──

/** Escape HTML to prevent XSS when inserting into innerHTML */
function escHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/** Sanitize a filename — strip path traversal, allow only safe chars */
function safeName(name) {
  return String(name).replace(/[^a-zA-Z0-9._\-]/g, '');
}

/** Validate that a value is one of an allowed set */
function allowedVal(val, allowed, fallback) {
  return allowed.includes(val) ? val : fallback;
}

// ── Theme Toggle ──
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

// Validate stored theme — only allow 'dark' or 'light'
const storedTheme = localStorage.getItem('7star-theme');
const validTheme = (storedTheme === 'light' || storedTheme === 'dark') ? storedTheme : 'dark';
html.setAttribute('data-theme', validTheme);

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('7star-theme', next);
});

// ── Navbar scroll hide/show ──
const navbar = document.getElementById('navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  navbar.classList.toggle('scrolled', scrollY > 50);
  if (scrollY > lastScroll && scrollY > 200) navbar.style.transform = 'translateY(-100%)';
  else navbar.style.transform = 'translateY(0)';
  lastScroll = scrollY;
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// ── Mobile dropdown toggle ──
document.querySelectorAll('.dropdown').forEach(dd => {
  dd.querySelector('.dropdown-toggle').addEventListener('click', (e) => {
    if (window.innerWidth <= 768) { e.preventDefault(); dd.classList.toggle('open'); }
  });
});

// ── Close mobile menu on link click ──
document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});
