import React from 'react';
import Button from '../Button';
import { serviceText1, serviceText2 } from '../../utils/text.js'

export const HomePage = () => {
  return (
    <main className="home-page">
      <h2 className="home-heading">
        When you're feeling
        <span className="under-water-span">
          Under Water
        </span>
      </h2>
      <section className="btn-wrapper">
      <Button kind="call" />
      <Button kind="text" />
      <Button kind="walk-in" />
      <p className="service-desc-p">
        { serviceText1 }
        <a className="phone-num-link" 
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
      </section>
    </main>
  )
}

export default HomePage;
