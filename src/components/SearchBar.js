// src/components/SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onMovieSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event, newValue) => {
    setQuery(newValue);

    try {
      const response = await axios.get('/search/movie', {
        params: {
          query: newValue,
        },
      });
      setSuggestions(response.data.results);
    } catch (error) {
      console.error('Error fetching movie suggestions:', error);
    }
  };

  return (
    <Autocomplete
      options={suggestions}
      getOptionLabel={(option) => option.title}
      onChange={onMovieSelect}
      inputValue={query}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for a movie..."
          variant="outlined"
          sx={{
            color: 'white',
            minWidth: 300,
          }}
        />
      )}
    />
  );
};

export default SearchBar;
