import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './styles/base.scss';

import Cast from './components/Cast/Cast';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import Reviews from './components/Reviews/Reviews';
import Container from './components/Container';
import Header from './components/Header';

const App = () => (
  <>
    <Header>
      <Container>
        <ul className="Link-list">
          <NavLink
            exact
            className="NavLink"
            activeClassName="NavLink--active"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact
            className="NavLink"
            activeClassName="NavLink--active"
            to="/movies"
          >
            Movies
          </NavLink>
        </ul>
      </Container>
    </Header>
    <Container>
      {/* <ul className="Link-list">
        <NavLink
          exact
          className="NavLink"
          activeClassName="NavLink--active"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          exact
          className="NavLink"
          activeClassName="NavLink--active"
          to="/movies"
        >
          Movies
        </NavLink>
        <NavLink
          exact
          className="NavLink"
          activeClassName="NavLink--active"
          to="/movies/:movieId"
        >
          Movies Details Page
        </NavLink>
        <NavLink
          exact
          className="NavLink"
          activeClassName="NavLink--active"
          to="/movies/:movieId/cast"
        >
          Cast
        </NavLink>
        <NavLink
          exact
          className="NavLink"
          activeClassName="NavLink--active"
          to="/movies/:movieId/reviews"
        >
          Reviews
        </NavLink>
      </ul> */}

      <Switch>
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        {/* <Route exact path="/movies/:movieId/cast" component={Cast} /> */}
        {/* <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Container>
  </>
);

export default App;
