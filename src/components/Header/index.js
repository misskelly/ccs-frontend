import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu'

const Header = () => {
  return (
    <header className="header">
      <NavLink
        className="ccs-logo-wrapper"
        to="/">
        <img 
          src = {require('../../assets/images/CCS_Horizontal_white.png')}
          className="ccs-logo-img"
          alt="Colorado Crisis Services logo with swirly tree, link to home page"
        />
      </NavLink>
      <Menu />
    </header>
  )
}

export default Header;
