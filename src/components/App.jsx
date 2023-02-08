import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { tmdbMovieAPI } from 'api/tmdbAPI';

import Snippet from 'components/Snippet/Snippet.jsx';

const Layout = lazy(() => import('pages/Layout/Layout.jsx'));
const Home = lazy(() => import('pages/Home/Home.jsx'));
const Movies = lazy(() => import('pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));
const NotFound = lazy(() => import('pages/NotFound/NotFound.jsx'));

const TEXT_DEFAULT = 'Loading...';

export const App = () => {
  const [movArr, setMovArr] = useState(null);
  const [history, setHistory] = useState('/');

  useEffect(() => {
    const topRes = tmdbMovieAPI('trending/all/day', 1);
    topRes.then(value => {
      setMovArr(value.movData);
    });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          path="goit-react-hw-05-movies"
          element={<NavLink to={'/'}>Back Home</NavLink>}
        />
        <Route
          index
          element={
            <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
              <Home arr={movArr} setHistory={setHistory} />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
              <Movies setHistory={setHistory} />
            </Suspense>
          }
        />
        <Route
          path="movies/:movieId"
          exact
          element={
            <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
              <MovieDetails history={history} />
            </Suspense>
          }
        >
          <Route
            path="cast"
            exact
            element={
              <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            exact
            element={
              <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
