// App.js
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  // State for movies list and filtered movies
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'inception.jpeg',  // Make sure these images are in the public/images folder
      rating: 8.8,
    },
    {
      title: 'The Dark Knight',
      description: 'The legendary Batman movie, directed by Christopher Nolan.',
      posterURL: 'thedarknight.jpeg',
      rating: 9.0,
    },
    {
      title: 'Interstellar',
      description: 'A journey through space and time.',
      posterURL: 'interstellar.jpeg',
      rating: 8.6,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  // Handle adding a new movie
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filter movies by title and rating
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

  // Use effect to filter movies whenever title or rating filter changes
  useEffect(() => {
    filterMovies();
  }, [titleFilter, ratingFilter]);

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          addMovie({
            title: 'The Prestige',
            description: 'A tale of two magicians.',
            posterURL: 'prestige.jpeg', // Add an image in the public/images folder
            rating: 8.5,
          })
        }
      >
        Add Movie
      </button>
    </div>
  );
}

export default App;


