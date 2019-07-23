import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import { serviceText1, serviceText2 } from '../../utils/text.js';
import Water from '../../assets/images/water.png';

export const HomePage = () => {
  return (
    <main className="home-page">
      <img 
        src={Water} 
        className="water-img"
        alt="view from underwater" 
        aria-hidden="true"/>
      <h2 className="home-heading">
        When you're feeling
        <span className="under-water-span">
          Under Water
        </span>
      </h2>
      <h3 className="help-hours-heading">
        no-cost, confidential <br/> 
        <strong>help is available 24/7</strong>
      </h3>
      <nav aria-label="Links to access help" 
        className="btn-links-wrapper">
        <Button kind="call" size="large"/>
        <Button kind="text" size="large"/>
        <Button kind="walk-in" size="large"/>
      </nav>
      <p 
        className="service-desc-p"
        role="complementary">
        { serviceText1 }
        <a 
          className="phone-num-link inline-link" 
          href="tel: +1-844-493-8255"> 
          +1-844-493-TALK
        </a>
        (8255), or 
        <a 
          className="text-link inline-link" 
          href="/">
           text TALK to 38255
        </a>
        { serviceText2 }
        <a 
          className="ccs-website-link inline-link" 
          href="https://coloradocrisisservices.org/">
          ColoradoCrisisServices.org.
        </a>
      </p>
      <footer className="info-links-footer">
        <a  
          className="ccs-link-footer"
          href="https://coloradocrisisservices.org/">
          <img 
            src = {require('../../assets/images/CCS_Vertical_Reversed.png')}
            className="ccs-logo-img"
            alt="Colorado Crisis Services logo with swirly tree, link to home page"
          />
        </a>
        <NavLink 
          className="learn-more-link footer-link btn"
          to="/more-info">
          Service Info/FAQs
        </NavLink>
        <NavLink 
          className="all-centers-link footer-link btn"
          to="/all-centers">
          All Walk-In Centers
        </NavLink>
        <NavLink 
          className="dev-team-link footer-link btn"
          to="/more-info">
          Development Team
        </NavLink>
      </footer>
    </main>
  )
}

export default HomePage;
