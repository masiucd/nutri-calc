import "./style.css";

let h1 = document.getElementById("h1") as HTMLHeadingElement;
let textList = [
  "Bonjour, je suis un développeur web",
  "J'aime le JavaScript",
  "Witam na mojej stronie",
  "Hello, I'm a web developer",
  "I like JavaScript",
  "Hola, soy un desarrollador web",
  "Me gusta JavaScript",
];
let typeSpeed = 150;
let idx = 0;
let removing = false;
let charCount = 0;
function type() {
  setInterval(() => {
    console.log({charCount, idx, removing});

    if (charCount < textList[idx].length) {
      h1.innerHTML += textList[idx][charCount];
    }
    if (charCount === textList[idx].length + typeSpeed / 10) {
      removing = true;
    }
    if (removing) {
      h1.innerHTML = h1.innerHTML.slice(0, -1);
      charCount--;
    }
    charCount++;

    if (h1.innerHTML.length === 0) {
      if (idx === textList.length - 1) {
        idx = 0;
      } else {
        idx++;
      }
      charCount = 0;
      removing = false;
    }
  }, typeSpeed);
}

type();
