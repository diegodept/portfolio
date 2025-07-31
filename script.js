const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const closeMenu = document.getElementById('close-menu');

hamburger.addEventListener('click', () => {
  navLinks.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

window.addEventListener("scroll", () => {
  const overlay = document.querySelector(".parallax-overlay");
  const scrollY = window.scrollY;
  
  // Move overlay slower for parallax effect
  overlay.style.transform = `translate(-20%, ${scrollY * 0.2}px)`;
});



