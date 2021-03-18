import React, { Component } from 'react';
import Axios from 'axios';
import MoviesPage from '../MoviesPage';
import styles from './HomePage.module.scss';

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const API_KEY = 'bf08c0c07642287cbabe383c02818eb3';

    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    );

    console.log(response.data.results);
    this.setState({
      films: response.data.results,
    });
  }

  render() {
    const { films } = this.state;
    return (
      <>
        <h1 className={styles.title}>Tranding films</h1>
        <MoviesPage films={films} url={this.props.match.url} />
      </>
    );
  }
}

export default HomePage;
