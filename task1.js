let startTime = 0;
let elapsedTime = 0;
let timerInterval;
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);

  return (
    (hrs < 10 ? "0" + hrs : hrs) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (secs < 10 ? "0" + secs : secs)
  );
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 1000);
  startBtn.disabled = true;
}

function pause() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
}

function reset() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  elapsedTime = 0;
  laps.innerHTML = "";
  startBtn.disabled = false;
}

function lap() {
  if (elapsedTime === 0) return;
  const li = document.createElement("li");
  li.textContent = timeToString(elapsedTime);
  laps.appendChild(li);
}

startBtn.onclick = start;
pauseBtn.onclick = pause;
resetBtn.onclick = reset;
lapBtn.onclick = lap;
