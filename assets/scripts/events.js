// fetch events from the json file
async function getEvents() {
  return await fetch('/assets/scripts/eventsList.json')
    .then((response) => response.json())
    .then((data) => data.events)
    .catch((error) => console.log(error))
}

// get the events from the json file and add them to the DOM
async function addEvents() {
  const events = await getEvents()
  const eventsList = document.querySelector('.events-list')
  events.forEach((event) => {
    // change the format of the date from DD/MM/YYYY to DD Mon
    const date = new Date(event.date)
    const month = date.toLocaleString('default', { month: 'short' })
    event.date = `${date.getDate()} ${month}`

    const eventItem = document.createElement('div')
    eventItem.classList.add('event')
    // if the event has highlight true, add the highlight class
    if (event.highlight) {
      eventItem.classList.add('highlight')
    }
    // if the event is in the past, add the past class
    if (event.date < new Date()) {
      eventItem.classList.add('past')
    }
    eventItem.innerHTML = `
    <div class="date-holder">
        <span class="date">${event.date}</span>
        <span class="time">${event.time}</span>
    </div>
    <a href="${event.pdfUrl}" class="pdf">Pdf</a>
    <div class="event-info">
        <div class="event-title">${event.name}</div>
        <div class="event-description">${event.description}</div>
    </div>
    <div class="location">
        <div class="venue">${event.location.venue}</div>
        <div class="city">${event.location.city}</div>
    </div>
    `
    eventsList.appendChild(eventItem)
  })
}

addEvents()
