import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time} minutes</p>
      <div>
        Genres:{" "}
        {movie.genres.map((genre) => (
          <span key={genre}>{genre} </span>
        ))}
      </div>
    </div>
  );
}

export default Movie;
