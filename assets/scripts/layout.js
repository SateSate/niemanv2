// product slider
const productSlider = new Swiper('.product-slider', {
  slidesPerView: 1,
  // Optional parameters
  speed: 500,
  loop: true,

  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.product-slider-nav.swiper-button-next',
    prevEl: '.product-slider-nav.swiper-button-prev',
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

// header
const topNavToggle = document.querySelector('.top-nav-toggle')
const topNavLinks = document.querySelector('.top-nav-links')
const topNav = document.querySelector('.top-nav')

topNavToggle.addEventListener('click', () => {
  topNavLinks.classList.toggle('active')
  topNavToggle.classList.toggle('active')
  topNav.classList.toggle('active')
})

const mainNavToggle = document.querySelector('.main-nav-toggle')
const mainNavLinks = document.querySelector('.main-nav-list')

mainNavToggle.addEventListener('click', () => {
  mainNavToggle.classList.toggle('active')
  mainNavLinks.classList.toggle('active')
})

document.addEventListener('click', (e) => {
  if (e.target.closest('.top-nav')) return
  topNavLinks.classList.remove('active')
  topNavToggle.classList.remove('active')
})

function navLinksAction() {
  const navLinks = document.querySelectorAll('.main-nav-list .nav-link')
  navLinks.forEach((link) => {
    const dropdown = link.nextElementSibling
    const parent = link.parentElement
    if (window.innerWidth >= 992) {
      parent.addEventListener('mouseenter', () => {
        if (dropdown) {
          dropdown.classList.add('active')
        }
      })
      parent.addEventListener('mouseleave', () => {
        if (dropdown) {
          dropdown.classList.remove('active')
        }
      })
    } else if (window.innerWidth < 992) {
      link.addEventListener('click', () => {
        const dropdownSub = document.querySelectorAll('.dropdown-sub')
        dropdownSub.forEach((sub) => {
          sub.classList.remove('active')
        })
        if (dropdown) {
          dropdown.classList.toggle('active')
        }
      })
    }
  })

  const dropDownLinks = document.querySelectorAll('.dropdown-link')
  dropDownLinks.forEach((link) => {
    const dropdown = link.querySelector('.dropdown-sub')
    if (window.innerWidth >= 992) {
      link.addEventListener('mouseenter', () => {
        if (dropdown) {
          dropdown.classList.add('active')
        }
      })
      link.addEventListener('mouseleave', () => {
        if (dropdown) {
          dropdown.classList.remove('active')
        }
      })
    } else if (window.innerWidth < 992) {
      link.addEventListener('click', () => {
        // add active class to dropdown and remove from other dropdowns
        if (dropdown) {
          dropdown.classList.toggle('active')
        }
      })
    }
  })
}

navLinksAction()
window.addEventListener('resize', navLinksAction)

// on document ready fade out the preloader without using jquery
document.addEventListener('DOMContentLoaded', async function () {
  const loader = document.querySelector('.loader')
  await setTimeout(() => {
    loader.classList.add('loaded')
  }, 300)

  await setTimeout(() => {
    loader.classList.add('d-none')
  }, 1000)
})
