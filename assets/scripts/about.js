const video = document.querySelectorAll('.video-holder video')
const playButton = document.querySelectorAll(
  '.video-holder .play-button-wrapper'
)

playButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    video[index].play()
    video[index].style.pointerEvents = 'auto'
    button.classList.add('hide')
    // stop other videos from playing
    video.forEach((video, i) => {
      if (i !== index) {
        video.pause()
      }
    })
  })
})

// on video pause, show play button
video.forEach((video, index) => {
  video.style.pointerEvents = 'none'

  video.addEventListener('pause', () => {
    video.style.pointerEvents = 'none'
    playButton[index].classList.remove('hide')
  })
})

// multiple sliders

const aboutSliderThumb = document.querySelectorAll(
  '.about-slider-holder .thumb-about-slider'
)

for (i = 0; i < aboutSliderThumb.length; i++) {
  aboutSliderThumb[i].classList.add('swiper-thumb-container-' + i)

  var swiperThumb = new Swiper('.swiper-thumb-container-' + i, {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
  })
}

const aboutSlider = document.querySelectorAll(
  '.about-slider-holder .main-about-slider'
)

for (i = 0; i < aboutSlider.length; i++) {
  aboutSlider[i].classList.add('swiper-container-' + i)

  const swiper = new Swiper('.swiper-container-' + i, {
    slidesPerView: 1,
    thumbs: {
      swiper: swiperThumb,
    },
  })
}
