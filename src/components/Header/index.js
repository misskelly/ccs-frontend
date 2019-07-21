import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu'

const Header = () => {
  return (
    <header className="header">
      <NavLink
        className="ccs-logo-wrapper"
        to="/">
        <h1 className="hidden-heading">In Crisis</h1>
        <img 
          src = {require('../../assets/images/in-crisis-logo.svg')}
          className="ccs-logo-img"
          alt="Colorado Crisis Services logo with swirly tree, link to home page"
          aria-hidden="true"
        />
      </NavLink>
      <Menu />
    </header>
  )
}

export default Header;
