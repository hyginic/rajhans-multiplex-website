const movieSelect = document.getElementById('movieSelect');
const timeSelect = document.getElementById('timeSelect');
const seatInput = document.getElementById('seatInput');
const typeSelect = document.getElementById('typeSelect');

const summaryTitle = document.getElementById('summaryTitle');
const summaryTime = document.getElementById('summaryTime');
const summarySeats = document.getElementById('summarySeats');
const summaryType = document.getElementById('summaryType');
const summaryPrice = document.getElementById('summaryPrice');
const summaryTotal = document.getElementById('summaryTotal');
const bookButton = document.getElementById('bookButton');

const ticketRate = {
  Premium: 210,
  Standard: 150,
  Gold: 260,
};

function updateSummary() {
  const movie = movieSelect.value;
  const time = timeSelect.value;
  const seats = Math.max(1, Number(seatInput.value) || 1);
  const type = typeSelect.value;

  const rate = ticketRate[type] || 150;
  const total = seats * rate;

  summaryTitle.textContent = movie;
  summaryTime.textContent = time;
  summarySeats.textContent = String(seats);
  summaryType.textContent = type;
  summaryPrice.textContent = `₹${rate}`;
  summaryTotal.textContent = `₹${total}`;
}

movieSelect.addEventListener('change', updateSummary);
timeSelect.addEventListener('change', updateSummary);
seatInput.addEventListener('input', updateSummary);
typeSelect.addEventListener('change', updateSummary);
bookButton.addEventListener('click', () => {
  const movie = movieSelect.value;
  const time = timeSelect.value;
  const seats = Math.max(1, Number(seatInput.value) || 1);
  const type = typeSelect.value;

  bookButton.textContent = `Booked ${seats} ${type} tickets for ${movie} @ ${time}`;
  bookButton.disabled = true;
  setTimeout(() => {
    bookButton.textContent = 'Confirm Booking';
    bookButton.disabled = false;
  }, 1800);
});

updateSummary();
