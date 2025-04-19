import { Link } from "react-router-dom"; 
import { stringToSlug } from "../utils/slugify.js";

function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert("Clicked");
  }

  return (
    <article>
      <Link to={`/movie/${stringToSlug(String(movie.title))}`}>
        <div className="relative group mb-2">
          <img
            className="h-full w-full group-hover:opacity-50 transition-opacity duration-300"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="place-center absolute top-4 right-4 hidden p-2 cursor-pointer text-gray-50 hover:bg-gray-50 hover:text-gray-900 rounded-full group-hover:grid">
            <button className="cursor-pointer" onClick={onFavoriteClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-gray-50">
          <h2 className="text-gray-50 text-xl font-semibold mb-1">
            {movie.title}
          </h2>
          <p className="flex gap-2 items-center text-gray-400 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 hover:fill-gray-50 hover:stroke-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            {Math.round(movie.vote_average * 10) / 10}
          </p>
          <time className="text-gray-600 text-sm ">{movie.release_date}</time>
        </div>
      </Link>
    </article>
  );
}

export default MovieCard;
