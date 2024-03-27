import "./style.css";

// Define helper functions
function generateRandomNumber(threshold = 250) {
  return Math.floor(Math.random() * threshold);
}

function generateRandomColor() {
  return `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
}

function updateClock(clock: HTMLDivElement, date: Date) {
  clock.style.top = `${generateRandomNumber(50)}%`;
  clock.style.left = `${generateRandomNumber(80)}%`;
  clock.innerHTML = `<h1 style="color:${generateRandomColor()};">Time is ${date.toLocaleTimeString()}</h1>`;
}

// Define variables
let clock = document.querySelector<HTMLDivElement>("#clock")!;
let startButton =
  document.querySelector<HTMLButtonElement>('[data-btn="start"]')!;
let stopButton =
  document.querySelector<HTMLButtonElement>('[data-btn="stop"]')!;
let timeId = -1;

// Initialize clock
updateClock(clock, new Date());

// Add event listeners
startButton.addEventListener("click", () => {
  stopButton.classList.remove("pulse");
  startButton.classList.add("pulse");
  clock.style.position = "absolute";
  // Update the clock immediately and then every second
  updateClock(clock, new Date());
  timeId = setInterval(() => updateClock(clock, new Date()), 1000);
});

stopButton.addEventListener("click", () => {
  startButton.classList.remove("pulse");
  stopButton.classList.add("pulse");
  clearInterval(timeId);
  let h1 = clock.querySelector("h1")!;
  h1.classList.add("stopped");
});
