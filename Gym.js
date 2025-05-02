const textList = ["Train Like a Beast", "Transform Your Body", "Join PowerZone Gym"];
let i = 0, j = 0, isDeleting = false;
const typed = document.getElementById("typed");

function typeText() {
  let current = textList[i];
  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  typed.textContent = current.slice(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(typeText, 1500);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % textList.length;
  }

  setTimeout(typeText, isDeleting ? 50 : 100);
}
typeText();

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
