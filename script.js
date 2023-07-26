let countdownInterval;

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const pauseButton = document.getElementById("pauseButton");
const inputTime = document.getElementById("inputTime");
const countdown = document.getElementById("countdown");

startButton.addEventListener("click", startTimer);
restartButton.addEventListener("click", restartTimer);
pauseButton.addEventListener("click", pauseTimer);

function startTimer() {
  const targetTime = new Date(inputTime.value).getTime();

  countdownInterval = setInterval(updateCountdown, 1000, targetTime);

  // Disable input and start button after starting the timer
  inputTime.disabled = true;
  startButton.disabled = true;
}

function updateCountdown(targetTime) {
  const currentTime = new Date().getTime();
  const remainingTime = targetTime - currentTime;

  if (remainingTime <= 0) {
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

function restartTimer() {
  clearInterval(countdownInterval);
  inputTime.disabled = false;
  startButton.disabled = false;
  countdown.querySelectorAll(".time-block span").forEach(span => (span.innerText = "0"));
}

function pauseTimer() {
  clearInterval(countdownInterval);
  startButton.disabled = false;
}
