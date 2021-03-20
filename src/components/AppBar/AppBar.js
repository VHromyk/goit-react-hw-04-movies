import React from 'react';
import styles from './AppBar.module.scss';
import Navigation from '../Navigation';

const AppBar = () => {
  return (
    <ul className={styles.list}>
      <Navigation />
    </ul>
  );
};

export default AppBar;
