import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: '/images/inception.jpeg',  // ✅ Correct path
      rating: 8.8,
    },
    {
      title: 'The Dark Knight',
      description: 'The legendary Batman movie, directed by Christopher Nolan.',
      posterURL: '/images/thedarknight.jpeg',  // ✅ Correct path
      rating: 9.0,
    },
    {
      title: 'Interstellar',
      description: 'A journey through space and time.',
      posterURL: '/images/interstellar.jpeg',  // ✅ Correct path
      rating: 8.6,
    },
    {
      title: 'The Prestige',
      description: 'A tale of two magicians.',
      posterURL: '/images/prestige.jpeg',  // ✅ Correct path
      rating: 8.5,
    },
  ]);
  

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => {
      const updatedMovies = [...prevMovies, newMovie];
      setFilteredMovies(updatedMovies);
      return updatedMovies;
    });
  };

  const filterMovies = () => {
    let filtered = movies;
    if (titleFilter) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase())
      );
    }
    if (ratingFilter) {
      const rating = parseFloat(ratingFilter);  // Convert rating to a number
      filtered = filtered.filter((movie) => movie.rating >= rating);
    }
    setFilteredMovies(filtered);
  };

  useEffect(() => {
    filterMovies();
  }, [titleFilter, ratingFilter]);

  return (
    <div className="flex  bg-gray-200">
      <h1 className="text-3xl font-bold my-4 ">My Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
      <MovieList movies={filteredMovies} />
      <div className="flex justify-center mt-6 w-full"> 
      <button
        onClick={() =>
          addMovie({
            title: 'The Prestige',
            description: 'A tale of two magicians.',
            posterURL: '/images/prestige.jpeg',
            rating: 8.5,
          })
        }
         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Add Movie
      </button>
      </div>
    </div>
  );
}

export default App;





