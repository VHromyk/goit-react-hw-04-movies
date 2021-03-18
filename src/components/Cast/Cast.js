import React, { Component } from 'react';
import Axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const API_KEY = 'bf08c0c07642287cbabe383c02818eb3';
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
    );
    this.setState({
      cast: response.data.cast,
    });
  }
  render() {
    const { cast } = this.state;

    return (
      <ul>
        {cast.map(({ name, cast_id, profile_path, character }) => (
          <li key={cast_id}>
            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`}></img>
            <p>Name:{name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
