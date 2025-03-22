import React from 'react';

function MovieList({ movies }) {
  return (
    <div className=" movie-container flex flex-wrap justify-center gap-6 mt-4">
      {movies.map((movie, index) => (
        <div key={index} className=" movie-card flex flex-wrap bg-white">
          <img
            src={movie.posterURL}  // ✅ Use correct path
            alt={movie.title}
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
          <h3 className="text-xl font-semibold text-center">{movie.title}</h3>
          <p className="text-center text-sm">{movie.description}</p>
          <p className="text-center text-lg font-bold">Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;




