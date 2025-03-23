import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { title } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return <h2 className="text-center text-2xl text-red-600">Movie Not Found!</h2>;
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold">{movie.title}</h2>
      <p className="text-lg text-gray-700">{movie.description}</p>
      <iframe
        className="mt-4"
        width="560"
        height="315"
        src={movie.trailerLink}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <button
        onClick={() => navigate('/')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
}

export default MovieDetails;

