import React, { useState } from 'react';
import { faqs } from '../../assets/staticData/staticFAQ';

const MoreInfoPage = () => {
  const [answer, setAnswer] = useState('');

  const questions = faqs.map((faq, index) => {
    return <p className="faq-question" role="button" aria-pressed="false" key={index} onClick={ () => setAnswer(faq.answer) }> {faq.question} </p>
  });


  return (
    <section className="faq-container">
      {questions}
      {
        answer
        &&
        <>
          <p className="faq-answer">{answer}</p>
          <img 
            className="x-button"
            alt="close answer modal icon"
            role="button" 
            src={require("../../assets/images/icons/cancel-x.svg")}
            onClick={ () => setAnswer('') }
          />
        </>
      }
    </section>
  );
};

export default MoreInfoPage;