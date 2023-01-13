// main slider feature
const featureSliders = new Swiper('.feature-slider', {
  // start with the second slide
  initialSlide: 1,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 500,
  autoplay: {
    delay: 4000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// slider for special-offers
const specialOffers = new Swiper('.special-offers-slider', {
  slidesPerView: 3,
  // Optional parameters
  speed: 500,
  loop: true,

  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
