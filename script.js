const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const form = document.querySelector("form");
const thanks = document.querySelector(".thanks");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  thanks.style.display = "block";
  form.reset();
});

const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");
document.querySelectorAll(".shot img, .about-photos img, .hero-photo img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
  });
});
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox || event.target.closest("button")) {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") lightbox.classList.remove("open");
});
