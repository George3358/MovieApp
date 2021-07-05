import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import {useParams} from 'react-router-dom'

// import movies from "../movies.json";

function Search() {
  const { q } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=" +q+ "&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [q]);

  return (
    <div className="movie-list">
      {movies.map((item) => (
        <MovieItem data={item} />
      ))}
    </div>
  );
}

export default Search;
