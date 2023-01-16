const video = document.querySelectorAll('.video-holder video')
const playButton = document.querySelectorAll(
  '.video-holder .play-button-wrapper'
)

playButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    video[index].play()
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
  video.addEventListener('pause', () => {
    playButton[index].classList.remove('hide')
  })
})
