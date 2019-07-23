import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu'

const Header = () => {
  return (
    <header className="header">
      <NavLink
        className="logo-wrapper-link btn"
        to="/">
        <h1 className="hidden-heading">In Crisis</h1>
        <img 
          src = {require('../../assets/images/crisis-logo-hover.svg')}
          className="incrisis-logo-img"
          alt="InCrisis logo"
          aria-hidden="true"
        />
      </NavLink>
      <Menu />
    </header>
  )
}

export default Header;
