// src/pages/SearchMovies.js (assuming you are using it in a page)
import React, { useState } from 'react';
import MovieDetails from '../components/MovieDetails';
import SearchBar from '../components/SearchBar';

const SearchMovies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (event, newValue) => {
    setSelectedMovie(newValue);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <SearchBar onMovieSelect={handleMovieSelect} />
      <MovieDetails selectedMovie={selectedMovie} />
    </div>
  );
};

export default SearchMovies;
