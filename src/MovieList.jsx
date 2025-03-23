import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <div className="movie-container flex flex-wrap justify-center gap-6 mt-4">
      {movies.map((movie, index) => (
        <Link key={index} to={`/movie/${movie.title}`} className="no-underline">
          <div className="movie-card flex flex-wrap bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg">
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="w-48 h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">{movie.title}</h3>
            <p className="text-center text-sm">{movie.description}</p>
            <p className="text-center text-lg font-bold">⭐ {movie.rating}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;





