const burgerMenu = document.querySelector(".header__menu-burger");
const navMenu = document.querySelector(".header__nav");
const burgerUse = burgerMenu.querySelector("use");

if (burgerMenu && navMenu && burgerUse) {
  burgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
      burgerUse.setAttribute("href", `./img/sprite.svg#icon-close`);
    } else {
      document.body.style.overflow = "";
      burgerUse.setAttribute("href", `./img/sprite.svg#icon-menu`);
    }
  });

  document.querySelectorAll(".header__nav-link").forEach((el) => {
    el.addEventListener("click", () => {
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
      burgerUse.setAttribute("href", `/img/sprite.svg#icon-menu`);
    });
  });
}

const navLinks = document.querySelectorAll(".header__nav-link");

if (navLinks) {
  const currentPage = window.location.href.split("/").pop();

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href"); 
    if (linkPage === currentPage) {
      link.classList.add("active-link");
    }
  });
}
