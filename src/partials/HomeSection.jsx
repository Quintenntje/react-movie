import MovieCard from "../components/MovieCard.jsx";
import ArrowBtn from "../components/ArrowBtn.jsx";
import SeeMoreBtn from "../components/SeeMorebtn.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function HomeSection({ data, title, link }) {
  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-50 font-bold text-5xl mb-4">{title}</h2>
      </div>
      <Swiper
        className="min-h-[300px]"
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
        {data.map((dataItem) => (
          <SwiperSlide key={dataItem.id}>
            <MovieCard movie={dataItem} key={dataItem.id} />
          </SwiperSlide>
        ))}
        <SwiperSlide className="flex items-center justify-center h-full min-h-[350px]">
          <div className="flex items-center justify-center h-full min-h-[350px]">
            <SeeMoreBtn desination={link}></SeeMoreBtn>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}


export default HomeSection;