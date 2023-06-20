document.addEventListener('DOMContentLoaded', function () {
  const timeline = document.querySelector('.timeline');
  const yearsContainer = document.querySelector('.pagination .years');
  const years = Array.from(document.querySelectorAll('.timeline .year'));

  const yearButtons = years.map(function (year, index) {
    const yearButtonHolder = document.createElement('div');
    const yearButton = document.createElement('div');
    const yearButtonSpan = document.createElement('span');
    yearButtonHolder.classList.add('year-button-holder');
    yearButton.classList.add('year-button');
    yearButtonSpan.classList.add('year-button-span');
    yearButtonSpan.innerText = year.dataset.year;
    yearButton.appendChild(yearButtonSpan);
    yearButtonHolder.appendChild(yearButton);
    yearsContainer.appendChild(yearButtonHolder);

    yearButton.addEventListener('click', function () {
      setActiveYear(index);
    });

    return yearButton;
  });

  let activeYearIndex = 0;
  setActiveYear(activeYearIndex);

  // const prevButton = document.querySelector('.pagination .nav.prev');
  // const nextButton = document.querySelector('.pagination .nav.next');

  // prevButton.addEventListener('click', function () {
  //   if (activeYearIndex > 0) {
  //     activeYearIndex--;
  //     setActiveYear(activeYearIndex);
  //   }
  // });

  // nextButton.addEventListener('click', function () {
  //   if (activeYearIndex < years.length - 1) {
  //     activeYearIndex++;
  //     setActiveYear(activeYearIndex);
  //   }
  // });

  function setActiveYear(index) {
    years.forEach(function (year, yearIndex) {
      if (yearIndex === index) {
        year.classList.add('active');
      } else {
        year.classList.remove('active');
      }
    });

    yearButtons.forEach(function (button, buttonIndex) {
      if (buttonIndex === index) {
        button.classList.add('active');
        button.classList.remove('future');
      } else if (buttonIndex > index) {
        button.classList.add('future');
        button.classList.remove('active');
      } else {
        button.classList.remove('active', 'future');
      }
    });

    const activeYear = document.querySelector('.timeline .year.active');
    const activeYearTop = activeYear.offsetTop;
    const timelineTop = timeline.offsetTop;

    timeline.style.transform = `translateY(-${activeYearTop - timelineTop}px)`;

    const activeYearData = years[activeYearIndex].dataset.year;
    const activeYearElement = document.querySelector('.year.active');
    activeYearElement.querySelector('.about-text h2').innerText =
      activeYearData;
  }
});

// Get the necessary elements
const prevButton = document.querySelector('.nav.prev');
const nextButton = document.querySelector('.nav.next');
const yearsContainer = document.querySelector('.pagination .years');

// Set the initial translation value
let translateValue = 0;

// Define the translation amount in pixels
const translationAmount = 400; // Adjust this value based on your desired translation

// Add click event listener to the next button
nextButton.addEventListener('click', function () {
  // Calculate the maximum translate value
  const maxTranslateValue = -(
    yearsContainer.scrollWidth - yearsContainer.parentElement.offsetWidth
  );

  // Check if the current translate value is less than the maximum value
  if (translateValue > maxTranslateValue) {
    // Update the translate value
    translateValue -= translationAmount;
    yearsContainer.style.transform = `translateX(${translateValue}px)`;
  }
});

// Add click event listener to the prev button
prevButton.addEventListener('click', function () {
  // Check if the current translate value is greater than zero
  if (translateValue < 0) {
    // Update the translate value
    translateValue += translationAmount;
    yearsContainer.style.transform = `translateX(${translateValue}px)`;
  }
});
