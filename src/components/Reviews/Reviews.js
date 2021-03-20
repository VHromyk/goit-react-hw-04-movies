import React, { Component } from 'react';
import api from '../../api';

import styles from './Review.module.scss';

class Reviews extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    await api.fetchReviews(movieId).then(response =>
      this.setState({
        results: response.data.results,
      }),
    );
  }

  render() {
    const { results } = this.state;
    return (
      <>
        {results.length > 0 ? (
          <h2 className={styles.title}>Review</h2>
        ) : (
          <h2 className={styles.title}>There are no reviews for this film!</h2>
        )}

        <ul>
          {results.map(result => (
            <li className={styles.item} key={result.author}>
              {result.content}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
