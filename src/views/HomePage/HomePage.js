import React, { Component } from 'react';
import MoviesList from '../../components/MovieList/MoviesList';
import styles from './HomePage.module.scss';
import api from '../../api';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await api.fetchTrendingMovies().then(response =>
      this.setState({
        movies: response.data.results,
      }),
    );
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1 className={styles.title}>Tranding movies</h1>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default HomePage;
