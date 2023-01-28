const aboutSlider = document.querySelectorAll(
  '.buy-swiper-container .equipment'
)

for (i = 0; i < aboutSlider.length; i++) {
  aboutSlider[i].classList.add('swiper-container-' + i)
  const prevArrow = aboutSlider[i].querySelector('.swiper-button-prev')
  const nextArrow = aboutSlider[i].querySelector('.swiper-button-next')
  prevArrow.classList.add('swiper-button-prev-' + i)
  nextArrow.classList.add('swiper-button-next-' + i)

  const swiper = new Swiper('.swiper-container-' + i, {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,
    // auto height
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next-' + i,
      prevEl: '.swiper-button-prev-' + i,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1340: {
        slidesPerView: 4,
      },
    },
  })
}
