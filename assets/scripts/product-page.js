const swiper = new Swiper('.thumb-product-slider', {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
})

const swiper2 = new Swiper('.main-product-slider', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.main-product-slider .swiper-button-next',
    prevEl: '.main-product-slider .swiper-button-prev',
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

function initTab(elem) {
  document.addEventListener('click', function (e) {
    if (!e.target.matches(elem + ' .tab')) return
    else {
      if (!e.target.classList.contains('active')) {
        findActiveElementAndRemoveIt(elem + ' .tab')
        findActiveElementAndRemoveIt(elem + ' .tab-content')
        e.target.classList.add('active')
        setTimeout(function () {
          var panel = document.querySelectorAll(
            elem + ' .tab-content.' + e.target.dataset.name
          )
          Array.prototype.forEach.call(panel, function (el) {
            el.classList.add('active')
          })
        }, 200)
      }
    }
  })
}

function findActiveElementAndRemoveIt(elem) {
  var elementList = document.querySelectorAll(elem)
  Array.prototype.forEach.call(elementList, function (e) {
    e.classList.remove('active')
  })
}

initTab('.tab-holder')

function increaseValue() {
  let value = parseInt(document.getElementById('number').value, 10)
  value = isNaN(value) ? 0 : value
  value++
  document.getElementById('number').value = value
}

function decreaseValue() {
  let value = parseInt(document.getElementById('number').value, 10)
  value = isNaN(value) ? 0 : value
  value < 1 ? (value = 1) : ''
  value--
  document.getElementById('number').value = value
}

const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')

increase.addEventListener('click', increaseValue)
decrease.addEventListener('click', decreaseValue)
