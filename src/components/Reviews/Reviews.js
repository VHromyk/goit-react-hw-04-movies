import React, { Component } from 'react';
import Axios from 'axios';

class Reviews extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const API_KEY = 'bf08c0c07642287cbabe383c02818eb3';
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`,
    );
    this.setState({
      results: response.data.results,
    });
    console.log(response);
  }

  render() {
    const { results } = this.state;
    console.log(this.state);
    return (
      <>
        <h2>Review</h2>

        <ul>
          {results.map(result => (
            <li key={result.author}>{result.content}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
