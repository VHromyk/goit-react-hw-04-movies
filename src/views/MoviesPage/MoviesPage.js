import React, { Component } from 'react';
import api from '../../api';
import MoviesList from '../../components/MovieList/MoviesList';
import styles from './MoviesPage.module.scss';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  changeValue = event => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.movieSearch();
    this.resetForm();
  };

  movieSearch = () => {
    const { query } = this.state;

    api.fetchMoviesPage(query).then(response =>
      this.setState({
        movies: response.data.results,
      }),
    );
  };

  resetForm = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const { movies, query } = this.state;
    const { history } = this.props;

    return (
      <>
        <form className={styles.form} onSubmit={this.submitHandler}>
          <input
            className={styles.input}
            value={query}
            placeholder="Type movie..."
            onChange={this.changeValue}
          ></input>
          <button className={styles.button} type="submit">
            Search movie
          </button>
        </form>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
