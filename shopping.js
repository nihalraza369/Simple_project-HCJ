const revealEls = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  revealEls.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
