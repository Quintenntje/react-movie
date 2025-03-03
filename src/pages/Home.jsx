import MovieCard from "../components/MovieCard.jsx";
import { useEffect, useState } from "react";
import { getPopularMovies, search } from "../services/api.js";
import Button from "../components/Button.jsx";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const searchResults = await search(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  return (
    <div>
      <section className="my-48">
        <h2 className="text-gray-50 text-6xl text-center mb-8">
          Browse through your favorite movies
        </h2>
        <form
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
          onSubmit={handleSearch}
        >
          <input
            className=" text-gray-400 w-full md:w-64 px-4 py-2 outline-none border-2 border-gray-300 focus:border-sky-500 rounded-lg transition-colors duration-200 placeholder-gray-400"
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button text="Search"></Button>
        </form>
      </section>
      {error && <div>Failed to load, please try again later</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-16 place-items-center">
          {searchQuery && <div>search results for: {search}</div>}
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </section>
      )}
    </div>
  );
}

export default Home;
