const classes = {
  opened: "opened",
  hidden: "hidden",
  active: "active",
};

// Выезд меню
const headerEl = document.querySelector(".header");
const menuButtonEl = document.querySelector(".header-menu__button");

const toggleMenu = () => headerEl.classList.toggle(classes.opened);
menuButtonEl.addEventListener("click", toggleMenu);
