const API_KEY = "ba23120bd7728d7c485b853892900606";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();

  return data.results;
}

export async function search(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();

  return data.results;
}

export async function getActorsFromMovie(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.cast;
}
