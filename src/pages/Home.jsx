import MovieCard from "../components/MovieCard.jsx";
import { useEffect, useState } from "react";
import { getPopularMovies, search } from "../services/api.js";
import Button from "../components/Button.jsx";
import ArrowBtn from "../components/ArrowBtn.jsx";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

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
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <div className="flex justify-between">
            <ArrowBtn
              place={"left"}
              image={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              }
            ></ArrowBtn>

            <ArrowBtn
              place={"right"}
              image={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              }
            ></ArrowBtn>
          </div>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} key={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default Home;
