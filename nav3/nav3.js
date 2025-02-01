const menuBtn = document.querySelector(".menu-btn");
const menuText = document.querySelector(".menu-text p");
const menuDot = document.querySelector(".menu-dot-box");
const navbar = document.querySelector("#navbar");
const navLinks = document.querySelector(".nav-links");
const navNewsletter = document.querySelector(".nav-newsletter");

function navSetting(a) {
  a.addEventListener("click", function () {
    if (navbar.classList.contains("hide")) {
      navbar.classList.remove("hide");
      navbar.classList.add("show");
      menuDot.classList.add("rotate");
      menuText.classList.remove("menu");
      menuText.classList.add("close");
      navLinks.classList.remove("nav-animation");
      navNewsletter.classList.remove("nav-animation");
    } else {
      navbar.classList.remove("show");
      navbar.classList.add("hide");
      menuDot.classList.remove("rotate");
      menuText.classList.remove("close");
      menuText.classList.add("menu");
      navLinks.classList.add("nav-animation");
      navNewsletter.classList.add("nav-animation");
    }
  });
}
navSetting(menuBtn);
