import React from 'react';
import PopularMoviesGrid from '../components/PopularMoviesGrid';
import meshGradientImage from '../bright-light-dark-background.jpg'; // Import the image

const PopularMovies = () => {
  return (
    <div style={{
       backgroundImage: `url(${meshGradientImage})`, // Use url() to specify the image
      backgroundAttachment: 'fixed', // Set the background to be fixed
      backgroundSize: 'cover', // Adjust the background size as needed
      padding: '20px', // Add padding for better appearance
    }}>
      <h1 style={{ fontFamily: 'Roboto, sans-serif', textAlign: 'center', color:'white', marginBottom:'200px', marginTop:'100px',fontSize:'50px' }}>
        Today's Most Popular Movies.
      </h1>
      <PopularMoviesGrid />
    </div>
  );
};

export default PopularMovies;
