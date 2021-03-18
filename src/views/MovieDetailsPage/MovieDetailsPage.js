import React, { Component } from 'react';
import Axios from 'axios';
import styles from './MoviesDetailsPage.module.scss';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';

class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    title: '',
    release_date: '',
    overview: '',
    vote_average: '',
  };

  async componentDidMount() {
    const API_KEY = 'bf08c0c07642287cbabe383c02818eb3';
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
    );
    this.setState({
      ...response.data,
    });
  }

  render() {
    const {
      poster_path,
      title,
      release_date,
      overview,
      vote_average,
    } = this.state;

    const { url, path } = this.props.match;
    return (
      <>
        <div className={styles.container}>
          <div className={styles.image}>
            <img
              width="400"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            ></img>
          </div>
          <div>
            <h2 className={styles.title}>
              {title} ({release_date.slice(0, 4)})
            </h2>
            <p className={styles.raiting}>
              Movie raiting: {`${vote_average}/10`}
            </p>
            <p className={styles.overview}>{overview}</p>
            <NavLink className={styles.button} to={`${url}/cast`}>
              Cast
            </NavLink>
            <NavLink className={styles.button} to={`${url}/reviews`}>
              Review
            </NavLink>
          </div>
        </div>
        <Route path={`${path}/cast`} component={Cast} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
