import React from 'react';
import { fredRogersQuotes } from '../../utils/text';

export const Loader = () => {
  const fredRogersQuote = fredRogersQuotes[Math.floor(Math.random()*fredRogersQuotes.length)];
  return(
    <div>
      <h1 className='loader-text'>
        Loading...
      </h1>
      <p>Mr. Rodgers: {fredRogersQuote}</p>
      <article className="icon-spinner"></article>
    </div>
  )
}

export default Loader;