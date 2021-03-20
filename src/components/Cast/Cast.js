import React, { Component } from 'react';
import avatar from '../../image/avatar.jpg';
import styles from './Cast.module.scss';
import api from '../../api';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await api.fetchCast(movieId).then(response =>
      this.setState({
        cast: response.data.cast,
      }),
    );
  }
  render() {
    const { cast } = this.state;
    return (
      <>
        <h2 className={styles.title}>Cast</h2>
        <ul className={styles.list}>
          {cast.map(({ name, cast_id, profile_path, character }) => (
            <li key={cast_id} className={styles.item}>
              {profile_path ? (
                <img
                  className={styles.image}
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                />
              ) : (
                <img src={avatar} width="200" />
              )}

              <p>Name: {name}</p>
              <p className={styles.character}>Character: {character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
