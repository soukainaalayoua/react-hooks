import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <Link to={`/movie/${title}`} className="no-underline">
      <div className="movie-card flex flex-row items-center gap-4 p-4 border rounded-lg shadow-md bg-gray-100 cursor-pointer hover:shadow-lg">
        <img className="w-48 h-48 object-cover rounded-lg" src={posterURL} alt={title} />
        <div>
          <h3 className="text-2xl font-bold text-blue-600">{title}</h3>
          <p className="text-lg text-gray-700">{description}</p>
          <p className="text-lg text-gray-900 font-semibold">⭐ Rating: {rating}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;



