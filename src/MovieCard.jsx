export default function MovieCard({ movie }) {
    return (
      <div className="movie">
        <img src={movie.Poster} alt="poster" />
        <p>{movie.Title}</p>
      </div>
    );
  }