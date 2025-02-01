const navbarControll = document.querySelector(".navbar-controll");
const navbar = document.querySelector(".navbar");
const navbg = document.querySelector(".navbar-bg");

function navSetting(a) {
  a.addEventListener("click", function () {
    if (navbarControll.classList.contains("open-navbar")) {
      navbarControll.classList.remove("open-navbar");
      navbarControll.classList.add("close-navbar");
      navbar.classList.add("on");
      navbar.classList.remove("off");
      navbg.classList.add("on");
      navbg.classList.remove("off");
    } else {
      navbarControll.classList.remove("close-navbar");
      navbarControll.classList.add("open-navbar");
      navbar.classList.remove("on");
      navbar.classList.add("off");
      navbg.classList.remove("on");
      navbg.classList.add("off");
    }
  });
}

navSetting(navbarControll);
navSetting(navbg);
