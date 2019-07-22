import React, { useState } from 'react';
import { faqs } from '../../assets/staticData/staticFAQ';

const MoreInfoPage = () => {
  const [answer, setAnswer] = useState('');

  const questions = faqs.map((faq, index) => {
    return <p role="button" aria-pressed="false" key={index} onClick={ () => setAnswer(faq.answer) }> {faq.question} </p>
  });


  return (
    <section>
      {questions}
      {
        answer
        &&
        <aside>
          <p>{answer}</p>
          <img 
            role="button" 
            src={require("../../assets/images/icons/cancel-x.svg")}
            onClick={ () => setAnswer('') }
          />
        </aside>
      }
    </section>
  );
};

export default MoreInfoPage;