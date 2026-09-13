(function() {
  'use strict';

  // ============================================================
  // SPOTLIGHT EFFECT (Mouse-follow glow on cards)
  // ============================================================
  const grid = document.getElementById('cardGrid');
  const cards = document.querySelectorAll('.card');

  if (grid) {
    grid.addEventListener('mousemove', function(e) {
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mx', x + 'px');
        card.style.setProperty('--my', y + 'px');
      }
    });
  }

  // ============================================================
  // THEME TOGGLE (Dark / Light)
  // ============================================================
  const toggle = document.getElementById('themeToggle');
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  }

  if (toggle) {
    toggle.addEventListener('click', function() {
      body.classList.toggle('light-mode');
      const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
      localStorage.setItem('theme', currentTheme);
    });
  }

  // ============================================================
  // FADE-IN ON LOAD (Card entrance animation)
  // ============================================================
  window.addEventListener('load', () => {
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`;
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  });

})();
