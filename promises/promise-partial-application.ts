const getData = (url: string) => (endpoint: string) => (handler: Function) => {
  const response = fetch(`${url}/${endpoint}`)
    .then(res => res.json())
    .then(res => handler(res))

  return response
}

const starWarsData = getData("https://swapi.dev/api")

const lukeSkywalker = starWarsData("people/1")
const planetTatooine = starWarsData("planets/1")

// const r = lukeSkywalker((x: any) => console.log(x))
const rr = planetTatooine((x: any) => console.log(x))
