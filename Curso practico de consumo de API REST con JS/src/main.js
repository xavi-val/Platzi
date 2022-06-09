const API_KEY = "1ff4f121fc4a312890fe0e3e8945a924";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
  },
});

function createMovies(elementContainer, movies) {
  elementContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    movieContainer.addEventListener("click", () => {
      location.hash = `#movie=${movie.id}`;
    });

    const movieIMG = document.createElement("img");
    movieIMG.classList.add("movie-img");
    movieIMG.setAttribute("alt", movie.title);
    movieIMG.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + movie.poster_path
    );

    movieContainer.appendChild(movieIMG);
    elementContainer.appendChild(movieContainer);
  });
  elementContainer.scrollTop = 0;
}

function createCategories(container, categories) {
  container.innerHTML = "";

  categories.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", `id${category.id}`);
    categoryTitle.addEventListener("click", () => {
      location.hash = `#category=${category.id}-${category.name}`;
    });
    categoryTitle.innerText = category.name;
    //   categoryTitle.setAttribute(
    //     "src",
    //     "https://image.tmdb.org/t/p/w300" + movie.poster_path
    //   );

    categoryContainer.appendChild(categoryTitle);
    container.appendChild(categoryContainer);
  });
}

async function getTrendingMoviesPreview() {
  const { data } = await api("/trending/movie/day");
  const movies = data.results;
  createMovies(trendingMoviesPreviewList, movies);
}

async function getTrendingMovies() {
  const { data } = await api("/trending/movie/day");
  const movies = data.results;
  createMovies(genericSection, movies);
}

async function getCategoriesPreview() {
  const { data } = await api("/genre/movie/list");

  const categories = data.genres;

  createCategories(categoriesPreviewList, categories);
}

async function getMoviesByCategory(id) {
  const { data } = await api("/discover/movie", {
    params: {
      with_genres: id,
    },
  });
  const movies = data.results;
  createMovies(genericSection, movies);
}

async function getMoviesBySearch(query) {
  const { data } = await api("/search/movie", {
    params: {
      query,
    },
  });
  const movies = data.results;
  createMovies(genericSection, movies);
}

async function getMoviesById(id) {
  const { data: movie } = await api(`/movie/${id}`);

  const movieImgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  headerSection.style.background = `
  linear-gradient(
    180deg,
    rgba(0,0,0,0.35) 19.27%,
    rgba(0,0,0,0) 29.27%
  ),
  url(${movieImgUrl})`;

  movieDetailTitle.textContent = movie.title;
  movieDetailDescription.textContent = movie.overview;
  movieDetailScore.textContent = movie.vote_average;

  createCategories(movieDetailCategoriesList, movie.genres);
  getRelatedMoviesId(id)
}

async function getRelatedMoviesId(id){
  const { data } = await api(`/movie/${id}/similar`);
  const relatedMovies = data.results;

  createMovies(relatedMoviesContainer,relatedMovies);
}