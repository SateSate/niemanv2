document.addEventListener('DOMContentLoaded', function () {
  const timeline = document.querySelector('.timeline');
  const yearsContainer = document.querySelector('.pagination .years');
  const years = Array.from(document.querySelectorAll('.timeline .year'));
  const yearButtons = years.map(function (year, index) {
    const yearButton = document.createElement('div');
    const yearButtonSpan = document.createElement('span');
    yearButton.classList.add('year-button');
    yearButtonSpan.innerText = year.dataset.year;
    yearButton.appendChild(yearButtonSpan);
    yearsContainer.appendChild(yearButton);

    yearButton.addEventListener('click', function () {
      setActiveYear(index);
    });

    return yearButton;
  });

  let activeYearIndex = 0;
  let activeButtonIndex = Math.floor(years.length / 2);
  setActiveYear(activeYearIndex);

  const prevButton = document.querySelector('.pagination .nav.prev');
  const nextButton = document.querySelector('.pagination .nav.next');

  prevButton.addEventListener('click', function () {
    if (activeYearIndex > 0) {
      activeYearIndex--;
      setActiveYear(activeYearIndex);
    }
  });

  nextButton.addEventListener('click', function () {
    if (activeYearIndex < years.length - 1) {
      activeYearIndex++;
      setActiveYear(activeYearIndex);
    }
  });

  function setActiveYear(index) {
    years.forEach(function (year, yearIndex) {
      if (yearIndex === index) {
        year.classList.add('active');
      } else {
        year.classList.remove('active');
      }
    });

    yearButtons.forEach(function (button, buttonIndex) {
      if (buttonIndex === activeButtonIndex) {
        button.classList.add('active');
        button.classList.remove('future');
        // Set the button's text to the active year
        button.children[0].innerText = years[activeYearIndex].dataset.year;
      } else if (buttonIndex > activeButtonIndex) {
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
