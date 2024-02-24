let date = new Date();
let app = document.querySelector<HTMLDivElement>("#app")!;
let clock = document.querySelector<HTMLDivElement>("#clock")!;

function timeIs(date: Date) {
  return `Time is ${date.toLocaleTimeString()}`;
}

clock.innerHTML = `<h1>${timeIs(date)}</h1>`;

function updateDate() {
  let randomNumber = Math.floor(Math.random() * 100);
  let color = `rgb(${randomNumber * 2.5}, ${randomNumber + 100}, ${
    randomNumber + 60
  })`;
  clock.innerHTML = `<h1 style="color:${color}"   >${timeIs(new Date())}</h1>`;
}

let id = setInterval(updateDate, 1000);

let startButton =
  document.querySelector<HTMLButtonElement>('[data-btn="start"]');
let stopButton = document.querySelector<HTMLButtonElement>('[data-btn="stop"]');

startButton?.addEventListener("click", () => {
  id = setInterval(updateDate, 1000);
});

stopButton?.addEventListener("click", () => {
  clearInterval(id);
});
