const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

copyright.textContent = `©${year} all rights reserved`;

//mobile navigation

const navButton = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".nav");
const menuIcon = document.querySelector(".icon-open");
const closeIcon = document.querySelector(".icon-close");

navButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("icon-open")) {
    header.style.opacity = 1;
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
    header.style.visibility = "visible";
    header.style.pointerEvents = "auto";
  } else if (e.target.classList.contains("icon-close")) {
    header.style.opacity = 0;
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});

const navLinks = document.querySelectorAll(".nav-link");
let width = 1300;

setInterval(function () {
  width = window.innerWidth;
}, 2000);

console.log(width);

navLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    console.log(width);
    if (width <= 960) {
      header.style.opacity = 0;
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  })
);
