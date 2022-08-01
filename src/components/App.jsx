import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//import HomePage from 'views/HomePage';
//import MoviesPage from 'views/MoviesPage';
//import Navigation from './Navigation';
//import MovieDetailsPage from 'views/MovieDetailsPage';
//import Cast from './Cast';
//import Reviews from './Reviews';


const HomePage = lazy(() => import('../views/HomePage'));
const MoviesPage = lazy(() => import('../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<h2>Error 404</h2>} />
        </Routes>
      </Suspense>
    </div>
  );
};
