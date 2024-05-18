const classes = {
  opened: "opened",
  hidden: "hidden",
  active: "active",
};

// animation
const sections = document.querySelectorAll(".section");

const handleScroll = () => {
  const { scrollY: y, innerHeight: h } = window;
  sections.forEach((section) => {
    if (y > section.offsetTop - h / 1.5)
      section.classList.remove(classes.hidden);
  });
};

window.addEventListener("scroll", handleScroll);
