/* -------------------------------------------------
   scroll‑spy.js – smooth scroll + active‑tab highlight
   ------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  const OFFSET = 80; // same height you used for CSS scroll‑margin-top

  // ----  smooth scroll for every hash link in the masthead ----
  document.querySelectorAll('.greedy-nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const topPos = targetEl.getBoundingClientRect().top + window.pageYOffset - OFFSET;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
      }
    });
  });

  // ----  scroll‑spy – add .active to the link whose section is visible ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.greedy-nav a');

  function updateActiveLink() {
    const scrollPos = window.pageYOffset + OFFSET + 1;
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) {
        const id = sec.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink(); // run once on page load
});
