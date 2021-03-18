import React, { Component } from 'react';
import styles from './MoviesPage.module.scss';
import { Link } from 'react-router-dom';

class MoviesPage extends Component {
  onClickHandler = id => {
    console.log(id);
  };

  render() {
    const { films, url } = this.props;
    return (
      <ul className={styles.list}>
        {films.map(({ id, title, backdrop_path, release_date }) => (
          <li
            key={id}
            className={styles.item}
            onClick={() => this.onClickHandler(id)}
          >
            <Link to={`${url}movies/${id}`}>
              <img
                width="370"
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              ></img>
              <h2 className={styles.title}>
                {title} ({release_date.slice(0, 4)})
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default MoviesPage;
