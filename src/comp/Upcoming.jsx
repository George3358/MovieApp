import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

function Upcoming() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
      });
  }, []);

  return(
      <div className="movie-list">
          {movies.map((item) => (
              <MovieItem data={item} />
          ))}
      </div>
  )
}

export default Upcoming;