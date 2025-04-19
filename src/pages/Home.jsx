import { useEffect, useState } from "react";
import { getPopularMovies, getPopularSeries, search } from "../services/api.js"; // Fixed typo in import
import Button from "../components/Button.jsx";

import HomeSection from "../partials/HomeSection.jsx";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Default to false

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const [popularMovies, popularSeries] = await Promise.all([
          getPopularMovies(),
          getPopularSeries(),
        ]);
        setMovies(popularMovies);
        setSeries(popularSeries);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const searchResults = await search(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to search movies. Please try again.");
    } finally {
      setLoading(false);
    }
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
            className="text-gray-400 w-full md:w-64 px-4 py-2 outline-none border-2 border-gray-300 focus:border-sky-500 rounded-lg transition-colors duration-200 placeholder-gray-400"
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button text="Search" type="submit"></Button>{" "}
          {/* Added type="submit" */}
        </form>
      </section>
      {error && <div className="text-red-500 text-center">{error}</div>}{" "}
      {/* Styled error */}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <HomeSection data={movies} title="Popular Movies" link="/movies" />
          <HomeSection data={series} title="Popular Series" link="/series" />
        </>
      )}
    </div>
  );
}

export default Home;
