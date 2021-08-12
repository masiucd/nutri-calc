const root = document.getElementById("root")
const makeElement = (element, attributes, ...children) => {
  const domElement = document.createElement(element)
  for (key in attributes) {
    domElement.setAttribute(key, attributes[key])
  }

  if (children.length > 0) {
    children.forEach(child => {
      if (typeof child === "string") {
        // domElement.appendChild(document.createElement(child))
        domElement.innerHTML += child
      } else {
        domElement.appendChild(child)
      }
    })
  }
  return domElement
}

const res = makeElement(
  "h1",
  {class: "title"},
  "hello",
  makeElement("h2", {class: "title----2"}, "I am title 2")
)

root.appendChild(res)
