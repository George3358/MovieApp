import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const link = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  console.log(movie);

  if (!movie) return null;

  return (
    <div className="movie">
      <img src={link + movie.poster_path} alt="" />
      <div className="movie-text">
        <h1>{movie.title}</h1>
        <h1 className="tag">Слоган:{movie.tagline}</h1>
        <p>{movie.overview}</p>
        <p className="about">О фильме</p>
        <p className="date">Дата выхода:{movie.release_date}</p>
        <p className="runtime">Длительность: {movie.runtime} минут</p>
      </div>
    </div>
  );
}

export default Movie;
