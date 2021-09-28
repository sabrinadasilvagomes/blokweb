console.log("test");

var deMenuButton = document.querySelector("nav.hoofdmenu button");
var deNav = document.querySelector("nav.hoofdmenu");

deMenuButton.addEventListener("click", toggleMenu);

function toggleMenu () {
  deNav.classList.toggle("toonMenu");
}

