const API_KEY = "api_key=3c5305e1c05f3abcb2085e9e4403fbf4";
let baseUrl = "https://api.themoviedb.org/3";
let Api_url = baseUrl + "/movie/latest?" + API_KEY;
let imageUrl = "https://image.tmdb.org/t/p/w500/";

const main = document.getElementById("main");
getMovies(Api_url);

function getMovies(url) {
  fetch(url)
    .then((res) => res.data)
    .then((data) => {
      showMovies(data.results);
    });
}

function showMovies(data) {
  main.innerHTML = "";
  data.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `<img src="${imageUrl + movie.poster_path}" alt="${
      movie.title
    }" />
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <span class="${getColor(movie.vote_average)}">${movie.vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      <p>
       ${movie.overview}
      </p>
    </div>`;

    main.appendChild(movieEl);
  });
}

function getColor(value) {
  if (value >= 8) return "green";
  if (5 <= value < 8) return "orange";
  if (value < 5) return "red";
}
