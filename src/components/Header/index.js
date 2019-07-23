import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu';

// TODO: Add animation to dropdown,
// TODO: call and text links
const Header = () => (
  <header className="header">
    <NavLink
      className="logo-wrapper-link btn"
      to="/"
    >
      <h1 className="hidden-heading">In Crisis</h1>
      <img
        src={require('../../assets/images/in-crisis-logo.svg')}
        className="incrisis-logo-img"
        alt="InCrisis logo"
        aria-hidden="true"
      />
    </NavLink>
    <Menu />
  </header>
);

export default Header;
