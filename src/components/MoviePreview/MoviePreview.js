import React from 'react';
import propTypes from 'prop-types';
import styles from './MoviePreview.module.scss';
import defaultImg from '../../image/coming_soon.jpg';

const MoviePreview = ({ title, imgUrl, date }) => {
  return (
    <>
      {imgUrl ? (
        <img width="370" src={`https://image.tmdb.org/t/p/w500${imgUrl}`}></img>
      ) : (
        <img width="370" height="207" src={defaultImg}></img>
      )}
      <h2 className={styles.title}>
        {title} ({date.slice(0, 4)})
      </h2>
    </>
  );
};

MoviePreview.propTypes = {
  title: propTypes.string,
  imgUrl: propTypes.string,
  date: propTypes.string,
};

export default MoviePreview;
