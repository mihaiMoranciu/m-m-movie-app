// src/components/PopularMoviesGrid.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieDetails from './MovieDetails';

const PopularMoviesGrid = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get('/movie/popular', {
          params: {
            page: 1,
          },
        });
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center items within each row
        gap: '50px', // Add spacing between the rows
      }}
    >
      {popularMovies.map((movie) => (
        <MovieDetails
          key={movie.id}
          selectedMovie={movie}
          style={{ flexBasis: '48%', marginBottom: '20px' }} // Adjust the width and add margin at the bottom for spacing
        />
      ))}
    </div>
  );
};

export default PopularMoviesGrid;
