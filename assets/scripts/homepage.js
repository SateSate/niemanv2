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
