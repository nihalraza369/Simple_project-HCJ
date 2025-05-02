// Typing effect
const words = ["We build brands.", "We create magic.", "We are NihalCreative."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typed = document.getElementById("typed");

function type() {
  currentWord = words[i];
  if (isDeleting) {
    j--;
  } else {
    j++;
  }
  typed.innerHTML = currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 120);
}

type();

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
