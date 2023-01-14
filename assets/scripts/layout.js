// product slider
const productSlider = new Swiper('.product-slider', {
  slidesPerView: 4,
  // Optional parameters
  speed: 500,
  loop: true,

  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: '.product-slider-nav.swiper-button-next',
    prevEl: '.product-slider-nav.swiper-button-prev',
  },
})
