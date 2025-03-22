import React from 'react';

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="movie-card flex flex-row items-center gap-4 p-4 border rounded-lg shadow-md bg-gray-100">
      <img className="w-48 h-48 object-cover rounded-lg" src={posterURL} alt={title} />
      <div>
        <h3 className="text-2xl font-bold text-blue-600">{title}</h3>
        <p className="text-lg text-gray-700">{description}</p>
        <p className="text-lg text-gray-900 font-semibold">⭐ Rating: {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;


