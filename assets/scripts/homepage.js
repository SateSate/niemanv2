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
    nextEl: '.main-btn.swiper-button-next',
    prevEl: '.main-btn.swiper-button-prev',
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
    nextEl: '.offers-btn.swiper-button-next',
    prevEl: '.offers-btn.swiper-button-prev',
  },
})

// news slider
const newsSlider = new Swiper('.news-slider', {
  slidesPerView: 4,
  // Optional parameters
  speed: 500,
  loop: true,

  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: '.news-btn.swiper-button-next',
    prevEl: '.news-btn.swiper-button-prev',
  },
})

// foreach nav link on hover, add active class to dropdown child
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((link) => {
  const dropdown = link.querySelector('.dropdown')
  link.addEventListener('mouseenter', () => {
    dropdown.classList.add('active')
  })
  link.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active')
  })
})

const dropDownLinks = document.querySelectorAll('.dropdown-link')
dropDownLinks.forEach((link) => {
  const dropdown = link.querySelector('.dropdown-sub')
  link.addEventListener('mouseenter', () => {
    dropdown.classList.add('active')
  })
  link.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active')
  })
})
