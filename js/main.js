// =========================
/* EDIT YOUR CONTACT DETAILS HERE */
// WhatsApp number must include country code, without +, spaces or dashes.
const WHATSAPP_NUMBER = "919629240407";
// Replace this placeholder with your full Instagram profile URL.
const INSTAGRAM_URL = "https://www.instagram.com/YOUR_USERNAME_HERE/";
// Optional: replace with your LinkedIn profile URL.
const LINKEDIN_URL = "https://www.linkedin.com/in/abinav-sundar-9389a1355/";
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const mailForm = document.getElementById("mailForm");

    if (!mailForm) return;

    mailForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("senderName").value;
        const email = document.getElementById("senderEmail").value;
        const message = document.getElementById("senderMessage").value;

        const recipient = "abinavsundar1234@gmail.com";

        const subject = encodeURIComponent("Website Enquiry");

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage: " + message
        );

        window.location.href =
            "mailto:" + recipient +
            "?subject=" + subject +
            "&body=" + body;

    });

});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".whatsapp-link").forEach(link => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Abinav! I saw your portfolio and would like to discuss a project.")}`;
  });

  document.querySelectorAll(".instagram-link, [data-social='instagram']").forEach(link => {
    link.href = INSTAGRAM_URL;
    link.addEventListener("click", event => {
      if (INSTAGRAM_URL.includes("YOUR_USERNAME_HERE")) {
        event.preventDefault();
        alert("Add your Instagram profile URL in js/main.js first.");
      }
    });
  });

  document.querySelectorAll("[data-social='linkedin']").forEach(link => {
    link.href = LINKEDIN_URL;
    link.addEventListener("click", event => {
      if (LINKEDIN_URL.includes("YOUR_PROFILE_HERE")) {
        event.preventDefault();
        alert("Add your LinkedIn profile URL in js/main.js first.");
      }
    });
  });

  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
  }

  const launcher = document.querySelector(".chat-launcher");
  const panel = document.querySelector(".chat-panel");
  const close = document.querySelector(".chat-close");
  const setPanel = open => {
    if (!panel || !launcher) return;
    panel.classList.toggle("open", open);
    launcher.setAttribute("aria-expanded", String(open));
    launcher.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-regular fa-comment-dots"></i>';
  };
  launcher?.addEventListener("click", () => setPanel(!panel.classList.contains("open")));
  close?.addEventListener("click", () => setPanel(false));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setPanel(false); });

  const loader = document.querySelector(".page-loader");
  if (loader) setTimeout(() => loader.classList.add("done"), 350);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal, .service-detail, .project-card").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
});
