import { Link } from "react-router-dom";

function SeeMoreBtn({ desination }) {
  return (
    <Link
      to={desination}
      className="inline-flex items-center justify-center p-4 px-8 border border-gray-50 rounded-2xl bg-transparent text-gray-50 hover:bg-gray-50 hover:text-gray-800"
    >
      See more
    </Link>
  );
}

export default SeeMoreBtn;
