const API_URL = "https://starwars.egghead.training/"

fetch(API_URL + "/films")
  .then(res => res.json())
  .then(data => console.log(data))
