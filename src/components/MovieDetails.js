import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const MovieDetails = ({ selectedMovie }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!selectedMovie) {
    return <div>Select a movie to see details.</div>;
  }

  const backgroundImage = `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Card
        sx={{
          position: 'relative',
          minHeight: '450px',
          width: 320,
          borderRadius: 2,
          overflow: 'hidden',
          margin: '0 10px', // Add margin for spacing
          transition: 'margin-top 0.5s ease', // Add transition
          marginTop: showDetails ? '-150px' : '0', // Adjust the value for smooth transition
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1, // Adjust opacity as needed
          }}
        />
        <CardContent
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            color: '#fff',
            padding: 2,
          }}
        >
          <Typography variant="h5" component="div" gutterBottom>
            {selectedMovie.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Rating:
            <Rating
              name="read-only"
              value={selectedMovie.vote_average / 2}
              readOnly
            />
          </Typography>
        </CardContent>

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            marginTop: '5px',
          }}
          onClick={() => setShowDetails(!showDetails)}
        >
          <ArrowUpwardIcon />
        </div>
      </Card>

      {showDetails && (
        <Card
          sx={{
            width: 320,
            borderRadius: 2,
            overflow: 'hidden',
            margin: '0 10px',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.125)',
            backdropFilter: 'blur(14px) saturate(180%)',
            WebkitBackdropFilter: 'blur(14px) saturate(180%)',
            marginTop: '-5px', // Add this line to adjust the position
          }}
        >
          <CardContent sx={{ color: 'white', padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              Movie Info
            </Typography>
            <Typography variant="body2" gutterBottom>
              {selectedMovie.overview}
            </Typography>
            {/* You can add other details as needed */}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;
