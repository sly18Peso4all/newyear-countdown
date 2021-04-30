const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCountdown() {
  const currentTime = new Date();
  const timeDiff = newYearTime - currentTime;

  const daysToNewYear = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
  const hoursToNewYear = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
  const minsToNewYear = Math.floor(timeDiff / 1000 / 60) % 60;
  const secsToNewYear = Math.floor(timeDiff / 1000) % 60;

  days.innerHTML = daysToNewYear;
  hours.innerHTML = hoursToNewYear < 10 ? "0" + hoursToNewYear : hoursToNewYear;
  minutes.innerHTML = minsToNewYear < 10 ? "0" + minsToNewYear : minsToNewYear;
  seconds.innerHTML = secsToNewYear < 10 ? "0" + secsToNewYear : secsToNewYear;
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(updateCountdown, 1000);
