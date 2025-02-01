const navbarControll = document.querySelector(".navbar-controll");
const navbar = document.querySelector("nav");

navbarControll.addEventListener("click", function () {
  if (navbarControll.classList.contains("open-navbar")) {
    navbarControll.classList.remove("open-navbar");
    navbarControll.classList.add("close-navbar");
    navbar.classList.add("on");
    navbar.classList.remove("off");
  } else {
    navbarControll.classList.remove("close-navbar");
    navbarControll.classList.add("open-navbar");
    navbar.classList.remove("on");
    navbar.classList.add("off");
  }
});
