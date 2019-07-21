import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import { serviceText1, serviceText2 } from '../../utils/text.js'

export const HomePage = () => {
  return (
    <main className="home-page">
      <h2 className="home-heading">
        When you're feeling
        <strong className="under-water-span">
          Under Water
        </strong>
      </h2>
      <h3 className="help-hours-heading">no-cost, confidential help is available 24/7</h3>
      <nav aria-label="Links to access help" className="btn-wrapper">
        <Button kind="call" size="large"/>
        <Button kind="text" size="large"/>
        <Button kind="walk-in" size="large"/>
      </nav>
      <p className="service-desc-p"
        role="complementary">
        { serviceText1 }
        <a 
          className="phone-num-link" 
          href="tel: +1-844-493-8255"> 
          +1-844-493-TALK 
        </a>
        (8255), or
        <a className="text-link" 
          href="/">
          text TALK to 38255
        </a>
        { serviceText2 }
        <a className="ccs-website-link" 
          href="https://coloradocrisisservices.org/press/">
          ColoradoCrisisServices.org.
        </a>
      </p>
      <footer>
        <NavLink className="learn-more-link"
          to="/more-info">
          Service Info/FAQs
        </NavLink>
        <NavLink className="all-centers-link"
          to="/more-info">
          All Walk-In Centers
        </NavLink>
        <NavLink className="dev"
          to="/more-info">
          Development Team
        </NavLink>
        <NavLink
          className="ccs-link-footer"
          to="/">
          <img 
            src = {require('../../assets/images/CCS_Vertical_Color.png')}
            className="ccs-logo-img"
            alt="Colorado Crisis Services logo with swirly tree, link to home page"
          />
      </NavLink>
      </footer>
    </main>
  )
}

export default HomePage;
