import "../sass/main.scss";
import { languages } from "./languages";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
Swiper.use([Navigation]);
import "swiper/css";

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

// Таймер

const formatValue = (value) => (value < 10 ? `0${value}` : value);

const getTimerValues = (diff) => {
  return {
    seconds: (diff / 1000) % 60,
    minutes: (diff / (1000 * 60)) % 60,
    hours: (diff / (1000 * 3600)) % 24,
    days: (diff / (1000 * 3600 * 24)) % 30,
  };
};

const setTimerValues = (values) => {
  Object.entries(values).forEach(([key, value]) => {
    const timerValue = document.getElementById(key);
    timerValue.innerText = formatValue(Math.floor(value));
  });
};

const startTimer = (date) => {
  const id = setInterval(() => {
    const diff = new Date(date).getTime() - new Date().getTime();

    if (diff < 0) {
      clearInterval(id);
      return;
    }

    setTimerValues(getTimerValues(diff));
  }, 1000);
};

startTimer("May 31, 2024 00:00:00");

// Видео

let isPlay = false;
const video = document.getElementById("video");
const videoButton = document.querySelector(".video-btn");

const handleVideo = ({ target }) => {
  const info = target.parentElement;

  isPlay = !isPlay;
  info.classList.toggle(classes.hidden, isPlay);
  target.innerText = isPlay ? "Pause" : "Play";
  isPlay ? video.play() : video.pause();
};

videoButton.addEventListener("click", handleVideo);

// Менять описание

const checkboxes = {
  requirements: ["minimum", "recommended"],
  versions: ["standard", "limited"],
};

const checkbox = document.querySelectorAll(".checkbox");

const handleCheckbox = ({ currentTarget: { checked, name } }) => {
  const { active } = classes;
  const value = checkboxes[name][Number(checked)];
  const list = document.getElementById(value);
  const tabs = document.querySelectorAll(`[data-${name}]`);
  const siblings = list.parentElement.children;

  for (const item of siblings) item.classList.remove(active);
  for (const tab of tabs) {
    tab.classList.remove(active);
    tab.dataset[name] === value && tab.classList.add(active);
  }
  list.classList.add(active);
};

checkbox.forEach((box) => box.addEventListener("click", handleCheckbox));

// Swiper
const initSlider = () => {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 20,
    // initialSlide: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

initSlider();

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

// lang
const language = document.querySelectorAll(".language");

const setTexts = () => {
  const lang = localStorage.getItem("lang") || "en";
  const content = languages[lang];

  if (lang === "uk") {
    // document.body.style.backgroundColor = "#8856d9";
    // document.getElementById("editions").style.backgroundColor = "#8856d9";
    document.getElementById("hero").style.color = "#8856d9";
  } else {
    // document.body.style.backgroundColor = "#1c2023";
    // document.getElementById("editions").style.backgroundColor = "#1c2023";
    document.getElementById("hero").style.color = "#fff";
  }

  Object.entries(content).forEach(([key, value]) => {
    const items = document.querySelectorAll(`[data-text="${key}"]`);
    items.forEach((item) => (item.innerText = value));
  });
};

const toggleLanguage = ({ target }) => {
  const { lang } = target.dataset;

  if (!lang) return;
  localStorage.setItem("lang", lang);
  setTexts();
};

setTexts();

language.forEach((lang) => lang.addEventListener("click", toggleLanguage));

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
