import React from 'react';
import propTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ children }) => (
  <div className={styles.header}>{children}</div>
);

Header.propTypes = {
  children: propTypes.node,
};

export default Header;
