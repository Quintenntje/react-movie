import { useSwiper } from "swiper/react";
function ArrowBtn({ image, place }) {
  const swiper = useSwiper();
  return (
    <button
      onClick={
        place === "right" ? () => swiper.slideNext() : () => swiper.slidePrev()
      }
      className="inline-flex items-center justify-center rounded-full p-1 text-gray-50 cursor-pointer hover:bg-gray-50 hover:text-gray-700"
    >
      {image}
    </button>
  );
}

export default ArrowBtn;
