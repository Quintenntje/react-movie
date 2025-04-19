import { useParams } from "react-router-dom";
import { slugToTitle } from "../utils/slugify.js";
import { search, getActorsFromMovie } from "../services/api.js";
import { useState, useEffect } from "react";
import ActorCard from "../components/ActorCard.jsx";

function Details() {
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState([]);

  const { slug: movieSlug } = useParams();
  const movieTitle = slugToTitle(movieSlug);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const searchResults = await search(movieTitle);
        if (searchResults.length > 0) {
          const selectedMovie = searchResults[0];
          setMovie(selectedMovie);
          getActors(selectedMovie.id);
        }
      } catch (err) {
        console.log(err);
      }
    }

    async function getActors(movieId) {
      try {
        const actorList = await getActorsFromMovie(movieId);
        setActors(actorList);
      } catch (err) {
        console.log(err);
      }
    }

    if (movieTitle) {
      getMovieDetails();
    }
  }, [movieTitle]);
  if (!movie) {
    return <p className="text-gray-50">Loading...</p>;
  }

  return (
    <>
      <section className="my-20">
        <div key={movie.id}>
          <header className="flex gap-4 items-center text-4xl text-gray-50 mb-10">
            <h1 className="text-6xl">{movie.title}</h1>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average} / 10</p>
          </header>
          <section className="text-gray-50 flex justify-center gap-6">
            <div>
              <img
                className="h-full w-full group-hover:opacity-50 transition-opacity duration-300"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div>
              <p>{movie.overview}</p>
            </div>
          </section>
        </div>
      </section>

      <section>
        <h2 className="text-gray-50 text-4xl">Actors</h2>
        <div className="grid grid-cols-5 items-center justify-center gap-8">
          {actors.map((actor) => (
            <ActorCard actor={actor} key={actor.id}></ActorCard>
          ))}
        </div>
      </section>
    </>
  );
}

export default Details;
