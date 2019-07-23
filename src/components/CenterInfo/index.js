import React from 'react';
import Logo from '../../assets/images/wheatridge-logo.png';

const CenterInfo = () => (
  <article className="center-card">
    <header>
      <img
        src={Logo}
        alt="Center logo"
        className="cover-image"
      />
      <div className="hours">
        24/7
      </div>
    </header>
    <main className="card-main">
      <h3 className="center-name">
        Crisis & Recovery Center
      </h3>
      <address className="center-info">
        <h4 className="phone-heading addr">
          phone:
        </h4>
        <a
          className="address-block"
          href="tel:3034250300"
        >
            (303)-425-0300
        </a>
        <h4 className="link-heading addr">
          website:
        </h4>
        <a
          className="address-block link"
          href="https://www.jcmh.org/"
        >
          www.jcmh.org
        </a>
        <h4 className="address-heading addr">
          address:
        </h4>
        <ul className="address-ul address-block">
          <li className="address-li">
            4643 Wadsworth Blvd
          </li>
          <li className="address-li">
            Wheat Ridge, CO 80033
          </li>
        </ul>
      </address>
    </main>
    <a
      className="map-link"
      href="https://www.jcmh.org/"
    >
        view on map
    </a>
  </article>
);

export default CenterInfo;
