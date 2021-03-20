import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from './MoviesList.module.scss';
import MoviePreview from '../MoviePreview/MoviePreview';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, backdrop_path, release_date }) => (
        <li key={id} className={styles.item}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <MoviePreview
              title={title}
              imgUrl={backdrop_path}
              date={release_date}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: propTypes.array.isRequired,
  location: propTypes.object,
};

export default withRouter(MovieList);
