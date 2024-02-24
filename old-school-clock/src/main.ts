let date = new Date();

let app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `<h1>Time is ${date.toDateString()}</h1>`;

function updateDate() {
  date = new Date();
  app.innerHTML = `<h1>Time is ${date.toLocaleTimeString()}</h1>`;
}

setInterval(updateDate, 1000);
