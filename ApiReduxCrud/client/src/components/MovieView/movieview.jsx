import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MovieView = () => {
  const { state } = useLocation();
  const [movie, setMovie] = useState(state?.movie);

  useEffect(() => {
      setMovie(state?.movie);
  }, [state]);

  if (!movie) {
      return <div>No movie data available</div>;
  }

  return (
      <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold mb-4'>{movie.title}</h2>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Description:</strong> {movie.description}</p>
      </div>
  );
};


export default MovieView