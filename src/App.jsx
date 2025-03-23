import React, { useState } from 'react';
import MovieList from './MovieList';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';

function App() {
  const [movies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: '/images/inception.jpeg',
      rating: 8.8,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    {
      title: 'The Dark Knight',
      description: 'The legendary Batman movie, directed by Christopher Nolan.',
      posterURL: '/images/thedarknight.jpeg',
      rating: 9.0,
      trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY'
    },
    {
      title: 'Interstellar',
      description: 'A journey through space and time.',
      posterURL: '/images/interstellar.jpeg',
      rating: 8.6,
      trailerLink: 'https://www.youtube.com/embed/zSWdZVtXT7E'
    },
    {
      title: 'The Prestige',
      description: 'A tale of two magicians.',
      posterURL: '/images/prestige.jpeg',
      rating: 8.5,
      trailerLink: 'https://www.youtube.com/embed/RLtaA9fFNXU'
    },
  ]);
  return (
    <div className="flex bg-gray-200">
      <h1 className="text-3xl font-bold my-4">My Movie App</h1>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;




