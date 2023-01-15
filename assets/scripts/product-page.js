const swiper = new Swiper('.thumb-product-slider', {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
})

const swiper2 = new Swiper('.main-product-slider', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
})

// get inner html of the first slider and append it to the second slider
const firstSlider = document.querySelector(
  '.main-product-slider .swiper-wrapper'
)
const secondSlider = document.querySelector(
  '.thumb-product-slider .swiper-wrapper'
)
secondSlider.innerHTML = firstSlider.innerHTML
