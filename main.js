// Ironclad Locksmith — shared behavior across all pages

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Footer year
  var yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact form: front-end only demo handling.
  // This site has no backend, so this just shows a confirmation message.
  // Replace this with a real form service (see README) before launch.
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.getElementById('form-success');
      form.reset();
      form.style.display = 'none';
      if (success) success.classList.add('visible');
    });
  }
});
