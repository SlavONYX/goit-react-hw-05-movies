import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { tmdbMovieIdAPI } from 'api/tmdbAPI';
import { Link } from './MovieDetail.styled';
import MainInf from 'components/MainInf/MoviesList.jsx';

const MovieDetails = ({ history }) => {
  const { movieId } = useParams();
  const [movieObj, setMovieObj] = useState(null);

  useEffect(() => {
    const movie = tmdbMovieIdAPI('movie', `${movieId}`);
    if (movie) {
      movie.then(value => {
        if (!value) return;
        setMovieObj(value.data);
      });
    }
  }, [movieId]);

  return (
    <main>
      <Link to={history}>🔙</Link>
      {movieObj && <MainInf movieObj={movieObj} />}
      <Outlet />
    </main>
  );
};

export default MovieDetails;