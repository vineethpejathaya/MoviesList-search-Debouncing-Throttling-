const API_KEY = "api_key=3c5305e1c05f3abcb2085e9e4403fbf4";
let baseUrl = "https://api.themoviedb.org/3";
let Api_url = baseUrl + "/movie/latest" + API_KEY;
let imageUrl = "https://image.tmdb.org/t/p/w500/";

getMovies(Api_url);

function getMovies(url) {
  fetch(url)
    .then((res) => res.data)
    .then((data) => {
      showMovies(data.results);
    });
}

function showMovies(data) {
  data.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `<img src="" alt="image" />
    <div class="movie-info">
      <h3>Movie Title</h3>
      <span>9.8</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil
        velit libero excepturi dicta ratione voluptas aut, fugit tempore
        laudantium! Voluptatibus, deserunt aut?
      </p>
    </div>`;
  });
}

