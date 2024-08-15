import {Link} from 'react-router-dom';
import React from 'react';

function MovieCard({ id, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Info</Link>
    </div>
  );
}

export default MovieCard;