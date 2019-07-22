import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu'

const Header = () => {
  return (
    <header className="header">
      <NavLink
        className="ccs-logo-wrapper btn"
        to="/">
        <h1 className="hidden-heading">In Crisis</h1>
        <img 
          src = {require('../../assets/images/in-crisis-logo.svg')}
          className="ccs-logo-img"
          alt="InCrisis logo"
          aria-hidden="true"
        />
      </NavLink>
      <Menu />
    </header>
  )
}

export default Header;
