const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menu = document.querySelector("[data-menu]");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

function updateHeader() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 8);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menu?.addEventListener("click", () => {
  const open = nav?.classList.toggle("open") ?? false;
  menu.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("no-scroll", open);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  });
});

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.13 }
);

revealItems.forEach((item) => observer.observe(item));
