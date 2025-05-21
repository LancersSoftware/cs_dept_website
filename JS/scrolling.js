// scroll
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
      top: target.offsetTop - headerHeight,
      behavior: 'smooth'
    });
    // Hide menu after click (for mobile)
    document.querySelector('.nav-links').classList.remove('show');
  });
});

// Mobile nav toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}
