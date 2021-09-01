var menuSidebar = document.querySelector(".layout-sidebar-main-content-wrapper")
var hamButton = document.querySelector(".menu-toggle-wrapper")

hamButton.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menuSidebar.classList.contains("menu-opened")) {
    menuSidebar.classList.remove("menu-opened");
  } else {
    menuSidebar.classList.add("menu-opened");
  }
}