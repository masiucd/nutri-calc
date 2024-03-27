import "./style.css";
let date = new Date();
let clock = document.querySelector<HTMLDivElement>("#clock")!;
let startButton =
  document.querySelector<HTMLButtonElement>('[data-btn="start"]')!;
let stopButton =
  document.querySelector<HTMLButtonElement>('[data-btn="stop"]')!;

function timeIs(date: Date) {
  return `Time is ${date.toLocaleTimeString()}`;
}

clock.innerHTML = `<h1>${timeIs(date)}</h1>`;
let timeId = -1;

startButton.addEventListener("click", () => {
  stopButton.classList.remove("pulse");
  startButton.classList.add("pulse");

  clock.style.position = "absolute";
  let h1 = clock.querySelector("h1")!;
  h1.classList.remove("stopped");
  // Update the clock immediately
  date = new Date();
  clock.innerHTML = `<h1>${timeIs(date)}</h1>`;
  // Then update every second
  let id = setInterval(() => {
    date = new Date();
    clock.style.top = `${generateRandomNumber(50)}%`;
    clock.style.left = `${generateRandomNumber(80)}%`;
    clock.innerHTML = `<h1 style="color:${generateRandomColor()};">${timeIs(
      date
    )}</h1>`;
  }, 1000);
  timeId = id;
});

stopButton.addEventListener("click", () => {
  startButton.classList.remove("pulse");
  stopButton.classList.add("pulse");
  clearInterval(timeId);
  let h1 = clock.querySelector("h1")!;
  h1.classList.add("stopped");
});

function generateRandomColor() {
  let randomNumber1 = generateRandomNumber();
  let randomNumber2 = generateRandomNumber();
  let randomNumber3 = generateRandomNumber();
  return `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}

function generateRandomNumber(threshold = 250) {
  return Math.floor(Math.random() * threshold);
}
