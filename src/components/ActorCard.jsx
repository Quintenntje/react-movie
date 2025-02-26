function ActorCard({ actor }) {
  return (
    <div className="group">
      <picture>
        <img
          className="group-hover:opacity-50 transition-opacity duration-300 rounded-full"
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}
        />
      </picture>
      <div className="text-gray-50">
        <p className="text-lg">{actor.name}</p>
        <p>{actor.character}</p>
      </div>
    </div>
  );
}

export default ActorCard;
