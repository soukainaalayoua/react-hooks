// MovieCard.js
import React from 'react';

function MovieCard({ title, description, posterURL, rating }) {
  const imgStyle = {
    width: '300px',   // Set the width you want
    height: '300px',  // Set the height you want
    objectFit: 'cover', // Ensures the image fits without distortion
  };

  return (
    <div className="movie-card" >
      <img  src={posterURL} alt={title}  />
      <h3 >{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default MovieCard;


