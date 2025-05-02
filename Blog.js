// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('visible');
    } else {
      reveal.classList.remove('visible');
    }
  });
});

// Contact form submission (demo)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully!');
});
