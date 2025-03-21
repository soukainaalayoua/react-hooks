// Filter.js
import React, { useState } from 'react';

function Filter({ setTitleFilter, setRatingFilter }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    setRatingFilter(e.target.value); // Keep the rating as string until it's used
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
        min="1"
        max="10"
      />
    </div>
  );
}

export default Filter;

