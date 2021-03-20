import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

import AppBar from './components/AppBar';
import Container from './components/Container';
import Header from './components/Header';
import Spinner from './components/Spinner';

const HomeView = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: 'home-page' */),
);

const MovieDetailsPageView = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: 'movies-details-page' */
  ),
);

const MoviesPageView = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: 'movies-page' */),
);

const App = () => (
  <>
    <Header>
      <Container>
        <AppBar />
      </Container>
    </Header>
    <Container>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route path={routes.movieDetails} component={MovieDetailsPageView} />
          <Route exact path={routes.movies} component={MoviesPageView} />
        </Switch>
      </Suspense>
    </Container>
  </>
);

export default App;
