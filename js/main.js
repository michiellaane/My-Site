/* ── Scroll state ──────────────────────────────────────────── */

const header = document.getElementById('site-header');

const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 0);
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load in case page is already scrolled

/* ── Mobile nav toggle ─────────────────────────────────────── */

const toggle   = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  navLinks.classList.toggle('is-open', !isOpen);
});

// Close on any nav link click (smooth UX on single-page sites)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    navLinks.classList.remove('is-open');
  });
});
