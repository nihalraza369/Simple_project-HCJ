document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
      const width = bar.classList[1];
      bar.style.width = getComputedStyle(bar).width;
      bar.style.width = bar.classList.contains("html") ? "90%" :
                        bar.classList.contains("css") ? "85%" :
                        bar.classList.contains("js") ? "70%" :
                        bar.classList.contains("python") ? "80%" : "0%";
    });
  
    document.getElementById("contact-form").addEventListener("submit", e => {
      e.preventDefault();
      alert("Message sent successfully!");
    });
  });
  