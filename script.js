const menuBtn = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function() {
  navBar.classList.toggle("change");
});

document.querySelector(".main-body").addEventListener("click", function() {
  if(navBar.className === "navbar change") {
    navBar.classList.remove("change")
  }
});