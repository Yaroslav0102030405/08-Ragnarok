const classes = {
  opened: "opened",
  hidden: "hidden",
  active: "active",
};

// Modal
const values = [
  {
    price: 19.99,
    title: "Standart Edition",
  },
  {
    price: 18.99,
    title: "Standart Edition",
  },
  {
    price: 29.99,
    title: "Deluxe Edition",
  },
  {
    price: 35.99,
    title: "DualSense",
  },
  {
    price: 15.99,
    title: "Minimum",
  },
  {
    price: 15.99,
    title: "Standard",
  },
];

const buyButton = document.querySelectorAll(".buy-button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalTitle = document.querySelector(".modal-subtitle");
const modalPrice = document.querySelector(".modal-total__price");
const modalClose = document.querySelector(".modal-close");

const handleBuyButton = ({ currentTarget: target }) => {
  const { value } = target.dataset;

  if (!value) return;

  const { price, title } = values[value];

  modalTitle.innerText = title;
  modalPrice.innerText = `${price}$`;
  modal.classList.add(classes.opened);
  overlay.classList.add(classes.opened);
};

buyButton.forEach((btn) => btn.addEventListener("click", handleBuyButton));

const closeModal = () => {
  modal.classList.remove(classes.opened);
  overlay.classList.remove(classes.opened);
};

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
