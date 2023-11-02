const MoviesList = ({ url, movies }) => {

  return (
    <div>
      <h2 className="special-title">My list</h2>
      <ul>
        {movies.map((movie, key) => (
          <li key={key}>
            <p>{movie.title}</p>
            <img
              className="movie-miniature"
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
              alt="movie illustration"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
