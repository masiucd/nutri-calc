import "./style.css";

let h1 = document.getElementById("h1") as HTMLHeadingElement;
let sentences = [
  "Bonjour, je suis un développeur web",
  "J'aime le JavaScript",
  "Witam na mojej stronie",
  "Hello, I'm a web developer",
  "I like JavaScript",
  "Hola, soy un desarrollador web",
  "Me gusta JavaScript",
];

let index = 0;
let charCount = 0;
let speed = 150;
function type() {
  setInterval(() => {
    if (charCount < sentences[index].length) {
      h1.innerHTML += sentences[index].charAt(charCount);
    }
    if (charCount === sentences[index].length + speed / 10) {
      h1.innerHTML = h1.innerHTML.slice(0, -1);
      charCount--;
    }
    charCount++;
    if (h1.innerHTML.length === 0) {
      if (index === sentences.length - 1) {
        index = 0;
      } else {
        index++;
      }
      charCount = 0;
    }
  }, speed);
}

type();
