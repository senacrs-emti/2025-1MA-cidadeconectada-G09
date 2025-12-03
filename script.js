
//mapa
const map = L.map('map').setView([-30.0253092,-51.2071931], 17);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([-30.0253092,-51.2071931], {alt: 'Kyiv'}).addTo(map).bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!');


const starRating = document.getElementById('starRating');
const stars = starRating.querySelectorAll('.star');
const selectedRatingDisplay = document.getElementById('selectedRating');

let currentRating = 0; // Stores the currently selected rating

starRating.addEventListener('mouseover', (event) => {
  const hoveredStar = event.target.closest('.star');
  if (hoveredStar) {
    const value = parseInt(hoveredStar.dataset.value);
    highlightStars(value);
  }
});

starRating.addEventListener('mouseout', () => {
  highlightStars(currentRating); // Reset to selected rating
});

starRating.addEventListener('click', (event) => {
  const clickedStar = event.target.closest('.star');
  if (clickedStar) {
    currentRating = parseInt(clickedStar.dataset.value);
    selectedRatingDisplay.textContent = currentRating;
    highlightStars(currentRating);
  }
});

function highlightStars(value) {
  stars.forEach((star) => {
    if (parseInt(star.dataset.value) <= value) {
      star.classList.add('filled');
    } else {
      star.classList.remove('filled');
    }
  });
}

// Initial display of selected rating
selectedRatingDisplay.textContent = currentRating;
