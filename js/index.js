// import "../sass/main.scss";
// import { languages } from "./languages";
// import Swiper from "swiper";
// import { Navigation } from "swiper/modules";
// Swiper.use([Navigation]);
// import "swiper/css";

const classes = {
  opened: "opened",
  hidden: "hidden",
  active: "active",
};

// // Видео

// let isPlay = false;
// const video = document.getElementById("video");
// const videoButton = document.querySelector(".video-btn");

// const handleVideo = ({ target }) => {
//   const info = target.parentElement;

//   isPlay = !isPlay;
//   info.classList.toggle(classes.hidden, isPlay);
//   target.innerText = isPlay ? "Pause" : "Play";
//   isPlay ? video.play() : video.pause();
// };

// videoButton.addEventListener("click", handleVideo);

// // Swiper
// const initSlider = () => {
//   new Swiper(".swiper", {
//     loop: true,
//     slidesPerView: 1,
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
//     spaceBetween: 20,
//     // initialSlide: 1,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// };

// initSlider();
