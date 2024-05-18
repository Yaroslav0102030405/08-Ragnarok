const classes = {
  opened: "opened",
  hidden: "hidden",
  active: "active",
};

// dfdfdfd
const faqItem = document.querySelectorAll(".faq-item");

const handleFaqItem = ({ currentTarget: target }) => {
  target.classList.toggle(classes.opened);
  const isOpened = target.classList.contains(classes.opened);
  const height = target.querySelector("p").clientHeight;
  const content = target.querySelector(".faq-item__content");

  content.style.height = `${isOpened ? height : 0}px`;
};

faqItem.forEach((item) => item.addEventListener("click", handleFaqItem));
