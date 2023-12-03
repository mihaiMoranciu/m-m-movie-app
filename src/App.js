// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PopularMovies from './pages/PopularMovies';
import FavoriteMovies from './pages/FavoriteMovies';
import SearchMovies from './pages/SearchMovies';

function App() {
  return (
    <Router>
      <div style={{
      backgroundImage: 'url("./mesh-gradient.svg")', // Updated path to mesh-gradient.png
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Ensure the background covers the entire viewport
    }} > 
        <Navbar />
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
          <Route path="/search" element={<SearchMovies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
