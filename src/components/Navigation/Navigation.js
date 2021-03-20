import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <NavLink
        exact
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
        to={routes.home}
      >
        Home
      </NavLink>
      <NavLink
        exact
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
        to={routes.movies}
      >
        Movies
      </NavLink>
    </>
  );
};

export default Navigation;
