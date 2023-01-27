// main slider feature
const featureSliders = new Swiper('.feature-slider', {
  // start with the second slide
  initialSlide: 1,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 500,
  // autoplay: {
  //   delay: 4000,
  // },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.main-btn.swiper-button-next',
    prevEl: '.main-btn.swiper-button-prev',
  },
})

// slider for special-offers
const specialOffers = new Swiper('.special-offers-slider', {
  slidesPerView: 1,
  // Optional parameters
  speed: 500,
  loop: true,

  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.offers-btn.swiper-button-next',
    prevEl: '.offers-btn.swiper-button-prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
    1190: {
      slidesPerView: 3,
    },
  },
})

// news slider
const newsSlider = new Swiper('.news-slider', {
  slidesPerView: 1,
  // Optional parameters
  speed: 500,
  loop: true,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.news-btn.swiper-button-next',
    prevEl: '.news-btn.swiper-button-prev',
  },
  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1270: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
})

AOS.init({
  duration: 1000,
})

var elem = document.querySelector('.categories')
var iso = new Isotope(elem, {
  // options
  itemSelector: '.category',
  layoutMode: 'masonry',
  percentPosition: true,
  masonry: {
    gutter: '.gutter-sizer',
    columnWidth: '.grid-sizer',
  },
})
