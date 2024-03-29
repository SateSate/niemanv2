document.addEventListener('DOMContentLoaded', function () {
  const timeline = document.querySelector('.timeline');
  const yearsContainer = document.querySelector('.pagination .years');
  const years = Array.from(document.querySelectorAll('.timeline .year'));

  const yearButtons = years.map(function (year, index) {
    const yearButtonHolder = document.createElement('div');
    const yearButton = document.createElement('div');
    const yearButtonSpan = document.createElement('span');
    const line = document.createElement('div');

    yearButtonHolder.classList.add('year-button-holder');
    yearButton.classList.add('year-button');
    yearButtonSpan.classList.add('year-button-span');
    line.classList.add('line');

    yearButtonSpan.innerText = year.dataset.year;
    yearButton.appendChild(yearButtonSpan);
    yearButtonHolder.appendChild(line);
    yearButtonHolder.appendChild(yearButton);
    yearsContainer.appendChild(yearButtonHolder);

    yearButton.addEventListener('click', function () {
      setActiveYear(index);
    });

    return yearButton;
  });

  let activeYearIndex = 0;
  setActiveYear(activeYearIndex);

  function setActiveYear(index) {
    years.forEach(function (year, yearIndex) {
      if (yearIndex === index) {
        year.classList.add('active');
      } else {
        year.classList.remove('active');
      }
    });

    yearButtons.forEach(function (button, buttonIndex) {
      const yearButtonHolder = button.parentElement;
      if (buttonIndex === index) {
        button.classList.add('active');
        button.classList.remove('future');
        yearButtonHolder.classList.add('active');
        yearButtonHolder.classList.remove('future');
      } else if (buttonIndex > index) {
        button.classList.add('future');
        button.classList.remove('active');
        yearButtonHolder.classList.add('future');
        yearButtonHolder.classList.remove('active');
      } else {
        button.classList.remove('active', 'future');
        yearButtonHolder.classList.remove('active', 'future');
      }
    });

    const activeYear = document.querySelector('.timeline .year.active');
    const activeYearTop = activeYear.offsetTop;
    const timelineTop = timeline.offsetTop;

    timeline.style.transform = `translateY(-${activeYearTop - timelineTop}px)`;

    const visibleYears = years.filter(function (year, yearIndex) {
      return yearIndex >= index;
    });
    const visibleYearsHeight = visibleYears.reduce(function (
      totalHeight,
      year
    ) {
      return totalHeight + year.offsetHeight;
    },
    0);
    const timelineContainer = document.querySelector('.timeline-container');
    timelineContainer.style.height = visibleYearsHeight + 'px';
  }
});

// Get the necessary elements
const prevButton = document.querySelector('.nav.prev');
const nextButton = document.querySelector('.nav.next');
const yearsContainer = document.querySelector('.pagination .years');

// Set the initial translation value
let translateValue = 0;

// Define the translation amount in pixels
let translationAmount = 400; // Adjust this value based on your desired translation
if (window.innerWidth < 768) {
  translationAmount = 200;
}

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
