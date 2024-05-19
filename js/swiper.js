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
