const API_URL_ST = "https://starwars.egghead.training"
const API_URL_WITH_ERROR = "https://starwars.egghead.training/"

fetch(API_URL_ST + "/films")
  .then(res => res.json())
  .then(res => renderMovies(res))
  .catch(err => {
    console.log("ohh noww")
    console.error(err)
    displayError(err)
  })

function renderMovies(movies) {
  console.log("movies", movies)
  document.getElementById("output").innerHTML = movies
    .map(
      movie =>
        `
        <li>
            <p>Movie: ${movie.title}</p>
            <p>By: ${movie.director}</p>
            <p>${movie.opening_crawl}</p>
        </li>
      `,
    )
    .join("")
}

function displayError(err) {
  document.getElementById("output").innerHTML = `<h3>${err.message} :(</h3>`
}
