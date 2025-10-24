// script.js

// === Smooth scrolling for navbar boxes ===
document.querySelectorAll(".lists .box").forEach(box => {
  box.addEventListener("click", () => {
    const sectionName = box.textContent.trim().toLowerCase();
    const targetId = sectionName === "home" ? "home"
                   : sectionName === "about me" ? "about"
                   : sectionName === "skills" ? "skills"
                   : sectionName === "projects" ? "projects"
                   : sectionName === "contact" ? "contact"
                   : null;

    if (targetId) {
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === “Get in Touch” button scrolls to contact section ===
document.querySelector(".btn-primary").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// === Optional: highlight active section in navbar ===
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section, .main1, .main2, .main3, .main4, .main5");
  let scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const name = sec.getAttribute("id");

    if (scrollPos >= top && scrollPos <= bottom && name) {
      document.querySelectorAll(".lists .box").forEach(box => {
        box.classList.toggle("active", box.textContent.toLowerCase().includes(name));
      });
    }
  });
});
