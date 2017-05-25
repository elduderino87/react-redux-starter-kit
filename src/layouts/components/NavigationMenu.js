import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';


export const NavigationMenu = ({ loading, newNotificationsCount }) => {
  return (
    <nav>
      <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home (<i>{newNotificationsCount}</i>) New</IndexLink>
      {' | '}
      <Link to='/about' activeClassName='page-layout__nav-item--active'>About</Link>
      {loading && <span>Loading...</span>}
    </nav>
  );
};



NavigationMenu.propTypes = {
  loading: PropTypes.bool.isRequired,
  newNotificationsCount: PropTypes.number.isRequired
};


export default NavigationMenu;