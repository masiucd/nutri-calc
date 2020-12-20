const click = listener => {
  document.querySelector("#btn-click").addEventListener("click", listener)
}

const timeOut = listener => {
  setTimeout(listener, 1200)
}

const getUser = listener => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(listener)
}

const nest = inner => outer => listener => {
  outer(() => {
    inner(listener)
  })
}

nest(getUser)(nest(timeOut)(click))(data => {
  console.log(data)
})
