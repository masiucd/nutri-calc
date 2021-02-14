;(() => {
  const addListener = (selector, eventType) => listener => {
    const element = document.querySelector(selector)
    element.addEventListener(eventType, listener)
  }

  const merge = (b1, b2) => listener => {
    b1(listener)
    b2(listener)
  }

  const plusClick = addListener("#increment", "click")
  const minusClick = addListener("#decrement", "click")

  const hardCode = newValue => broadcaster => listener => {
    broadcaster(value => {
      listener(newValue)
    })
  }

  const add = initial => broadcaster => listener => {
    broadcaster(value => {
      listener((initial += value))
    })
  }

  const plusOne = hardCode(1)(plusClick)
  const minusOne = hardCode(-1)(minusClick)

  const counter = add(0)(merge(plusOne, minusOne))

  const renderHtml = x => {
    document.querySelector("#count").innerHTML = `<span>${x}</span>`
  }

  counter(value => {
    console.log(value)
    renderHtml(value)
  })
})()
